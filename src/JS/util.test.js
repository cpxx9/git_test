import { loadTitle } from './util';

jest.mock('./http');

test('print uppercase text', () => {
  loadTitle().then((title) => expect(title).toBe('DELECTUS AUT AUTEM'));
});
