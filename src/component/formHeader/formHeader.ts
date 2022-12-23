import { Block } from "../../core";

interface FormHeaderProps {
  text: string;
}

export class FormHeader extends Block<FormHeaderProps> {
  static componentName = "FormHeader";

  constructor({ text }: FormHeaderProps) {
    super({ text });
  }

  render() {
    return `<h1 class="form-header">{{text}}</h1>`;
  }
}
