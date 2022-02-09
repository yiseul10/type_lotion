import { BaseComponent } from '../component.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, note: string) {
    super(`<div>
    <h2 id="title" class="uppercase pb-2 underline underline-offset-2 decoration-wavy">title</h2>
    <p id="note" class="w-full text-stone-300/60"></p></div>
    `);
    const titleElement = this.element.querySelector(
      '#title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
    const noteElement = this.element.querySelector(
      '#note'
    )! as HTMLParagraphElement;
    noteElement.textContent = note;
  }
}
