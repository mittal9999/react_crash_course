import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

   getstyle= () => {
       return {
           background:'lightgray',
           padding: '10px',
           borderBotton: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ?
           'line-throught':'none'  
        }
       
   }
     
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getstyle()}>
                <p>
                <input type="checkbox"  onChange={this.markcomplete.bind
                (this,id)} /> { ' '}
                { title }

                </p>
           </div>
        )
    }
}

//propTypes
TodoItem.protoTypes = {
    todo :PropTypes.object.isRequired
}


export default TodoItem
