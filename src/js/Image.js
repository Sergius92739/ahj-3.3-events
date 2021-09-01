export default class Image {
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
  }

  toCreat() {
    const img = document.createElement('img');
    img.src = this.src;
    img.alt = this.alt;
    img.className = 'row-item__img';
    return img;
  }
}
