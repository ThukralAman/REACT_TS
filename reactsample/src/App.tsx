import './App.css';
import Parent from './trial/Parent';
import Welcome from './trial/Welcome';
import WelcomeFC from './trial/WelcomeFC';

function App() {
  return (
    <div className="App">
       <h1>React Application</h1>
       <Welcome />
       <Parent>
        <Welcome msg="Good Day"  />
       </Parent>
       <WelcomeFC>
          <h1> This is React.FC example!!!</h1>
      </WelcomeFC>
       <WelcomeFC msg="Hi"/>
    </div>
  );
}

export default App;
