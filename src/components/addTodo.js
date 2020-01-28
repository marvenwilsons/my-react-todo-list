import React, { Component } from 'react'

export class addTodo extends Component {
    state = {
        title: '',
        desc: ''       
    }


    // template
    render() {
        // props from parent
        const {addTodoMethod} = this.props

        // react is horrible they should not allow me to do this
        const AddTodoStyle = {
            width:'400px',
            padding:'20px',
            background: 'white',
            borderRadius: '4px',
            color: '#333',
            border: '1px solid #eee',
            boxShadow: '0px 2px 10px 0px #333'
        }

        // template
        return (
            <div style={AddTodoStyle} className="flex flexcol" >
            {/* todo title  */}
            <strong style={{background:'#eee',padding:'10px', marginBottom:'10px'}} >Add Todo</strong>
            <div style={{marginBottom:'10px'}} >
                <div>Todo Title:</div>
                {/* on input change it mutates the title property */}
                <input onChange={
                    // mutates the state value
                        (e) => { this.setState({title: e.target.value}) }
                    } type="text" ></input>
            </div>
            {/* todo description */}
            <div>
                <div>Todo Description:</div>
                <textarea onChange={(e) => {this.setState({desc: e.target.value})}} cols="50" rows="5" ></textarea>
            </div>
            {/* submit */}
            <div className="flex flexend pointer" style={{marginTop:'5px'}}>
                {/* {this.addTodoComp()} */}
                <button 
                    onClick={() =>addTodoMethod({title: this.state.title, desc: this.state.desc})}
                >
                    Add Todo
                </button>
            </div>
        </div>
        )
    }
}

export default addTodo
