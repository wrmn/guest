import "regenerator-runtime";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {main,regis,book} from "./script/view/main.js";
import { homeFunct } from "./script/page/home";
import { bookFunct } from "./script/page/book";

const Loader = (func, page) => {
    const init = new Promise((resolve, reject) =>{
        page();
    });

    init.then(func())
};


document.addEventListener("DOMContentLoaded", Loader(homeFunct, main));
document.getElementById("home").onclick = (()=>{
    Loader(homeFunct, main);
});
document.getElementById("book").onclick = (()=>{
    Loader(bookFunct, book);
});
document.getElementById("register").onclick = (()=>{
    regis;
});
