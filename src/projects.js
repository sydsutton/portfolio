import yourshelf from "./images/yourshelf.jpg"
import ciy from "./images/ciy.png"
import locally from "./images/locally.png"
import portfolio from "./images/portfolio.png"

const projects = [
    {
        title: "YourShelf",
        img: `${yourshelf}`,
        alt: "A book search application called yourshelf",
        description: "A React Native application where the user can search for any book, either by title or subject. After loggin in to their account, the user can then save any amount of books in their digital bookshelf.",
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
        title: "Cook It Yourself",
        img: `${ciy}`,
        alt: "A recipe search website",
        description: "A fully responsive single page application (SPA) where a user can find recipes for vaious meals. Error handling for the login and feedback forms were implemented using vanilla Javascript.",
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