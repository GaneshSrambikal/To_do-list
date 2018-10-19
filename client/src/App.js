import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ListModal from './components/listModal';
import { Container } from '../node_modules/reactstrap';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ListModal />
            <TodoList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
