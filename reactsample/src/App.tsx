import './App.css';
import Welcome from './trial/Welcome';

function App() {
  return (
    <div className="App">
       <h1>React Application</h1>
       <Welcome />
       <Welcome msg="Good Day"  />
    </div>
  );
}

export default App;
