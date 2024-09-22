import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0)


  const handleIncrements = () => {
    setCount(count * 2 + 1)
  }

  const handleDecrements = () => {
    setCount(count - 10)
  }

  const handleReset = () => {
    setCount(0)
  }
  
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
            <p>{count}</p>
          </div>
          <Button title="Increments +" handler={() => handleIncrements()} />

        </div>
        <Button title="Reset" handler={() => handleReset()} />
      </header>
    </div>
  );
}

export default App;

