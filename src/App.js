import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './features/counters/counterSlice';

function App() {
  // const [count, setCount] = useState(0)
const counters = useSelector((state) => state.counters)
const dispatch = useDispatch()

  const handleIncrements = () => {
    dispatch(increment({
      id: 3
    }))
  }

  const handleDecrements = () => {
    dispatch(decrement({
      name: "tanjim"
    }))
  }

  const handleReset = () => {
      dispatch(reset())
  }

  console.log("counters:::", counters);

  return (
    <div className="App">
      <header className="App-header">
        <h2 className='mb-20' >React Redux Counter</h2>
        <div className='flex gap-4' >
          <Button title="Decrements -" handler={() => handleDecrements()} />
          <div className='py-6 bg-gray-500 bg-opacity-30 px-10 rounded' >
            <h2>
              Total Counts
            </h2>
            <p>{counters.value}</p>
          </div>
          <Button title="Increments +" handler={() => handleIncrements()} />

        </div>
        <Button title="Reset" handler={() => handleReset()} />
      </header>
    </div>
  );
}

export default App;

