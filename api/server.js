// Simple Express server for API


// Import required modules
import express from 'express'; // Express framework
import path from 'path'; // Path utilities
import { fileURLToPath } from 'url'; // For ES module __dirname
import cors from 'cors'; // CORS middleware
const app = express();
const PORT = 3001; // API server port

// Import static projects data
import projects from './projects.js';

// Define __dirname for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));


// Enable CORS for frontend dev server (Vite runs on localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from Vite dev server
  credentials: true // Allow cookies/credentials if needed
}));

// Serve static assets for images
// NOTE: If using Vite, images should be in public/assets, not src/assets
app.use('/assets', express.static(path.join(__dirname, '../src/assets')));

// Projects API endpoint
// Projects API endpoint
app.get('/api/projects', (req, res) => {
  // Prepend full asset URL to src so frontend can load images
  const origin = req.protocol + '://' + req.get('host');
  const projectsWithAssets = projects.map(project => ({
    ...project,
    src: `${origin}/assets/${project.src}` // Absolute URL for image
  }));
  res.json(projectsWithAssets); // Send projects data as JSON
});

// Start the API server
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
