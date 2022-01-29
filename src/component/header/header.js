import "./style.css";
const element = document.createElement("header");

element.innerHTML = "Welcome to our Shop";
element.classList.add('info')
document.body.appendChild(element);
import photo from '../../assets/banner.jpg'
const img = document.createElement("img");
img.src=photo;
img.style.width="100%"
element.appendChild(img);




