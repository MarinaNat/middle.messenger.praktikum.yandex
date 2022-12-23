import { Block } from "../../core";

interface FormItemProps {
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: "text" | "password" | "email";
  inputName?: string;
  labelName: string;
  className?: string;
  // id?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  label?: string;
}

export class FormItem extends Block<FormItemProps> {
  static componentName = "FormItem";

  constructor({
    className,
    labelName,
    label,
    type = "text",
    error,
    placeholder,
    value,
  }: FormItemProps) {
    super({
      label,
      type,
      placeholder,
      value,
      error,
      className,
      labelName,
    });
  }

  render() {
    return `
      <div class="form-item {{className}}">
        <label for="{{inputName}}" class="form-item__label">{{labelName}}</label>
        <input type="{{type}}" name="{{inputName}}" class="form-item__input">
        <div class="form-item__error">{{#if error}}{{error}}{{/if}}</div>
      </div>
    `;
  }
}
