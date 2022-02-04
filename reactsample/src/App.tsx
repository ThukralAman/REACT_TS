import './App.css';
import Parent from './trial/Parent';
import Welcome from './trial/Welcome';

function App() {
  return (
    <div className="App">
       <h1>React Application</h1>
       <Welcome />
       <Parent>
        <Welcome msg="Good Day"  />
       </Parent>
    </div>
  );
}

export default App;
