# TextEditor

This repository contains a basic text editor application similar to Google Docs. App is built using MERN stack. Quill.js is used to implement a text editor in the frond end using React.js. MongoDB is used as the database.

The following instructions will provide details on how to configure this application in your desktop development environment.

### Cloning this repository


```
git clone https://github.com/jaisonjoshi/TextEditor.git
cd TextEditor
```

### Installing and starting a server instance

```
cd server
npm install
```
Create a `.env` file in the server root folder and specify your mongoDb connection url as `MONGODB_URL`
To start the server, run `nodemon server`. The server will start running at the port 8080.

### Starting an instance of the Text Editor Application
From the root directory, run the following:
```
cd text-editor
npm install
npm start
```
