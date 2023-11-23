const cloudinary = require("cloudinary");

cloudinary.config({ 
  cloud_name: 'dmkyhh1cd', 
  api_key: '739541925134721', 
  api_secret: 'r6WVRLveX4i7n5Afs9iEg-yQFtA' 
});

module.exports = { cloudinary };