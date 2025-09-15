// Mock server for development - demonstrates expected API structure
// In production, this would be replaced with actual backend server

const mockEndpoints = {
  // Image upload endpoint
  'POST /api/upload/image': (formData) => {
    const file = formData.get('image');
    const type = formData.get('type') || 'general';

    // Simulate server processing delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!file) {
          reject(new Error('No file provided'));
          return;
        }

        // Mock successful upload response
        const mockUrl = `https://example.com/uploads/${type}/${Date.now()}-${file.name}`;
        resolve({
          success: true,
          url: mockUrl,
          filename: file.name,
          size: file.size,
          type: file.type,
          uploadedAt: new Date().toISOString()
        });
      }, 1000); // 1 second delay to simulate upload
    });
  },

  // Articles CRUD endpoints
  'GET /api/articles': () => {
    // Return mock articles data
    return Promise.resolve([
      {
        id: 1,
        title: '校園永續發展活動',
        intro: '推動校園環境永續發展',
        content: '詳細內容...',
        time: Math.floor(Date.now() / 1000),
        types: [1, 4],
        img_url: 'sustainability.jpg',
        authorId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ]);
  },

  'POST /api/articles': (data) => {
    return Promise.resolve({
      id: Date.now(),
      ...data,
      authorId: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
  },

  'PUT /api/articles/:id': (data, id) => {
    return Promise.resolve({
      id: parseInt(id),
      ...data,
      updatedAt: new Date().toISOString()
    });
  },

  'DELETE /api/articles/:id': (data, id) => {
    return Promise.resolve({ success: true });
  }
};

// Mock implementation guide:
// To implement this mock server in development, you could:
//
// 1. Use a tool like json-server with custom middleware
// 2. Use Vite's dev server with a plugin
// 3. Use MSW (Mock Service Worker)
// 4. Create a simple Express.js server for development
//
// Example Express.js implementation:
/*
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const upload = multer({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

app.post('/api/upload/image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.json({
    success: true,
    url: `/uploads/${req.file.filename}`,
    filename: req.file.originalname,
    size: req.file.size,
    type: req.file.mimetype,
    uploadedAt: new Date().toISOString()
  });
});

app.listen(3000, () => {
  console.log('Mock server running on port 3000');
});
*/

export default mockEndpoints;