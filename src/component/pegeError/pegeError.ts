import { Block } from "../../core";

interface ErrorProps {
  number: number;
  descr: string;
}

export class pegeError extends Block<ErrorProps> {
  static componentName = "Error";

  constructor({ number, descr }: ErrorProps) {
    super({ number, descr });
  }

  render() {
    return `<div class="error">
	<div class="error__wrapper">
	  <h1 class="error__name">{{number}}</h1>
	  <p class="error__descr">{{descr}}</p>
	  <a class="error__link" href="/">Назад к чатам</a>
	</div>
  </div>`;
  }
}
