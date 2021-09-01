import Gallery from './Gallery';
import Image from './Image';

export default class FormHandler {
  constructor() {
    this.form = document.forms.gallery_form;
    this.alt = this.form.elements.img_name;
    this.src = this.form.elements.img_link;
    this.button = this.form.elements.form_button;
    this.errorName = this.alt.nextElementSibling;
    this.errorURL = this.src.nextElementSibling;
    this.images = new Gallery(document.querySelector('.gallery__row.row'));
    this.img = null;
    this.timerID = null;
  }

  toAppoint() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!this.alt.value && !this.src.value) {
        this.showErrorMes(this.errorURL, 'Заполните пожалуйста все поля формы');
        return;
      }

      if (!this.alt.value) {
        this.showErrorMes(this.errorName, 'Заполните пожалуйста это поле');
        return;
      }

      this.img = new Image(this.src.value, this.alt.value);
      const image = this.img.toCreat();

      image.onload = () => {
        this.images.toLoad();
        const galleryEl = this.images.gallery.lastElementChild.querySelector('.absolute');
        galleryEl.append(image);
        this.form.reset();
      };
      image.onerror = () => {
        this.showErrorMes(this.errorURL, 'Неверный URL изображения');
      };
    });
  }

  showErrorMes(errorEl, text) {
    this.getErrorMes(errorEl, text);
    this.timerID = setTimeout(() => {
      this.removeErrorMes(errorEl);
      this.timerID = null;
    }, 3000);
  }

  getErrorMes(element, text) {
    this.element = element;
    this.element.textContent = text;
    this.element.classList.remove('d_none');
  }

  removeErrorMes(element) {
    this.element = element;
    this.element.textContent = '';
    this.element.className = 'error__mes d_none';
  }
}
