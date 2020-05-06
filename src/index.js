import { dataAssignment } from "./data.js";


dataAssignment();
//router
import { changeView } from "./router/router.js";

const init = () => {
  changeView(window.location.hash);
  window.addEventListener("hashchange", () => changeView(window.location.hash));
};

window.addEventListener("load", init);
