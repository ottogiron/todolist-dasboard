
import React, { Component } from 'react';
import Utils from './Utils';
import classNames from 'classnames';
import {ACTIVE_TODOS, ALL_TODOS, COMPLETED_TODOS } from './Constants';

class Footer extends Component {
   
    render(){
        const activeTodoWord = Utils.pluralize(this.props.count, 'item');
        var clearButton;
        if (this.props.completedCount > 0) {
             clearButton = (
                <button
                    className="clear-completed"
                    onClick={this.props.onClearCompleted}>
                    Clear completed
                </button>
            );
        }
       
			var nowShowing = this.props.nowShowing;
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{this.props.count}</strong> {activeTodoWord} left
                </span>
                <ul className="filters">
                <li>
							<a
								href="#/"
								className={classNames({selected: nowShowing ===ALL_TODOS})}>
									All
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/active"
								className={classNames({selected: nowShowing === ACTIVE_TODOS})}>
									Active
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/completed"
								className={classNames({selected: nowShowing === COMPLETED_TODOS})}>
									Completed
							</a>
						</li>
                </ul>
                {clearButton}
            </footer>
        );
    }
}

export default Footer;