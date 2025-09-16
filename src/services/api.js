// API service for handling server requests
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
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
  async uploadImage(file, type = 'story') {
    // Validate file first
    const validationErrors = this.validateImageFile(file);
    if (validationErrors.length > 0) {
      throw new Error(validationErrors.join(', '));
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', type);

    try {
      const response = await fetch(`${this.baseURL}/upload/image`, {
        method: 'POST',
        headers: {
          // Don't set Content-Type for FormData, let browser set it with boundary
          ...(localStorage.getItem('auth_token') && localStorage.getItem('auth_token') !== 'student_token' && localStorage.getItem('auth_token') !== 'visitor_token'
            ? { 'Authorization': `Bearer ${localStorage.getItem('auth_token')}` }
            : {})
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Upload failed (${response.status}): ${errorText}`);
      }

      const result = await response.json();

      // Validate response structure
      if (!result.url) {
        throw new Error('Invalid server response: missing URL');
      }

      return result;
    } catch (error) {
      console.error('Image upload failed:', error);
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
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async getProfile() {
    return this.request('/users/profile');
  }

  async updateProfile(userData) {
    return this.request('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }
}

// Export singleton instance
export const apiService = new ApiService();
export default apiService;
