import { BaseComponent, Component } from './component.js';

export interface Composable {
  addChild(child: Component): void;
}
type OnCloseListener = () => void;

class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements Composable
{
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="pb-2">
    <section id="card" class="cursor-pointer p-5 bg-teal-50/5 w-full rounded-2xl border border-teal-50/[2%] backdrop-blur shadow-sm hover:bg-teal-50/[6%] ease">
    <button class="left-50 absolute" id="closeBtn" >&times;</button>
      </section>
    </li>`);
    const closeBtn = this.element.querySelector(
      '#closeBtn'
    )! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector('#card')! as HTMLElement;
    child.attachTo(container);
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor() {
    super(`
    <ul id="cardbg"></ul>`);
  }
  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
