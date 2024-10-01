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

#### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd music-upload-app
#👍npm install
Set up the environment variables: Create a .env file in the root directory and add your database connection details, for example:
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=music_upload
Start the server:_db
npm start
You can now access the application in your web browser at http://localhost:3000

Music Player Web App
Features
Audio Playback: Users can control their audio experience with play, pause, and skip functionalities, enhancing their listening enjoyment.

Song Management: Users can navigate through a playlist, allowing them to easily switch between songs without interruptions.

Progress Bar: A visual representation of song progress provides users with feedback on how much of the track has played and how much is left. The progress bar is interactive, enabling users to click on it to jump to specific parts of a song.

Like Functionality: Users can mark their favorite songs with a 'like', which can help curate personalized playlists or recommendations.

Sharing Options: Integration with the Web Share API allows users to easily share currently playing songs via social media or messaging platforms.

Shuffle and Repeat Modes: Users can toggle between normal playback, shuffled tracks, or repeating the current song, catering to different listening preferences.

Responsive Design: The application is designed to work smoothly on any device, from desktops to smartphones, ensuring accessibility for all users.

Technology Stack
HTML: Provides the structural foundation of the web application.

CSS: Used for styling the interface to ensure a visually appealing user experience.

JavaScript: Adds interactivity to the application, enabling audio playback and other user interactions.

Getting Started
Prerequisites
A modern web browser (like Chrome, Firefox, or Safari).
Basic understanding of HTML, CSS, and JavaScript to navigate and customize the code if desired.
Contributing
We welcome contributions from anyone interested in improving the project! If you'd like to contribute:

Fork the repository.
Create a new branch for your feature or bug fix.
Submit a pull request with a clear description of your changes.
Acknowledgements
Special thanks to all contributors and users for their support and feedback.
Inspired by various music streaming applications and their user-centric features.
