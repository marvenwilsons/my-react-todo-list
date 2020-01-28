import React, { Component } from 'react'

import AddTodoComponent from './addTodo'
import ShowTodos from './showTodos'
import uuid from 'uuid'

export class content extends Component {

     state = {
        showModal: false,
        todos: []
     } 
    // state
    

    // methods
    addTodo (){
        // this.setState.showModal = true
        this.setState({
            showModal: true
        });
    }

    receivedTodo = ({title,desc}) => {
        const newTodo = {
            title,
            desc,
            id:uuid.v4(),
            deadLine: '',
            completed: '',
            completedOn: '',
            createdOn: ''
        }

        if(this.state.todos.length === 0) {
            this.setState({
                todos: [newTodo]
            })
        } else {
            this.setState({
                todos: [...this.state.todos, newTodo]
            })
        }
    }

    //
    getTodos = () => {
        // For some fucked up reason React cannot handle 
        // object as props passed while rendering the component
        // its so weak
        return JSON.stringify(this.state.todos)
        // return this.state.todos
    }
 
    getview = (len) => {
        console.log('get view')


        if(this.state.showModal === true && len === 0) {

            // bubble event, emit event
            return ( <AddTodoComponent addTodoMethod={this.receivedTodo} /> )
        } else {
            if(len === 0) {
                return (
                    <div className="flex flexcol" >
                        <h2>You dont have todos</h2>
                        {this.state.showModal}
                        <button onClick={(e) => this.addTodo(e)} >Add A Todo Item</button>
                    </div>
                )
            } else {
                console.log('yes')
                return (
                    <ShowTodos todos={this.getTodos()} />
                )
            }
        }
    }

    //
    render() {
        return (
            <div style={{display:'flex',flex:'1'}} className="flexcenter">
                {/* {this.state.todos.length} */}
                {this.getview(this.state.todos.length)}
            </div>
        )
    }
}

export default content
