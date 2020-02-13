import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { takeNap, drinkCoffee, study, eatSnack } from '../actions/moodActions';
import { getMood, getFace } from '../selectors/moodSelectors';

export const Moods = () => {

  const dispatch = useDispatch();

  const { coffees, snacks, naps, studies } = useSelector(getMood);
  const face = useSelector(getFace);

  return (
    <>
      <Controls>
        <button onClick={() => dispatch(drinkCoffee())}>coffee - {coffees}</button>
        <button onClick={() => dispatch(eatSnack())}>snacks - {snacks}</button>
        <button onClick={() => dispatch(takeNap())}>naps - {naps}</button>
        <button onClick={() => dispatch(study())}>studies - {studies}</button>
      </Controls>
      <Face emoji={face} />
    </>
  )
};

// export default class Moods extends Component {

//   render() {
//     const { coffees, snacks, naps, studies } = this.state;
//     const face = getFace(this.state);

//     return (
//       <>
//         <Controls>
//           <button onClick={() => this.handleSelection({ type: 'DRINK_COFFEE' })}>coffee - {coffees}</button>
//           <button onClick={() => this.handleSelection({ type: 'EAT_SNACK' })}>snacks - {snacks}</button>
//           <button onClick={() => this.handleSelection({ type: 'TAKE_NAP' })}>naps - {naps}</button>
//           <button onClick={() => this.handleSelection({ type: 'STUDY' })}>studies - {studies}</button>
//         </Controls>
//         <Face emoji={face} />
//       </>
//     );
//   }
// }
