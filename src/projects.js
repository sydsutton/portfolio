import yourshelf from "./images/yourshelf.jpg"
import ciy from "./images/ciy.png"
import locally from "./images/locally.png"
import portfolio from "./images/portfolio.png"
import weather from "./images/weather.png"
import newz from "./images/newz.PNG"
import sthetik from "./images/sthetik.PNG"

const projects = [
    {
        title: "SThetik",
        img: `${sthetik}`,
        alt: "An e-commerce web app",
        description: "An e-commerce web app that allows users to search for clothing by brand or category, select the size and quanitity of any item, and check out like a real e-commerce site!",
        tech: [
            "Javascript",
            "React JS",
            "Firebase",
            "JSON",
            "Material UI",
            "SCSS",
            "Bootstrap",
            "Local Storage",
            "React Router",
            "Adobe Photoshop"
        ],
        problem: [
            "The items saved in the users cart wouldn't persist between page loads",
            "I couldn't find an easy way to handle pagination for items with more than one page",
            "If I soley used React Router for navigation in the Navbar, an 'active' class would not automatically be added to the current page"
        ],
        solution: [
            "Implementing local storage to save items, even after closing the window",
            "I dynamically 'sliced' the filtered array of items depending on the page number",
            "I used both Nav.Link and React Router's 'Link' to get the active class I wanted and to not reload the page unnecessarily"

        ],
        repo: "https://github.com/sydsutton/ecommerce-app",
        live: "https://sthetik.netlify.app"
    },
    {
        title: "The Newz",
        img: `${newz}`,
        alt: "A news search website",
        description: "A fully responsive single page application (SPA) in which a user can search for current or past news articles. I made it a point to use custom CSS for both styling and responsiveness so as to not rely too heavily on libraries.",
        tech: [
            "Javascript",
            "React JS",
            "Firebase",
            "RESTful API's",
            "Custom CSS",
            "Bootstrap",
            "JSON",
            "React Router",
            "Adobe Photoshop"
        ],
        problem: [
            "I didn't have a way to store a users email and password in order to log in/ log out",
            "I had trouble finding a reusable way to validate the strength of the users password when creating an account"
        ],
        solution: [
            "I implemented Firebase Authentication to make it easier to store user information",
            "I created functions that pass the users password in as a parameter and use RegEx to validate password strength"
        ],
        repo: "https://github.com/sydsutton/news-app",
        live: "https://thenewz.netlify.app"
    },
    {
        title: "QWeather",
        img: `${weather}`,
        alt: "A weather application",
        description: "A React application made to search for current or predicted weather in your area. The user can also save specific zip codes for future searches.",
        tech: [
            "HTML/ CSS",
            "Javascript",
            "React JS",
            "REST API's",
            "React Redux",
            "Material UI",
            "Adobe Photoshop"
        ],
        problem: [
            "With the API that I intended to use, you could only search by latitude and longitude to get the desired data",
            "The wind direction in JSON was in degrees (out of 360), not cardinal directions",
            "The time in the JSON data fetched was in unix timestamps, not in a readable time format"
        ],
        solution: [
            "I used a separate API to get the latitude and longitude from a specific zip code in order to get the correct data",
            "I found a formula that gets the index of an array of cardinal directions depending on the degrees",
            "I created a reusable function that takes a unix timestamp in as a parameter and coverts it to a standard time format"
        ],
        repo: "https://github.com/sydsutton/weather-app",
        live: "https://q-weather.netlify.app"
    },
    {
        title: "Cook It Yourself",
        img: `${ciy}`,
        alt: "A recipe search website",
        description: "A fully responsive single page application (SPA) in which a user can find recipes for various meals. Error handling for the login and feedback forms were implemented using vanilla Javascript.",
        tech: [
            "HTML/ CSS",
            "Javascript",
            "React JS",
            "Bootstrap",
            "Reactstrap",
            "JSON",
            "React Router"
        ],
        repo: "https://github.com/sydsutton/ReactRecipeApp",
        live: "https://cookityourself.netlify.app"
    },
    {
        title: "YourShelf",
        img: `${yourshelf}`,
        alt: "A book search application called yourshelf",
        description: "A React Native application in which the user can search for any book, either by title or subject. After logging in to their account, the user can then save any number of books in their digital bookshelf.",
        tech: [
            "Javascript",
            "React JS",
            "React Native",
            "API's",
            "React Redux",
            "React Native Elements",
            "Adobe Photoshop"
        ],
        repo: "https://github.com/sydsutton/book-app-native",
        demo: "https://www.youtube.com/watch?v=mc-M280LSMU"
    },
    {
        title: "Locally",
        img: `${locally}`,
        alt: "A band search webite",
        description: "A responsive website that, if fully functional, would allow a user to search for any band/artist within a certain mile radius of the user's location. This project was used purely to get comfortable with designing with Bootstrap.",
        tech: [
            "HTML/ CSS",
            "Bootstrap"
        ],
        repo: "https://github.com/sydsutton/LocallyProject",
        live: "https://findlocally.netlify.app/"
    },
    {
        title: "Portfolio Website",
        img: `${portfolio}`,
        alt: "portfolio website",
        description: "This very website! I made it a point to use functional components and React Hooks for controlling state instead of class components. I also used the Material UI library instead of Reactstrap.",
        tech: [
            "HTML/ CSS",
            "React JS",
            "Bootstrap",
            "React Hooks",
            "Material Design"
        ],
        repo: "https://github.com/sydsutton/portfolio",
    },
]

export default projects