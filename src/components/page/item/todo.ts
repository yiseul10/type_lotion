import { BaseComponent } from '../component.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`
    <div>
        <h2 id="title" class="pb-5 underline underline-offset-2 decoration-wavy">title</h2>
        <label class="inline-flex items-center">
            <input type="checkbox" checked id="check"/>
            <span class="ml-2 lowercase" id="todo"></span>
          </label>
    </div>
`);
    const titleElement = this.element.querySelector(
      '#title'
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
    const todoCheckElement = this.element.querySelector(
      '#check'
    )! as HTMLInputElement;
    // 텍스트 전달하기
    // todoCheckElement.insertAdjacentText('afterend', todo);
    todoCheckElement.textContent = todo;
    const todoElement = this.element.querySelector('#todo')! as HTMLSpanElement;
    todoElement.textContent = todo;
  }
}
