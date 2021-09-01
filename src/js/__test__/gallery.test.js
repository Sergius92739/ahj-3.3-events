import Gallery from '../Gallery';
import creatUI from './createUI.test';

creatUI();
const images = new Gallery(document.querySelector('.gallery__row.row'));

test('Метод toLoad должен вставить шаблон html в блок gallery__row', () => {
  images.toLoad();
  expect(images.gallery.lastElementChild.querySelector('img')).toBe(null);
  expect(images.gallery.querySelectorAll('img').length).toBe(3);
  expect(images.gallery.children.length).toBe(4);
});

test('Метод toDelete', () => {
  const button = images.gallery.querySelector('.row-item__delete');
  images.toDelete();
  button.click();
  expect(images.gallery.children.length).toBe(3);
});
