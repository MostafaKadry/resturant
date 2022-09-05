import { MyNav } from "./components/navbar.js";
import Leftmenu from "./components/leftmenu.js";
import leftmenuHomeBody, {
  leftmenuPagesBody,
  leftmenuShopBody,
  leftmenuPortfolioBody,
  leftmenuBlogBody,
  leftmenuElementsBody,
} from "./components/leftmenuBody.js";
import { Login } from "./components/login.js";
import Content from "./components/content.js";
let root = document.getElementById("root");
root.innerHTML = MyNav();
root.innerHTML += Leftmenu();
root.innerHTML += Login();
leftmenuHomeBody();
leftmenuPagesBody();
leftmenuShopBody();
leftmenuPortfolioBody();
leftmenuBlogBody();
leftmenuElementsBody();
root.innerHTML += Content();
