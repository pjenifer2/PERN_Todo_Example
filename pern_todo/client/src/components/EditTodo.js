import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {

    const [description, setDescription] = useState(todo.description);

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description }
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,
            {   method: "PUT",
                headers: {"Content-type": "Application/json"},
                body: JSON.stringify(body)});
                window.location = "/"

        } catch (err) {
            console.error(err.message)
        }
    }


    return (<Fragment>


  
  <button type="button" className="btn btn-warning" 
    data-toggle="modal" 
    data-target={`#id${todo.todo_id}`} 
    onClick={() =>setDescription(todo.description)}>Edit</button>

  
  <div className="modal fade" 
    id={`id${todo.todo_id}`}
    role="dialog"
    >
    <div className="modal-dialog">
    
  
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Edit Todo</h4>
        </div>
        <div className="modal-body">
            <input 
                type="text" 
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}/>
          <p>Edit Todo Description</p>
        </div>
        <div className="modal-footer">
          <button type="button" 
            className="btn btn-warning" 
            data-dismiss="modal"
            onClick = { e => updateDescription(e)}>Save</button>
          <button 
            type="button" 
            className="btn btn-default" 
            data-dismiss="modal"
            onClick={() =>setDescription(todo.description)}>Close</button>
        </div>
      </div>
      
    </div>
  </div>
  

    </Fragment> 
    )
}

export default EditTodo;