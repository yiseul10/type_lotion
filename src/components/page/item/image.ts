import { BaseComponent } from '../component.js';
// 웹팩설치하면 .js안달아도 되겠죠?

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section>
    <div class="cursor-pointer p-5 pb-8 bg-teal-50/5 w-full rounded-2xl border border-teal-50/[2%] backdrop-blur shadow-sm hover:bg-teal-50/[6%] ease">
    <p id='title' class='uppercase pb-2'></p>
    <div class="relative">
    <img id="upload__image" class="w-full">
    </div></div>
  </section>`);

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
