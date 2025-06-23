import './App.css';
import Async from './components/Async';
import Greeting from './components/Greeting';

export default function App() {
  return (
    <div className="App">
      <Greeting />
      <Async />
    </div>
  );
}
