import { drinkCoffee } from './moodActions';

describe('moodActions', () => {

  it('handles drinkingCoffee', () => {
    
    const action = drinkCoffee();
    expect(action).toEqual({
      type: 'DRINK_COFFEE'
    });
  });
});
