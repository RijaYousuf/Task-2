
import { Route, Switch } from 'react-router-dom';
import './App.css';

import TaskAdder from './Components/TodoAdder/TodoAdder'
import TodoPage from './Pages/TodoPage';

function App() {
  return (
    <div className="todo-app container">

<Switch>
     <Route path="/" component={TodoPage} exact/>
     </Switch>
    
    </div>
  );
}

export default App;
