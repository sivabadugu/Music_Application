# Music Player & Upload Application

## Overview

The **Music Player Web App** is a user-friendly platform designed for music enthusiasts to interactively enjoy their favorite tracks. Users can play, pause, shuffle, and repeat songs, all while experiencing a visually engaging interface that highlights album art, song titles, and artist information. In addition, users can like and share their favorite songs, fostering a sense of community among music lovers.

To complement this experience, the **Music Upload Application** provides a web-based service for users to upload and manage their audio files along with associated cover images. Built using Node.js and Express, this application simplifies the process of submitting music tracks, ensuring secure handling and storage of uploaded data in a MySQL database. Together, these applications cater to music enthusiasts and creators, providing powerful tools for enjoying, sharing, and managing music in a fully responsive and interactive environment.

---

## Music Upload Application

### Features
- **Upload Songs and Cover Images**: Users can easily upload their audio files along with the corresponding cover images. This functionality makes it simple for users to share their music with others.
  
- **Input Validation**: The application ensures that all required fields (like song title, artist name, and file upload) are filled out before allowing submission. This prevents errors and enhances user experience.

- **Responsive Design**: The user interface adapts seamlessly to various screen sizes, ensuring a consistent and enjoyable experience on desktops, tablets, and mobile devices.

### Technologies Used
- **Node.js**: A JavaScript runtime that allows for building scalable server-side applications.
  
- **Express**: A web framework for Node.js that simplifies the development of web applications and APIs.

- **MySQL**: A powerful database management system that securely stores user-uploaded song data.

- **Multer**: A middleware used for handling multipart/form-data, primarily for file uploads.

- **dotenv**: A module that loads environment variables from a `.env` file, keeping sensitive information secure.

- **cors**: Middleware that enables Cross-Origin Resource Sharing, allowing your application to communicate with different domains securely.

- **morgan**: An HTTP request logger middleware for Node.js that helps in debugging and monitoring requests made to the application.

### Getting Started

#### Prerequisites
- Ensure you have **Node.js** installed on your machine.
- Set up a **MySQL** database for storing song data, including user-uploaded tracks and metadata.

## Features

- **Audio Playback**: Control your audio experience with play, pause, and skip functionalities.
- **Song Management**: Navigate through a playlist for seamless song switching.
- **Progress Bar**: Interactive progress bar shows song progress and allows users to jump to specific parts.
- **Like Functionality**: Mark your favorite songs to curate personalized playlists.
- **Sharing Options**: Share currently playing songs via social media or messaging platforms using the Web Share API.
- **Shuffle and Repeat Modes**: Toggle between normal playback, shuffled tracks, or repeating the current song.
- **Responsive Design**: Works smoothly on desktops and smartphones for accessibility.

## Technology Stack

- **HTML**: Structural foundation of the web application.
- **CSS**: Styling the interface for a visually appealing user experience.
- **JavaScript**: Adds interactivity for audio playback and user interactions.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, or Safari).
- Basic understanding of HTML, CSS, and JavaScript to navigate and customize the code.
