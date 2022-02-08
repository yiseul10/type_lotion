import { BaseComponent } from '../component.js';
export class ImageComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section>
    <div class="cursor-pointer p-5 pb-8 bg-teal-50/5 w-full rounded-2xl border border-teal-50/[2%] backdrop-blur shadow-sm hover:bg-teal-50/[6%] ease">
    <p id='title' class='uppercase pb-2'></p>
    <div class="relative">
    <img id="upload__image" class="w-full">
    </div></div>
  </section>`);
        const imageElement = this.element.querySelector('#upload__image');
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector('#title');
        titleElement.textContent = title;
    }
}
