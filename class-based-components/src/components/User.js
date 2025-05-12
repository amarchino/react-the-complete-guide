import { Component } from 'react';
import classes from './User.module.css';

export default class User extends Component {
    render() {
        return (
            <li className={classes.user}>{this.props.name}</li>
        );
    }
}
