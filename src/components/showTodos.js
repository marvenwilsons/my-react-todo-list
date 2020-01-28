import React, { Component } from 'react'

export class showTodos extends Component {
    render() {
        return (
            <div style={{
                    width:'960px', 
                    padding:'20px', 
                    background:'#333', 
                    height:'90%', 
                    color: 'white'
                }} 
                className="fullheight flex1"
                >
                {/* Heading */}
                <div className="flex spacebetween flexcenter" > 
                    <h2 style={{fontWeight:'100'}} >Your Have {JSON.parse(this.props.todos).length} Todo(s) </h2>
                    <snap className="pointer" >
                        <span style={{marginRight:'20px'}} >Add New Todo</span>
                        <span>Show Completed Todos</span>
                    </snap>
                </div>
                {/* Loop! */}
                {JSON.parse(this.props.todos).map((e,i) => (
                    <div style={{padding:'15px', color: '#333', background:'#eee', margin:'20px', borderRadius:'5px'}} className="flex"  key={i} >
                        <div>
                            
                        </div>
                        <div className="fullwidth" >
                            <h4 style={{margin:'0',fontWeight:'400'}} >
                                Todo: <strong> {e.title}</strong> 
                            </h4>
                        </div>
                        <div className="pointer fullwidth" >
                            <div className="flex flexend" >
                                <span style={{marginRight:'20px'}}>
                                    show more
                                </span>
                                <span>
                                    delete
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default showTodos
