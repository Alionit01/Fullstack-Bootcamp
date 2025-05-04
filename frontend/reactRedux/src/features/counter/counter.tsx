import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../features/counter/counterSlice';
import { RootState } from '../../app/store';
import { selectCounterValue } from './counterSelector';

function Counter() {
 const count = useSelector(selectCounterValue);; 
 const dispatch = useDispatch(); 

 return (
   <div>
     <h2>Count: {count}</h2>
     <button onClick={() => dispatch(increment())}>+1</button>
     <button onClick={() => dispatch(decrement())}>-1</button>
     <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
   </div>
 );
}

export default Counter;