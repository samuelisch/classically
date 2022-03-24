# Classically App

React application for API calls from OpenOpus and Spotify, created with TypeScript.

## Access and deployment
This application is hosted on and accessible with [Netlify](https://classically.netlify.app/)

### Motivation
The main learning point of this project was learning how to use TypeScript with React, and discovering the intricacies and details that I might have missed out on when it comes to typed variables and components, compared to JavaScript. I combined the use of TypeScript with two APIs:
- [Open Opus API for classical music composers and works](https://openopus.org/)
- [Spotify API for music data on results from Open Opus](https://developer.spotify.com/)

### Features
The application makes use of three main technologies, along with create-react-app:
- Redux Toolkit
- React-Router
- styled-components

Dark / Light themes in this application is done with the useContext hook.
API responses and the tracking of historical searches are stored using Redux.
There is a main navbar accessible throughout the entire application, and a main component that routes to different Outlets.

### Further Features and complications
#### React Router and Github Pages
- There is an issue deploying my application with Github Pages, as React-Router could not work well when hosted on it. Therefore, I had to use netlify, which provided a much smoother experience

#### Implmenting a backend for persistent data and history
- If the application were to be expanded, I will deploy a backend to store historical data from user events, so that the state in the application's Home component will not be re-initialized upon re-render.
