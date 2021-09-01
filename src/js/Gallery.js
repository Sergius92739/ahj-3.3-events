export default class Gallery {
  constructor(gallery) {
    this.gallery = gallery;
  }

  static template() {
    return `<div class="row__item">
              <div class="absolute">
                <button class="row-item__delete">X</button>
              </div>
            </div>`;
  }

  toLoad() {
    this.gallery.insertAdjacentHTML('beforeend', Gallery.template());
  }

  toDelete() {
    this.gallery.addEventListener('click', (event) => {
      if (event.target.className === 'row-item__delete') {
        event.target.closest('.row__item').remove();
      }
    });
  }
}
