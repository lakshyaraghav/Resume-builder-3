import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
const Achievements = (props) => {

    const [todos, setTodos] = React.useState([]);
    const [todo, setTodo] = React.useState("");
    const [todoEditing, setTodoEditing] = React.useState(null);
    const [editingText, setEditingText] = React.useState("");
  
    React.useEffect(() => {
      const json = localStorage.getItem("todos");
      const loadedTodos = JSON.parse(json);
      if (loadedTodos) {
        setTodos(loadedTodos);
      }
    }, []);
  
    React.useEffect(() => {
      const json = JSON.stringify(todos);
      localStorage.setItem("todos", json);
    }, [todos]);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const newTodo = {
        id: new Date().getTime(),
        text: todo,
        completed: false,
      };
      setTodos([...todos].concat(newTodo));
      setTodo("");
    }
  
    function deleteTodo(id) {
      let updatedTodos = [...todos].filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    }
  
    function toggleComplete(id) {
      let updatedTodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      setTodos(updatedTodos);
    }
  
    function submitEdits(id) {
      const updatedTodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.text = editingText;
        }
        return todo;
      });
      setTodos(updatedTodos);
      setTodoEditing(null);
    }

    const location = useLocation();
  const state = location.state;
  console.log(state);
    return (
        <div className="card">
      <div className="card-content">
        <h5>Achievements</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Achievement"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit" class="waves-effect waves-light btn">Add education</button>
        </form>
        <br></br>
        <table className="striped">
          <thead>
            <tr>
              <th>Achievements List</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{state.achievements}</td>

              <td>
                
              </td>
            </tr>
          </tbody>
        </table>
        <table className="striped">
          <tbody>
            
              {todos.map((todo) => (
                <div key={todo.id} className="todo ">
                    <tr>
                  <td >
                    <div className="todo-text">
                      <input
                        type="checkbox"
                        id="completed"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                      />
                      {todo.id === todoEditing ? (
                        <input
                          type="text"
                          placeholder="enter ur text"
                          onChange={(e) => setEditingText(e.target.value)}
                        />
                      ) : (
                        <div>{todo.text}</div>
                      )}
                    </div>
                  </td>
                  
                  
                  <td>
                    <div className="todo-actions">
                      {todo.id === todoEditing ? (
                        <button class="waves-effect waves-light btn" onClick={() => submitEdits(todo.id)}>
                          Submit Edits
                        </button>
                      ) : (
                        <button class="waves-effect waves-light btn" onClick={() => setTodoEditing(todo.id)}>
                          Edit
                        </button>
                      )}

                      <button class="waves-effect waves-light btn" onClick={() => deleteTodo(todo.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                  </tr>
                </div>
              ))}
            
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Achievements;

// { <div>
//                  <div className="card">
//                      <div className="card-content">
//                          <h6>
//                              <strong>Education</strong>
//                          </h6>
//                          <table className="striped">
//                              <thead>
//                                  <tr>
//                                      <th>Certificate</th>
//                                      <th>Date</th>
//                                      <th></th>
//                                  </tr>
//                              </thead>
//                              <tbody>
//                                  <tr>
//                                  <td>{state.achievements}</td>
//                                  <td>Jan 2018</td>
//                                  <td>
//                                      <Link to="#" class="btn blue lighten2">
//                                          View
//                                      </Link>
//                                  </td>
//                                  </tr>
//                                  <tr>
//                                  <td>Web Developement</td>
//                                  <td>Jan 2018</td>
//                                  <td>
//                                      <Link to="#" class="btn blue lighten2">
//                                          View
//                                      </Link>
//                                  </td>
//                                  </tr>
//                                  <tr>
//                                  <td>Web Developement</td>
//                                  <td>Jan 2018</td>
//                                  <td>
//                                      <Link to="#" class="btn blue lighten2">
//                                          View
//                                      </Link>
//                                  </td>
//                                  </tr>
//                              </tbody>
//                          </table>
//                    </div>
//                 </div>
//              </div> }