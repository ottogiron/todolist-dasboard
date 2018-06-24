import React, { Component } from 'react';
import TodoFooter from './Footer';
import TodoItem from './TodoItem';
import './App.css';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';


import { ACTIVE_TODOS, COMPLETED_TODOS, ALL_TODOS, ENTER_KEY} from './Constants';

class App extends Component {

  state = {
    nowShowing:  ALL_TODOS,
    editing: null,
    newTodo: ''
  };
 

  handleChange = (event) => {
    this.setState({newTodo: event.target.value});
  }

  handleNewTodoKeyDown = (event) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = this.state.newTodo.trim();

    if (val) {
      this.props.model.addTodo(val);
      this.setState({newTodo: ''});
    }
  }

  toggleAll(event) {
    var checked = event.target.checked;
    this.props.model.toggleAll(checked);
  }

  toggle(todoToToggle) {
    this.props.model.toggle(todoToToggle);
  }

  destroy(todo) {
    this.props.model.destroy(todo);
  }

  edit(todo) {
    this.setState({editing: todo.id});
  }

  save(todoToSave, text) {
    this.props.model.save(todoToSave, text);
    this.setState({editing: null});
  }

  cancel() {
    this.setState({editing: null});
  }

  clearCompleted() {
    this.props.model.clearCompleted();
  }

  render() {
        var footer;
        var main;
        const todos = this.props.allTodos[0].items;

        var shownTodos = todos.filter(function (todo) {
          switch (this.state.nowShowing) {
          case ACTIVE_TODOS:
            return !todo.completed;
          case COMPLETED_TODOS:
            return todo.completed;
          default:
            return true;
          }
        }, this);

        const todoItems = shownTodos.map((todo)=>{
          return (
            <TodoItem
              key={todo._id}
              todo={todo}
              onToggle={this.toggle.bind(this, todo)}
              onDestroy={this.destroy.bind(this, todo)}
              onEdit={this.edit.bind(this, todo)}
              editing={this.state.editing === todo._id}
              onSave={this.save.bind(this, todo)}
              onCancel={this.cancel}
            />
          );
        }, this);

        var activeTodoCount = todos.reduce(function (accum, todo) {
          return todo.completed ? accum : accum + 1;
        }, 0);
        
        var completedCount = todos.length - activeTodoCount;

        if (activeTodoCount || completedCount) {
          footer =
            <TodoFooter
              count={activeTodoCount}
              completedCount={completedCount}
              nowShowing={this.state.nowShowing}
              onClearCompleted={this.clearCompleted}
            />;
        }
        if (todos.length) {
          main = (
            <section className="main">
              <input
                className="toggle-all"
                type="checkbox"
                onChange={this.toggleAll}
                checked={activeTodoCount === 0}
              />
              <ul className="todo-list">
                {todoItems}
              </ul>
            </section>
          );
        }
      return (
        <div>
					<header className="header">
						<h1>todos</h1>
						<input
							className="new-todo"
							placeholder="What needs to be done?"
							value={this.state.newTodo}
							onKeyDown={this.handleNewTodoKeyDown}
							onChange={this.handleChange}
							autoFocus={true}
						/>
					</header>
					{main}
					{footer}
				</div>
      );
  }
}

export default App;
