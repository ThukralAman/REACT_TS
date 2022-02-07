import './App.css';
import CustomerList from './components/CustomerList';
import StateHookComponent from './hooks/StateHookComponent';

function App() {
  return (
    <div className="App">
       <h1>React Application</h1>
       {/* <CustomerList /> */}
       <StateHookComponent/>
    </div>
  );
}

export default App;
