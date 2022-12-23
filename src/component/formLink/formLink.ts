import { Block } from "../../core";

interface FormLinkProps {
  ref: string;
  text: string;
}

export class FormLink extends Block<FormLinkProps> {
  static componentName = "FormLink";

  constructor({ ref, text }: FormLinkProps) {
    super({ ref, text });
  }

  render() {
    return `<a href="{{ref}}" class="form-link">{{text}}</a>`;
  }
}
