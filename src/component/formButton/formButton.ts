import { Block } from "../../core";

interface FormButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export class FormButton extends Block<FormButtonProps> {
  static componentName = "FormButton";

  constructor({ text, onClick, className, type }: FormButtonProps) {
    super({ text, onClick, className, type });
  }

  render() {
    return `
    <button class="form-button {{className}}" type="{{type}}">
      <span class="form-button__link">{{text}}</span>
    </button>
  `;
  }
}
