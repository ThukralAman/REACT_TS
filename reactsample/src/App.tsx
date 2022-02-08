import './App.css';
import CustomerList from './components/CustomerList';
import { ReducerComponent } from './hooks/ReducerComponent';
import StateHookComponent from './hooks/StateHookComponent';

function App() {
  return (
    <div className="App">
       <h1>React Application</h1>
       {/* <CustomerList /> */}
       {/* <StateHookComponent/> */}
       <ReducerComponent/>
    </div>
  );
}

export default App;
