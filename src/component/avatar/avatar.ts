import { Block } from "../../core";

interface AvatarProps {
  src: string;
}

export class Avatar extends Block<AvatarProps> {
  static componentName = "Avatar";

  constructor({ src }: AvatarProps) {
    super({ src });
  }

  render() {
    return `<img src="{{src}}" alt="Аватар" class="avatar">`;
  }
}
