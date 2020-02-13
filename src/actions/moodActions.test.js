import { drinkCoffee, eatSnack, takeNap, study } from './moodActions';

describe('moodActions', () => {

  it('handles drinking coffee', () => {

    const action = drinkCoffee();
    expect(action).toEqual({
      type: 'DRINK_COFFEE'
    });
  });

  it('handles eating snacks', () => {

    const action = eatSnack();
    expect(action).toEqual({
      type: 'EAT_SNACK'
    });
  });

  it('handles taking naps', () => {

    const action = takeNap();
    expect(action).toEqual({
      type: 'TAKE_NAP'
    });
  });

  it('handles studying', () => {

    const action = study();
    expect(action).toEqual({
      type: 'STUDY'
    });
  });

});
