import { MyNav } from "./components/navbar.js";
import Leftmenu from "./components/leftmenu.js";
import leftmenuHomeBody, {
  leftmenuPagesBody,
  leftmenuShopBody,
  leftmenuPortfolioBody,
  leftmenuBlogBody,
  leftmenuElementsBody,
} from "./components/leftmenuBody.js";
document.getElementById("root").innerHTML = MyNav();
document.getElementById("root").innerHTML += Leftmenu();
leftmenuHomeBody();
leftmenuPagesBody();
leftmenuShopBody();
leftmenuPortfolioBody();
leftmenuBlogBody();
leftmenuElementsBody();
