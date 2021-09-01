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
