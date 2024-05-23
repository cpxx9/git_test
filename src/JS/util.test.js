import { loadTitle } from './util';

test('print uppercase text', () => {
  loadTitle().then((title) => expect(title).toBe('DELECTUS AUT AUTEM'));
});
