import './App.css';
import { useReducer, useState } from 'react';
import Count from './components/Count';
import Portal from './components/Portal';

function App() {
  // const [users, setUsers] = useState([]);
  const [state, dispatch] = useReducer();
  return (
    <div className="App">
      <Count></Count>
      <Portal></Portal>
    </div>
  );
}

export default App;
