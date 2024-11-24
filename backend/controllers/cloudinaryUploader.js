// import cloudinary from "cloudinary";
// import dotenv from "dotenv"; // Use import for dotenv

// dotenv.config(); // Initialize dotenv

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// console.log("Cloudinary config:", cloudinary.config());

// // Upload images function
// export const uploadImages = (images) => {
//   return new Promise((resolve, reject) => {
//     const uploadPromises = images.map((image) => {
//       console.log("Image buffer:", image.buffer); // Check the buffer content
//       return new Promise((resolve, reject) => {
//         cloudinary.uploader
//           .upload_stream({ resource_type: "auto" }, (error, result) => {
//             if (error) reject(error);
//             resolve(result.url); // Return the image URL from Cloudinary
//           })
//           .end(image.buffer); // image.buffer is required for memory storage
//       });
//     });

//     // Wait for all uploads to complete
//     Promise.all(uploadPromises).then(resolve).catch(reject);
//   });
// };

// export default cloudinary;

import cloudinary from "cloudinary";
import dotenv from "dotenv"; // Use import for dotenv

dotenv.config(); // Initialize dotenv

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImages = async (images) => {
  try {
    const uploadedImages = await Promise.all(
      images.map(async (image) => {
        const result = await cloudinary.v2.uploader.upload(image.path); // Use the correct path to the file
        return result.secure_url; // Return the URL of the uploaded image
      })
    );
    return uploadedImages;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
