import { BaseComponent } from './component.js';
export class PageComponent extends BaseComponent {
    constructor() {
        super(` <ul
    class="flex justify-between cursor-pointer p-5 bg-teal-50/5 w-full rounded-2xl border border-teal-50/[2%] backdrop-blur shadow-sm hover:bg-teal-50/[6%] ease"
  >
    <p>여기까지</p>
    <button>ⅹ</button>
  </ul>`);
    }
}
