// API service for handling server requests
console.log(import.meta.env.DEV);

const API_BASE_URL = import.meta.env.DEV ? '/api' : (import.meta.env.VITE_API_BASE_URL || 'https://api.sdgs-journey.com/api/v1');
const UPLOAD_MAX_SIZE = parseInt(import.meta.env.VITE_UPLOAD_MAX_SIZE) || 5242880; // 5MB
const UPLOAD_ALLOWED_TYPES = (import.meta.env.VITE_UPLOAD_ALLOWED_TYPES || 'image/jpeg,image/jpg,image/png,image/gif,image/webp').split(',');

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    // 如果 API_BASE_URL 是空的，跳過 API 調用（用於開發環境）
    if (!this.baseURL || this.baseURL.trim() === '') {
      console.warn('API_BASE_URL is empty, skipping API call for:', endpoint);
      throw new Error('API_BASE_URL_NOT_CONFIGURED');
    }

    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    const token = localStorage.getItem('auth_token');
    if (token && token !== 'student_token' && token !== 'visitor_token') {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }

      return response;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Validation methods
  validateImageFile(file) {
    const errors = [];

    if (!file) {
      errors.push('No file selected');
      return errors;
    }

    // Check file type
    if (!UPLOAD_ALLOWED_TYPES.includes(file.type)) {
      errors.push(`Invalid file type. Allowed types: ${UPLOAD_ALLOWED_TYPES.join(', ')}`);
    }

    // Check file size
    if (file.size > UPLOAD_MAX_SIZE) {
      const maxSizeMB = (UPLOAD_MAX_SIZE / 1024 / 1024).toFixed(1);
      errors.push(`File size too large. Maximum size: ${maxSizeMB}MB`);
    }

    return errors;
  }

  // Image upload method
  async uploadImage(file, folder = '/') {
    // Validate file first
    const validationErrors = this.validateImageFile(file);
    if (validationErrors.length > 0) {
      throw new Error(validationErrors.join(', '));
    }

    const formData = new FormData();
    formData.append('files', file);
    formData.append('folder', folder);

    // Get auth token
    const token = localStorage.getItem('auth_token');
    const isValidToken = token && token !== 'student_token' && token !== 'visitor_token';

    try {
      const response = await fetch(`${this.baseURL}/media/upload`, {
        method: 'POST',
        headers: {
          // Don't set Content-Type for FormData, let browser set it with boundary
          ...(isValidToken ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: formData,
      });

      if (!response.ok) {
        let errorMessage = `Upload failed (${response.status})`;
        try {
          const errorText = await response.text();
          if (errorText) {
            errorMessage += `: ${errorText}`;
          }
        } catch (textError) {
          // Ignore text parsing errors
        }
        throw new Error(errorMessage);
      }

      const result = await response.json();

      // Validate response structure
      if (!result.uploaded_files || !Array.isArray(result.uploaded_files) || result.uploaded_files.length === 0) {
        throw new Error('Invalid server response: missing or empty uploaded_files array');
      }

      return result;
    } catch (error) {
      console.error('Image upload failed:', error);
      throw error;
    }
  }

  async deleteImage(files) {
    // Validate input
    if (!files || (!Array.isArray(files) && typeof files !== 'string')) {
      throw new Error('Invalid files parameter: must be an array of file URLs or a single file URL string');
    }

    // Ensure files is an array
    const fileList = Array.isArray(files) ? files : [files];

    // Get auth token
    const token = localStorage.getItem('auth_token');
    const isValidToken = token && token !== 'student_token' && token !== 'visitor_token';

    try {
      const response = await fetch(`${this.baseURL}/media/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...(isValidToken ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: JSON.stringify({ file_urls: fileList })
      });

      if (!response.ok) {
        let errorMessage = `Delete failed (${response.status})`;
        try {
          const errorText = await response.text();
          if (errorText) {
            errorMessage += `: ${errorText}`;
          }
        } catch (textError) {
          // Ignore text parsing errors
        }
        throw new Error(errorMessage);
      }

      // Try to parse response as JSON, but don't fail if it's not
      try {
        const result = await response.json();
        return result;
      } catch (parseError) {
        // Return success if response is not JSON
        return { success: true };
      }
    } catch (error) {
      console.error('Image delete failed:', error);
      throw error;
    }
  }

  // Story/Article methods
  async getArticles() {
    return this.request('/articles');
  }

  async getArticle(id) {
    return this.request(`/articles/${id}`);
  }

  async createArticle(articleData) {
    return this.request('/articles', {
      method: 'POST',
      body: JSON.stringify(articleData),
    });
  }

  async updateArticle(id, articleData) {
    return this.request(`/articles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(articleData),
    });
  }

  async deleteArticle(id) {
    return this.request(`/articles/${id}`, {
      method: 'DELETE',
    });
  }

  // User methods
  async login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData) {
    // console.log(userData);
    console.log(JSON.stringify(userData));
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async getInstitutions() {
    return this.request('/institutions/public');
  }

  async getProfile(credentials) {
    return this.request('/auth/user', {
      method: 'GET',
      body: JSON.stringify(credentials),
    });
  }

  async updateProfile(userData) {
    return this.request('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  /*
  故事牆 (Showcases)
   */
  async getShowcases(institutionId, params = {}) {
    const queryParams = new URLSearchParams();
    if (params.page) queryParams.append('page', params.page);
    if (params.limit) queryParams.append('limit', params.limit);
    if (params.order) queryParams.append('order', params.order);
    if (params.title) queryParams.append('title', params.title);
    if (params.startDate) queryParams.append('startDate', params.startDate);
    if (params.endDate) queryParams.append('endDate', params.endDate);

    const queryString = queryParams.toString();
    const endpoint = `/institutions/${institutionId}/showcase${queryString ? `?${queryString}` : ''}`;

    return this.request(endpoint);
  }

  async createShowcase(institutionId, showcaseData) {
    return this.request(`/institutions/${institutionId}/showcase`, {
      method: 'POST',
      body: JSON.stringify(showcaseData),
    });
  }

  async getOwnShowcases(institutionId, userId) {
    return this.request(`/institutions/${institutionId}/showcase/own?user_id=${userId}`);
  }

  async getShowcase(institutionId, showcaseId) {
    return this.request(`/institutions/${institutionId}/showcase/${showcaseId}`);
  }

  async updateShowcase(institutionId, showcaseId, showcaseData) {
    return this.request(`/institutions/${institutionId}/showcase/${showcaseId}`, {
      method: 'PUT',
      body: JSON.stringify(showcaseData)
    });
  }

  async deleteShowcase(institutionId, showcaseId) {
    return this.request(`/institutions/${institutionId}/showcase/${showcaseId}`, {
      method: 'DELETE',
    });
  }

  /* Showcase 表情回覆 */
  async getShowcaseReactionUsers(institutionId, showcaseId, reaction_type) {
    return this.request(`/institutions/${institutionId}/showcase/${showcaseId}/reactions/${reaction_type}/users`);
  }

  async getShowcaseReactions(institutionId, showcaseId) {
    return this.request(`/institutions/${institutionId}/showcase/${showcaseId}/reactions`);
  }

  async getShowcaseComments(institutionId, showcaseId) {
    return this.request(`/institutions/${institutionId}/showcase/${showcaseId}/comments`);
  }

  async addShowcaseLike(institutionId, showcaseId) {
    return this.request(`/institutions/${institutionId}/showcase/${showcaseId}/like`, {
      method: 'POST',
    });
  }

  async deleteShowcaseLike(institutionId, showcaseId) {
    return this.request(`/institutions/${institutionId}/showcase/${showcaseId}/like`, {
      method: 'DELETE',
    });
  }

  // async addShowcaseReaction(institutionId, showcaseId, reactionData) {
  //   return this.request(`/institutions/${institutionId}/showcase/${showcaseId}/reactions`, {
  //     method: 'POST',
  //     body: JSON.stringify(reactionData),
  //   });
  // }

  // async deleteShowcaseReaction(institutionId, showcaseId) {
  //   return this.request(`/institutions/${institutionId}/showcase/${showcaseId}/reactions`, {
  //     method: 'DELETE',
  //   });
  // }

  async createShowcaseComment(institutionId, showcaseId, commentData) {
    return this.request(`/institutions/${institutionId}/showcase/${showcaseId}/comments`, {
      method: 'POST',
      body: JSON.stringify(commentData),
    });
  }

  // async addCommentReaction(institutionId, showcaseId, commentId, userId) {
  //   return this.request(`/institutions/${institutionId}/showcase/${showcaseId}/like`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       comment_id: commentId,
  //       user_id: userId
  //     }),
  //   });
  // }

  // async removeCommentReaction(institutionId, showcaseId, commentId, userId) {
  //   return this.request(`/institutions/${institutionId}/showcase/${showcaseId}/like`, {
  //     method: 'DELETE',
  //     body: JSON.stringify({
  //       comment_id: commentId,
  //       user_id: userId
  //     }),
  //   });
  // }


  /*
  行動
   */
  async getActivities(params = {}) {
    const queryParams = new URLSearchParams();
    if (params.userId) queryParams.append('userId', params.userId);
    if (params.page) queryParams.append('page', params.page);
    if (params.limit) queryParams.append('limit', params.limit);
    if (params.order) queryParams.append('order', params.order);
    if (params.title) queryParams.append('title', params.title);
    if (params.startDate) queryParams.append('startDate', params.startDate);
    if (params.endDate) queryParams.append('endDate', params.endDate);

    const queryString = queryParams.toString();
    const endpoint = `/activities${queryString ? `?${queryString}` : ''}`;

    return this.request(endpoint);
  }

  async getActivity(activityId) {
    return this.request(`/activities/${activityId}`);
  }

  async createActivity(activityData) {
    return this.request('/activities', {
      method: 'POST',
      body: JSON.stringify(activityData),
    });
  }

  async updateActivity(activityId, activityData) {
    return this.request(`/activities/${activityId}`, {
      method: 'PUT',
      body: JSON.stringify(activityData),
    });
  }

  async removeActivity(activityId) {
    return this.request(`/activities/${activityId}`, {
      method: 'DELETE',
    });
  }

  async getOwnActivities(activityId, userId) {
    return this.request(`/activities/${activityId}/own?userId=${userId}`);
  }

  // Activities verify
  async submitJoinRequest(activityId, userId, requestData) {
    return this.request(`/activities/${activityId}/join-requests?userId=${userId}`, {
      method: 'POST',
      body: JSON.stringify(requestData),
    });
  }

  async getJoinRequests(activityId) {
    return this.request(`/activities/${activityId}/join-requests`);
  }

  async approveJoinRequest(activityId, userId, approve) {
    return this.request(`/activities/${activityId}/join-requests/${userId}?approve=${approve}`, {
      method: 'POST',
    });
  }

  // Posts
  async getPosts(institutionId, activityId) {
    return this.request(`/institutions/${institutionId}/posts?related_activity_id=${activityId}`);
  }

  async getPost(institutionId, postId) {
    return this.request(`/institutions/${institutionId}/posts/${postId}`);
  }

  async updatePost(institutionId, postId, postData) {
    return this.request(`/institutions/${institutionId}/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    });
  }

  async deletePost(institutionId, postId) {
    return this.request(`/institutions/${institutionId}/posts/${postId}`, {
      method: 'DELETE',
    });
  }

  async addPostLike(institutionId, postId, userId) {
    return this.request(`/institutions/${institutionId}/posts/${postId}/like?userId=${userId}`, {
      method: 'POST',
    });
  }

  async removePostLike(institutionId, postId, userId) {
    return this.request(`/institutions/${institutionId}/posts/${postId}/like?userId=${userId}`, {
      method: 'DELETE',
    });
  }

  // Comments
  async createComment(institutionId, postId, commentData) {
    return this.request(`/institutions/${institutionId}/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify(commentData),
    });
  }

  async getComments(institutionId, postId) {
    return this.request(`/institutions/${institutionId}/posts/${postId}/comments`);
  }
}

// Export singleton instance
export const apiService = new ApiService();
export default apiService;
