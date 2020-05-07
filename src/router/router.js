import { components } from "../views/indexViews.js";
import search from "./searchController.js";
import random from "./randomController.js";

const changeView = (route) => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  switch (route) {
    case "#/home":
      container.appendChild(components.home());
      search();
      break;
    case "#/random":
      container.appendChild(components.random());
      random();
      break;
    default:
      container.appendChild(components.start());
      break;
  }
  return null;
};
export { changeView };
