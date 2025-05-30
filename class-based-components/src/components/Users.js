import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

export default class Users extends Component {
    constructor() {
        super();
        this.state = {
            showUsers: true
        };
    }
    toggleUsersHandler() {
        this.setState(currState => ({ showUsers: !currState.showUsers }));
    }
    componentDidUpdate() {
        if(this.props.users.length === 0) {
            throw new Error('No users provided!');
        }
    }
    render() {
        const usersList = (
          <ul>
            {this.props.users.map((user) => (
              <User key={user.id} name={user.name} />
            ))}
          </ul>
        );

        return (
          <div className={classes.users}>
            <button onClick={this.toggleUsersHandler.bind(this)}>
              {this.state.showUsers ? 'Hide' : 'Show'} Users
            </button>
            {this.state.showUsers && usersList}
          </div>
        );
    }
}
