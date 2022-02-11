import {createStore, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';

import {userReducer} from './redux/Reducer';

import {Provider} from 'react-redux';
import Users from './Users';

let store = createStore(userReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()))
function App() {
  return (
   <Provider store={store}>
     <h1>Thunk Example</h1>
     <Users/>
   </Provider>
   );
}

export default App;
