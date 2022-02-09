import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent } from './components/page/page.js';
import { Component } from './components/page/component.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('title', 'https://picsum.photos/600/300');
    this.page.addChild(image);
    const note = new NoteComponent(
      'title',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    );
    this.page.addChild(note);
    const todo = new TodoComponent('title', 'sub');
    this.page.addChild(todo);
    const video = new VideoComponent('title', 'https://youtu.be/e1t-s4KKgqg');
    this.page.addChild(video);
  }
}
new App(document.querySelector('#document')! as HTMLElement);
