# Secure-Web-based-Bank-Pager
This project develops a secure web-based bank pager application to comply with PCI DSS and GDPR by implementing advanced content filtering techniques and ML Algorithms and NLP to detect and block conversations containing sensitive information.


Hi, welcome to my journey of creating a secure, web-based chat application with message filtering technology using NLP, to solve the inconvenience of using social media platforms for inter-banking interactions between the bank employees and to comply with the information protection conventions of standards PCI DSS, HIPAA, and GDPR.
This is a project assignment I have done on the latter part of my 3rd year of my bachelor’s degree specializing on cyber security. It was pretty exciting and interesting to work on this amazing new idea. Hope you find it useful too.

# Web based Bank Pager Application with MERN Stack, Socket.io, Redux Toolkit, Tailwind CSS & content filtering 

This is a real-time chat web application that allows internal bank staff to connect with each other and stay updated on time. It was built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), Socket.io, Redux Toolkit, and Tailwind CSS. 

- If you liked it then give this Repository a Star⭐
- Youtube Demo : <a target="__blanck" href="https://youtu.be/11oZj2jBhOE">Click On Me</a>

## Technologies Used

- MERN stack (MongoDB, Express.js, React.js, and Node.js)
- Socket.io
- Redux Toolkit
- Tailwind CSS

## Features

- Real-time chat: users can send and receive messages in real-time
- User authentication: users can sign up, log in, and log out using JWT and Google Auth
- Group creation: users can create chat rooms and invite others to join
- Notifications: users can receive notifications on new messages
- Emojis: users can send and receive emojis in messages
- Profile page where users can update their avatar and display name.
- Users can create a room to chat with others.
- Search functionality.
- Responsive design: the website is optimized for different screen sizes and devices

- the main security feature is that the conversations user of the internal staff of the bank will be monitored and any sort of personal data violations that restricts under PCI DSS and GDPR will be blocked.

## Configuration and Setup
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal
- cd client and create a .env file in the root of your client directory.
- Supply the following credentials

```
REACT_APP_GOOGLE_CLIENT_ID = 
REACT_APP_SERVER_URL='http://localhost:8000'
```

To get your Google ClientID for authentication, go to the [credential Page ](https://console.cloud.google.com/apis/credentials) (if you are new, then [create a new project first](https://console.cloud.google.com/projectcreate) and follow the following steps;

- Click Create credentials > OAuth client ID.
- Select the Web application type.
- Name your OAuth client and click Create
- Remember to provide your domain and redirect URL so that Google identifies the origin domain to which it can display the consent screen. In development, that is going to be `http://localhost:3000` and `http://localhost:3000/login`
- Copy the Client ID and assign it to the variable `REACT_APP_GOOGLE_CLIENT_ID` in your .env file

```
$ cd client
$ npm install (to install client-side dependencies)
$ npm start (to start the client)
```
In the second terminal
- cd server and create a .env file in the root of your server directory.
- Supply the following credentials

```
PORT=8000
URL=
SECRET=
CLIENT_ID=
BASE_URL="http://localhost:3000"
```
```
$ cd server
$ npm install (to install server-side dependencies)
& npm start (to start the server)
```


## Contributing

Contributions to this project are welcome! If you find a bug or want to add a feature, please submit an issue or a pull request. To contribute, follow these steps:

1. Fork the repository
2. Create a new branch for your feature: `git checkout -b my-new-feature`
3. Make changes and commit them: `git commit -m 'Add some feature'`
4. Push your branch to your forked repository: `git push origin my-new-feature`
5. Create a Pull Request

--- 
Here's a step-by-step guide to help you create a front-end for your web-based chat application using React and incorporating the Signal Protocol library.

Step 1: Set up the Development Environment
Before you begin, make sure you have Node.js installed on your machine. Follow these steps:

1. Install Node.js from the official website: https://nodejs.org

2. Open a terminal or command prompt and verify that Node.js is installed by running the following command:
   ```
   node -v
   ```

Step 2: Create a React Application
To create a new React application, follow these steps:

1. Open a terminal or command prompt and navigate to the directory where you want to create your project.

2. Run the following command to create a new React application:
   ```
   npx create-react-app (your-prefered-name-in-simple-letters)
   ```
 
 
3. Once the command finishes executing, navigate into the project directory:
   ```
   cd chat-app
   ```

4. Start the development server by running the following command:
   ```
   npm start
   ```

   This will open a new browser window with your React application running.

Step 3: Install Signal Protocol Library
To incorporate the Signal Protocol library into your React application, you need to install the necessary packages. Here's how:

1. Open a new terminal or command prompt and navigate to your project directory.

2. Install the required library using the following command:
   ```
   npm install signal-protocol
   ```

Step 4: Design the Chat UI
Now, let's design the user interface (UI) of the chat application using HTML and CSS. Open the `src/App.js` file in your preferred code editor and replace its contents with the following code:

```jsx
import React from 'react';
import { SignalProtocol } from 'signal-protocol';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Web-based Chat Application</h1>
      </header>
      <div className="ChatContainer">
        {/* Your chat UI code goes here */}
      </div>
    </div>
  );
}

export default App;
```

Step 5: Implement the Chat Functionality
Next, you'll add the necessary JavaScript code to handle the chat functionality. Update the `src/App.js` file with the following code:

```jsx
import React, { useEffect, useState } from 'react';
import { SignalProtocol } from 'signal-protocol';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Your code to establish a connection with the Signal Protocol server goes here
  }, []);

  const handleSendMessage = () => {
    // Your code to send a new message goes here
    setNewMessage('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Web-based Chat Application</h1>
      </header>
      <div className="ChatContainer">
        <div className="ChatMessages">
          {messages.map((message, index) => (
            <div key={index} className="Message">
              {message}
            </div>
          ))}
        </div>
        <div className="ChatInput">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
```

Step 6: Styling the UI with CSS
To style the chat application,

 you can create a new CSS file called `src/App.css` and add the following CSS code:

```css
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  padding: 20px;
  color: white;
}

.ChatContainer {
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 400px;
  margin: 20px auto;
  border: 1px solid #ccc;
  padding: 20px;
  overflow: auto;
}

.ChatMessages {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
}

.Message {
  background-color: #eee;
  padding: 5px;
  margin-bottom: 10px;
}

.ChatInput {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

input[type='text'] {
  flex: 1;
  margin-right: 10px;
}
```

With these steps, you have a basic front-end for your web-based chat application using React and incorporating the Signal Protocol library. Feel free to further customize the UI and implement the required functionality for establishing a connection and sending/receiving messages using the Signal Protocol.
