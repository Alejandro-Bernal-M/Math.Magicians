import './App.css';
import Calculator from './components/calculator';
import ApiCall from './components/apiCall';

function App() {
  return (
    <div className="calculator-holder">
      <Calculator />
      <ApiCall />
    </div>
  );
}

export default App;
