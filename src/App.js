import React, { Component } from 'react';
import Footer from './Footer';

import './App.css';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './Environment'

class App extends Component {
  handleNewTodoKeyDown(event){
    console.log("Doing something") 
  }
  render() {
    return (
      <QueryRenderer
      environment={environment}
      query={graphql`
        query AppAllTodosQuery {
          allTodos {
            id
            version
            items {
              _id: id
              desc
            }
          }  
        }
      `}
      variables={{}}
      render={({error, props}) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        const items = props.allTodos[0].items.map((item)=>{
          return <li key={item._id}>{item.desc}</li>
        })

      return (
        <section className="todoapp">
          <div>
            <header className="header">
              <h1>todos</h1>
              <input ref="newField"
              className="new-todo"
              placeholder="What needs to be done?"
              onKeyDown={ e => this.handleNewTodoKeyDown(e) }
              autoFocus="{true}"/>

            </header>
            <Footer></Footer>
          </div>
        </section>
     
      );
      }}
    />
    );
  }
}

export default App;
