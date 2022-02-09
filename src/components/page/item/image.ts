import { BaseComponent } from '../component.js';
// 웹팩설치하면 .js안달아도 되겠죠?

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<div>
    <h2 id='title' class='uppercase pb-2'></h2>
    <img id="upload__image" class="w-full">
  </div>`);

    // input처럼 사용자에게 전달받는 경우 innerHTML보다는 textContent를 사용해야한다.(XSS(Cross Site Scripting) attack)

    const imageElement = this.element.querySelector(
      '#upload__image'
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;
    const titleElement = this.element.querySelector(
      '#title'
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
