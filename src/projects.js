import yourshelf from "./images/yourshelf.jpg"
import ciy from "./images/ciy.png"
import locally from "./images/locally.png"
// import ciy2 from "./images/ciy2.png"

const projects = [
    {
        title: "YourShelf",
        img: `${yourshelf}`,
        alt: "A book search application called yourshelf",
        description: "A book application where the user can search for any book, either by title or subject. After loggin in to their account, the user can then save any amount of books in their digital bookshelf.",
        tech: [
            "HTML/ CSS",
            "Javascript",
            "React JS",
            "React Native",
            "API's",
            "Redux",
            "React Native Elements",
            "Adobe Photoshop"
        ],
        repo: "https://github.com/sydsutton/book-app-native"
    },
    {
        title: "Cook It Yourself",
        img: `${ciy}`,
        description: "A fully responsive single page application (SPA) where a user can find recipes for vaious meals. Error handling for the login and feedback forms were implemented using vanilla Javascript.",
        tech: [
            "HTML/ CSS",
            "Javascript",
            "React JS",
            "Bootstrap",
            "JSON",
            "React Router"
        ],
        repo: "https://github.com/sydsutton/ReactRecipeApp",
        live: "https://ciy-app.herokuapp.com/"
    },
    {
        title: "Locally",
        img: `${locally}`,
        description: "A responsive website that, if fully functional, would allow a user to search for any band/artist within a certain mile radius of the user's location. This project was used purely to get comfortable with designing with Bootstrap.",
        tech: [
            "HTML/ CSS",
            "Bootstrap"
        ],
        repo: "https://github.com/sydsutton/ReactRecipeApp"
    },
    {
        title: "Portfolio Website",
        description: "This very website!",
        tech: [
            "CSS",
            "React JS",
            "Bootstrap",
            "React Hooks",
            "Material Design"
        ],
        repo: "https://github.com/sydsutton/ReactRecipeApp"
    },
]

export default projects