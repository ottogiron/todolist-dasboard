import React from 'react';
import ReactDOM from 'react-dom';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './Environment'
import './index.css';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<QueryRenderer
    environment={environment}
    query={graphql`
        query appQuery($id: String) {
          todoList(id:$id) {
            ...TodoApp_todoList
          }  
        }
      `}
    variables={{
      id: 0
    }}
    render={({error, props}) => {
      if (props) {
        return <TodoApp todoList={props.todoList}/>;
      } else {
        return <div>Loading</div>;
      }
    }}
  />, document.getElementById('root'));
registerServiceWorker();