import {home} from "../page/home"
import {bookPage} from "../page/book"

const main = () => {
    let page = document.getElementById("content");
    page.innerHTML = home;
};

const regis = () => {
    let page = document.getElementById("content");
    page.innerHTML = home;
};

const book = () => {
    let page = document.getElementById("content");
    page.innerHTML = bookPage;
};

export {main, regis, book};
