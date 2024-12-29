# Mini Chat Backend

This project is a simple **chat backend system** built with **Node.js**, **Express**, and **MongoDB**. It provides a basic **CRUD (Create, Read, Update, Delete)** functionality for chat messages. The system allows users to send, edit, and delete messages in a chat-like interface, with MongoDB handling data storage.

## Features

- **Create Chat Messages**: Users can send chat messages, which are stored in the database.
- **View All Chats**: Users can view all chat messages.
- **Update Chat Messages**: Users can update their chat messages.
- **Delete Chat Messages**: Users can delete their messages.
- **MongoDB Storage**: All chat messages are stored securely in a MongoDB database.
- **Dynamic Templating**: Uses **EJS** to render dynamic HTML views.
- **Method-Override**: Supports `PUT` and `DELETE` methods via form submissions.

## Technologies Used

- **Node.js**: Handles backend logic and server-side operations.
- **Express.js**: Framework for routing and middleware management.
- **EJS**: Templating engine for rendering dynamic pages.
- **MongoDB**: NoSQL database for storing chat data.
- **Mongoose**: MongoDB object modeling for managing database operations.
- **Method-Override**: Middleware for supporting HTTP methods like PUT and DELETE in forms.

## How It Works

1. **Create Chat**: Users can create a chat message by submitting a form with a sender (`from`), receiver (`to`), and message content.
2. **View Chats**: The list of all chat messages is displayed on the main page.
3. **Update Chat**: Users can edit their chat messages by visiting an edit form for the specific message.
4. **Delete Chat**: Users can delete their chat messages from the database by clicking the delete option.
5. **Dynamic Routing**: The app uses dynamic routing to handle chat message creation, deletion, and editing.