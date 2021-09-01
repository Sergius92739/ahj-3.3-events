import FormHandler from '../FormHandler';
import creatUI from './createUI.test';

creatUI();
const handler = new FormHandler();

test('Метод getErrorMes должен удалить класс d_none у переданного элемента и вставить текст', () => {
  handler.getErrorMes(handler.errorName, 'Заполните пожалуйста это поле');
  expect(handler.errorName.className).toBe('error__mes');
  expect(handler.errorName.textContent).toBe('Заполните пожалуйста это поле');
});

test('Метод removeErrorMes должен добавить класс d_none эл-ту и удалить textContent', () => {
  handler.removeErrorMes(handler.errorName);
  expect(handler.errorName.className).toBe('error__mes d_none');
  expect(handler.errorName.textContent).toBe('');
});

jest.useFakeTimers();
test('Метод showErrorMes должен вызвать setTimeout', () => {
  handler.showErrorMes(handler.errorName, 'Ошибка');
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
});

/* test('Метод toAppoint должен обработать событие submit корректно', () => {
  handler.removeErrorMes(handler.errorName)
  const event = new MouseEvent('click')
  handler.toAppoint()
  handler.src.value = 'https://small-house.ru/wp-content/uploads/2009/07/ac98f6bd7d95.jpg';
  handler.alt.value = 'Дом у реки';
  // handler.src.dispatchEvent(event);
  handler.button.dispatchEvent(event);
  expect(handler.images.gallery).toBe(' ')
}) */
