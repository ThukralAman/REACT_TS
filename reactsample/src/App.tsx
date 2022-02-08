import './App.css';
import CustomerList from './components/CustomerList';
import CustomHookComponent from './hooks/CustomHookComponent';
import EffectComponent from './hooks/EffectComponent';
import { ReducerComponent } from './hooks/ReducerComponent';
import StateHookComponent from './hooks/StateHookComponent';
import UseRefComponent from './hooks/UseRefComponent';

function App() {
  return (
    <div className="App">
       <h1>React Application</h1>
       {/* <CustomerList /> */}
       {/* <StateHookComponent/> */}
       {/* <ReducerComponent/> */}
       {/* <EffectComponent/> */}
       {/* <UseRefComponent/> */}
       <CustomHookComponent/>
    </div>
  );
}

export default App;
