import React from 'react';
import ReactDOM from 'react-dom';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './Environment'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<QueryRenderer
    environment={environment}
    query={graphql`
        query AppAllTodosQuery {
          allTodos {
            id
            version
            items {
              _id: id
              title: desc
              completed
            }
          }  
        }
      `}
    variables={{}}
    render={({error, props}) => {
      if (props) {
        return <App allTodos={props.allTodos} />;
      } else {
        return <div>Loading</div>;
      }
    }}
  />, document.getElementById('root'));
registerServiceWorker();
