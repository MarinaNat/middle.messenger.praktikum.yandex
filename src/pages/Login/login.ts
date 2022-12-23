import { formButton } from "./../../component/formButton/formButton";
import Block from "../../utils/Block";
import template from "./login.hbs";

export class LoginPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.children.button = new formButton({
      text: "text",
      events: {
        click: () => console.log("Clicked..."),
      },
    });
  }
  render() {
    return this.compile(template, {});
  }
}
