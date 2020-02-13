import React from 'react';

const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

export const moodReducer = (state = initialState, action) => {

  switch(state, action.type) {
    case 'DRINK_COFFEE':
      this.setState(state => ({ coffees: state.coffees + 1 }));
      break;
    case 'EAT_SNACK':
      this.setState(state => ({ snacks: state.snacks + 1 }));
      break;
    case 'TAKE_NAP':
      this.setState(state => ({ naps: state.naps + 1 }));
      break;
    case 'STUDY':
      this.setState(state => ({ studies: state.studies + 1 }));
      break;
    default:
      console.log(`unhandled type: ${action.type}`);
  }

};
