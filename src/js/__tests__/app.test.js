import GameSavingLoader from '../GameSavingLoader';

const player = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('load with async', async () => {
  expect(await GameSavingLoader.load()).toEqual(JSON.parse(player));
});
