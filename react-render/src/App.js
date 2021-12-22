import logo from './logo.svg';
import './App.css';
import UseState from './components/useState/UseState';
import UseReducer from './components/useReducer/UseReducer';
import ObjectUseState from './components/stateImutabe/ObjectUseState';
import Parent from './components/Parent Child/Parent';
import ParentOne from './components/Optimization/ParentOne';
import ChildOne from './components/Optimization/ChildOne';
import GrandParent from './components/Optimization/GrandParent';
import ParentTwo from './components/Optimization/ParentTwo';
import ParentThree from './components/Incorect Optimization/ParentThree';
import ContextParent from './components/Context/ContextParent';

function App() {
  return (
    <div className="App">
      <ContextParent />
    </div>
  );
}

export default App;

