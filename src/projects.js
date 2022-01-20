import yourshelf from "./images/yourshelf.jpg"
import ciy from "./images/ciy.png"
import locally from "./images/locally.png"
import portfolio from "./images/portfolio.png"
import weather from "./images/weather.png"
import newz from "./images/newz.PNG"

const projects = [
    {
        title: "The Newz",
        img: `${newz}`,
        alt: "A news search website",
        description: "A fully responsive single page application (SPA) in which a user can search for current or past news articles. I made it a point to use custom CSS for both styling and responsiveness so as to not rely too heavily on libraries.",
        tech: [
            "Javascript",
            "React JS",
            "RESTful API's",
            "Almost entirely custom CSS",
            "Bootstrap",
            "JSON",
            "React Router"
        ],
        repo: "https://github.com/sydsutton/news-app",
        live: "https://thenewz.netlify.app"
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
        repo: "https://github.com/sydsutton/weather-app",
        live: "https://q-weather.netlify.app"
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