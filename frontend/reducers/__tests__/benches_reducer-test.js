import BenchesReducer from '../benches_reducer';
import { testBenches } from '../../testUtil/bench_helper';
import * as BenchActions from '../../actions/bench_actions';

/*
NOTE: Our frontend state shape looks like this:
{
  benches: {
    1: {
        id: 1,
        description: "...",
        lat: 0.0,
        lng: 0.0
      },
    2: {
      id: 2,
      description: "...",
      lat: 0.0,
      lng: 0.0
    },
    ...
  }
  ...
}
*/

describe('BenchesReducer', () => {

  test('should initialize with an empty object as the default state', () => {
    
  });

  // describe('handling the RECEIVE_BENCHES action', () => {
  //   let action;

  //   beforeEach(() => {
  //     // Set up the action that will be passed into the reducer:
  //     // Your code here
  //   });

  //   test('should replace the state with the action\'s benches', () => {
  //     // Your code here
  //     return false;
  //   });

  //   test('should not modify the old state', () => {
  //     // Your code here
  //     return false;
  //   });
  // });
});