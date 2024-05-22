import fetchData from '.';

test('spy on method', () => {
  const video = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(video, 'play');
  video.play();

  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
