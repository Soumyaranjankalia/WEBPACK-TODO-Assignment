
import "./index.css"
import Icon from './todo.png';

const img = document.getElementById("image")
const myIcon = new Image();
myIcon.src = Icon;

const root = document.getElementById("root");
const h1 = document.createElement("h1");
h1.innerText = "Make Your To-Do List";

h1.setAttribute("class", "redtext");

root.append(h1)
img.append(myIcon)
