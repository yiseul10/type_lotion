import { BaseComponent } from '../component.js';

export class NoteComponent extends BaseComponent<HTMLParagraphElement> {
  constructor(title: string, note: string) {
    super(` <section>
    <div class="cursor-pointer p-5 pb-8 bg-teal-50/5 w-full rounded-2xl border border-teal-50/[2%] backdrop-blur shadow-sm hover:bg-teal-50/[6%] ease">
    <p id="title" class="uppercase pb-2 underline underline-offset-2 decoration-wavy">title</p>
    <p id="note" class="w-full text-stone-300/60">
    </p>
  </section>
`);
    const titleElement = this.element.querySelector(
      '#title'
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
    const noteElement = this.element.querySelector(
      '#note'
    )! as HTMLParagraphElement;
    noteElement.textContent = note;
  }
}
