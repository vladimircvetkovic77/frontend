import { Route, Switch } from 'react-router-dom';

import NotFound from './pages/not-found'
import Home from './pages/home'
import Comments from './pages/comments'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/comments" component={Comments}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
