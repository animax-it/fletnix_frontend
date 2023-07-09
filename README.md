# FletNix - Netflix Movie/TV Show Filtering and Search App

FletNix is a web application that helps users search, filter, and explore the available movies and TV shows on Netflix. The app provides a user-friendly interface for browsing through a vast collection of content and allows users to find their desired movies or TV shows based on various criteria. Users can register and log in using their email and password, and the app offers a range of features to enhance the browsing experience.

## Demo Video

To see a demo of the FletNix app in action, you can watch the demo video available [here](https://drive.google.com/file/d/1hxFUiXct0iudMSxp3xKXlLMCB7dG1av3/view).

## Screenshot

![Screenshot](<./src/screenshot/Screenshot%20(3).png>)
![Screenshot](<./src/screenshot/Screenshot%20(4).png>)
![Screenshot](<./src/screenshot/Screenshot%20(5).png>)
![Screenshot](<./src/screenshot/Screenshot%20(6).png>)
![Screenshot](<./src/screenshot/Screenshot%20(7).png>)
![Screenshot](<./src/screenshot/Screenshot%20(8).png>)
![Screenshot](<./src/screenshot/Screenshot%20(9).png>)
![Screenshot](<./src/screenshot/Screenshot%20(10).png>)
![Screenshot](<./src/screenshot/Screenshot%20(11).png>)
![Screenshot](<./src/screenshot/Screenshot%20(12).png>)

## Features

1. **User Authentication** - The application provides basic authentication functionality. Users can register and log in using their email and password along with their age.

2. **Pagination** - Upon logging in, users can view a paginated list of movies and TV shows available on Netflix. Each page displays 15 items to prevent overwhelming the user with a large amount of content.

3. **Search** - FletNix offers a search functionality that allows users to search for movies or TV shows by title or cast. This feature makes it easier for users to find specific content they are interested in.

4. **Age-Based Filtering** - Users below the age of 18 are restricted from viewing "R" rated items. The app automatically filters out such content based on the user's age during browsing.

5. **Filtering** - FletNix provides a filter functionality that allows users to select between movies and TV shows. This feature helps users narrow down their search and focus on their preferred type of content.

6. **Detail Page** - When a user clicks on an item from the list, a detailed page is displayed, providing comprehensive information about the selected movie or TV show. Users can access all the available details about the item from this page.

7. **Test Cases** - The app includes basic test cases to ensure the functionality and reliability of its core features.

## Tech Stack

- **Front-end**: React, Redux, Styled Components
- **Back-end**: Node.js, Express
- **Database**: MongoDB

## Installation

To set up the FletNix app locally, follow these steps:

1. Clone the repository from GitHub:

2. Install the necessary dependencies:

```bash
# Navigate to the client directory
cd fletnixfrontend
npm install
```

```bash
# Start the client (from the client directory)
npm start
```

3. Set up the MongoDB database. Ensure you have MongoDB installed and running. Create a .env file in the server directory and add your MongoDB connection string:

```bash
MONGODB_URI=<your-mongodb-connection-string>
```

4. Start the client:

```bash
# Start the client (from the client directory)
npm start
```

5. Access the application by opening http://localhost:3000 in your web browser.

## Testing

To run the basic test cases, follow these steps:

1. Ensure you have installed the project dependencies.

2. Navigate to the server directory and run the test script:


