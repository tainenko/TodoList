import React from "react";
import {connect} from "react-redux";
import {addTodo} from '../actions.js';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
    state = {
        value: ""
    };
    onSubmit = (e) => {
        e.preventDefault();
        const inputValue = this.state.value;
        if (!inputValue.trim()) {
            return;
        }
        this.props.onAdd(inputValue)
        this.setState({
            value: ''
        });
    };
    onInputChange = (e) => {
        this.setState({
            value: e.target.value
        })

    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" onChange={this.onInputChange}/>
                    <button className="add-btn" type="submit">Add</button>
                </form>
            </div>
        )
    }
};

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);