# File Upload & Media Handling with Cloudinary

A backend project for uploading images and videos to **Cloudinary** using **Node.js**, **Express**, and **MongoDB**. Multer is used for parsing incoming file requests, and Cloudinary handles media storage in the cloud.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup & Installation](#setup--installation)  
- [Environment Variables](#environment-variables)  
- [API Endpoints](#api-endpoints)  
- [Usage](#usage)  
- [Troubleshooting](#troubleshooting)  

---

## Features

- Upload images and videos via API  
- Automatic file storage in Cloudinary  
- File metadata stored in MongoDB  
- Supports multiple file types (`resource_type: "auto"`)  
- File size limit: configurable via Multer  

---

## Tech Stack

- **Node.js** - Server runtime  
- **Express.js** - Web framework  
- **Multer** - File parsing middleware  
- **Cloudinary** - Cloud storage for media  
- **MongoDB** - Database for file metadata  
- **Streamifier** - Convert buffer to stream for Cloudinary  

---

