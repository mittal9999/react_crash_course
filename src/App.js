import React , { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class  App extends Component {
  state = {
    todos: [
        {
           id: 1,
           title: 'Take out the trash',
            completed: false
        },
        {
           id: 2,
           title: 'Dinner with wife',
           completed: true
       },
       {
           id: 3,
           title: 'meeting with boss',
           completed: false
       },
    ]
}
  markComplate = () => {
    console.log('from app.js')
  }
render()  {
    return (
    <div className="App">
    <Todos  todos={this.state.todos} markComplate={this.markComplate}/>
      
    </div>
  );
  }
}


export default App;
