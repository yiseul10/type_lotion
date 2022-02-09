import { BaseComponent } from '../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
    <div>
        <p id="title" class="uppercase pb-2"></p>  
          <iframe
            class="w-full video"
            height="360"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
    </div>`);
    // <iframe width="1012" height="474" src="https://www.youtube.com/embed/e1t-s4KKgqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    const videoElement = this.element.querySelector(
      '.video'
    )! as HTMLIFrameElement;
    // 사용자는 유튜브창의 url을 복사해서 전달할 수 있고
    // 유튜브동영상에서 공유용 url을 복사할 수도 있다. (input) -> iframe 동영상삽입 url
    videoElement.src = this.convertToEmbedURL(url);

    const titleElement = this.element.querySelector(
      '#title'
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  // input
  // https://www.youtube.com/watch?v=K3-jG52XwuQ
  // https://youtu.be/K3-jG52XwuQ
  // output
  // https://www.youtube.com/embed/K3-jG52XwuQ
  // 정규표현식 Regex
  // https://regexr.com/5l6nr

  private convertToEmbedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    console.log(regExp);
    console.log(match);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
