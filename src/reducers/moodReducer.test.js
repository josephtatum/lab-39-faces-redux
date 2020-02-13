import { moodReducer } from './moodReducer';
import { drinkCoffee, takeNap, study, eatSnack } from '../actions/moodActions';

describe('moodReducer', () => {

  let initialState;
  beforeEach(() => {
    initialState = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
  });

  it('handles a DRINK_COFFEE case', () => {
    const action = drinkCoffee();
    expect(moodReducer(initialState, action)).toEqual({
      coffees: 1,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });

  it('handles a TAKE_NAP case', () => {
    const action = takeNap();
    expect(moodReducer(initialState, action)).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 1,
      studies: 0
    });
  });

  it('handles a EAT_SNACK case', () => {
    const action = eatSnack();
    expect(moodReducer(initialState, action)).toEqual({
      coffees: 0,
      snacks: 1,
      naps: 0,
      studies: 0
    });
  });

  it('handles a STUDY case', () => {
    const action = study();
    expect(moodReducer(initialState, action)).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 1
    });
  });
});
