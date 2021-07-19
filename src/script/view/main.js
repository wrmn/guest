import { home } from "../page/home";
import { bookPage } from "../page/book";
import { regisPage } from "../page/regis";

const main = () => {
  let page = document.getElementById("content");
  page.innerHTML = home;
};

const regis = () => {
  let page = document.getElementById("content");
  page.innerHTML = regisPage;
};

const book = () => {
  let page = document.getElementById("content");
  page.innerHTML = bookPage;
};

export { main, regis, book };
