import { formButton } from "./component/formButton/formButton";
import { LoginPage } from "./pages/Login/login";
import { renderDOM } from "./utils/renderDOM";

document.addEventListener("DOMContentLoaded", () => {
  const loginPage = new LoginPage();

  renderDOM("#app", loginPage);
});
