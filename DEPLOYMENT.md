# Render Deployment Guide

## Prerequisites
1. MongoDB Atlas account and database
2. Cloudinary account for image uploads
3. Render account

## Deployment Steps

### 1. Prepare Your Environment Variables
Copy the `env.example` file and fill in your actual values:
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `JWT_SECRET`: A secure random string for JWT tokens
- `CLOUDINARY_*`: Your Cloudinary credentials
- `FRONTEND_URL`: Your Render app URL (update after deployment)

### 2. Deploy to Render

#### Option A: Using render.yaml (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Render
3. Render will automatically detect the `render.yaml` file
4. Set your environment variables in the Render dashboard

#### Option B: Manual Setup
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the following:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Environment**: `Node`
   - **Plan**: Free

### 3. Environment Variables Setup
In your Render dashboard, add these environment variables:
- `NODE_ENV`: `production`
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Your JWT secret
- `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name
- `CLOUDINARY_API_KEY`: Your Cloudinary API key
- `CLOUDINARY_API_SECRET`: Your Cloudinary API secret
- `FRONTEND_URL`: Your Render app URL (e.g., `https://your-app-name.onrender.com`)

### 4. Update CORS Configuration
After deployment, update the CORS URLs in your code:
1. Replace `your-app-name` in the CORS configuration with your actual Render app name
2. Update the `FRONTEND_URL` environment variable

### 5. Database Setup
1. Create a MongoDB Atlas cluster
2. Create a database user
3. Whitelist Render's IP addresses (or use 0.0.0.0/0 for all IPs)
4. Get your connection string and add it to environment variables

## Troubleshooting

### Common Issues:
1. **Build Failures**: Check that all dependencies are properly listed in package.json
2. **CORS Errors**: Ensure FRONTEND_URL is set correctly
3. **Database Connection**: Verify MongoDB URI and network access
4. **Socket.IO Issues**: Check CORS configuration for Socket.IO

### Build Logs:
If deployment fails, check the build logs in Render dashboard for specific error messages.

## Post-Deployment
1. Test all functionality
2. Update any hardcoded URLs in your frontend code
3. Set up custom domain if needed
4. Configure SSL certificates (handled automatically by Render)
