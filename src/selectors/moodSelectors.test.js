import { getMood } from './moodSelectors';

describe('moodSelector', () => {

  it('gets the current intake of the face (state)', () => {
    const state = { coffees: 1, naps: 1, snacks: 1, studies: 1 };
    const mood = getMood(state);

    expect(mood).toEqual({ coffees: 1, naps: 1, snacks: 1, studies: 1 });
  });
});
