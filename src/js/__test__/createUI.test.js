/**
 * Вспомогательная функция для тестирования
 */
export default function creatUI() {
  document.body.innerHTML = `<div class="gallery">
<div class="gallery__body">
  <form action="" name="gallery_form" class="gallery__form form">
    <label class="form__item">
      <div class="form-item__text">Название</div>
      <input name="img_name" type="text" class="form-item__input">
      <div class="error__mes d_none"></div>
    </label>
    <label class="form__item">
      <div class="form-item__text">Ссылка на изображение</div>
      <input name="img_link" type="text" class="form-item__input">
      <div class="error__mes d_none"></div>
    </label>
    <div class="form__button">
      <button type="submit" name="form_button" class="button">Добавить</button>
    </div>
  </form>
  <div class="gallery__row row">
    <div class="row__item">
      <div class="absolute">
        <button class="row-item__delete">X</button>
        <img src="./img/01.jpg" alt="" class="row-item__img">
      </div>
    </div>
    <div class="row__item">
      <div class="absolute">
        <button class="row-item__delete">X</button>
        <img src="./img/02.jpg" alt="" class="row-item__img">
      </div>
    </div>
    <div class="row__item">
      <div class="absolute">
        <button class="row-item__delete">X</button>
        <img src="./img/03.jpg" alt="" class="row-item__img">
      </div>
    </div>
  </div>
</div>
</div>`;
}

test('test 1', () => {
  creatUI();
  expect(document.body.innerHTML.length).toBe(1311);
});
