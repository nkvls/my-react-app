import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import TodoDatas from './TodoDatas';
import TodoItem from './TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoDatas,
      character: {},
      loading: false
      //isLoggedIn: false
    }

    //this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleClick() {    
  //   this.setState(prevState => {
  //     return { isLoggedIn: !prevState.isLoggedIn }
  //   });
  // }

  //   render() {
  //     return (
  //       <div>
  //         <p>{this.state.isLoggedIn ? "logged in" : "logged out"}</p>
  //         <button onClick={this.handleClick}>{this.state.isLoggedIn ? "log out" : "log in"}</button>
  //       </div>
  //     )};
    
//     this.handleChange = this.handleChange.bind(this);
//   }

  // static getDerivedStateFromProps(props, state) {

  // }
  // getSnapshotBeforeUpdate() {

  // }
   componentDidMount() {
     this.setState({loading: true});

     fetch("https://swapi.co/api/people/1")
     .then(response => response.json())
     .then(data => {
       this.setState({
         character: data,
         loading: false
       })
     });
   }

  // // componentWillUpdate() {

  // // }

  // // componentWillMount() {

  // // }

  // //Decrecated in React@16.1 version
  // // componentWillReceiveProps(nextProps) {
  // //   //When comp receive prop from parent
  // //   //or parent decides to change a prop passing down this comp
  // //   //all those props can be checked here
  // // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   //returns true/false;
  // }

  // componentWillUnmount() {
  //   //teardown/remove code clanup before component disappear e.g. remove event listener
  // }

  
  handleChange(id) {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map((x) => {
          if(x.id === id) { x.completed = !x.completed; }
          return x;
        });

        return { todos: updatedTodos }
    });
}

  render() {
    var todoItems = this.state.todos.map((x) => { 
        return <TodoItem key={x.id} item={x} handleChange={this.handleChange} />
      });

    const text = this.state.loading? "Loading.." : this.state.character.name;

    return (
      <div className="App">
        {todoItems}
        <p>{text}</p>
      </div>
    );
  }
}

export default App;