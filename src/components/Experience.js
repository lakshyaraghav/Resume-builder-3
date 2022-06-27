import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Experience = (props) => {
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

  ////
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <div className="card">
      <div className="card-content">
        <h6>
          <strong>Experience</strong>
        </h6>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Experience"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit" class="waves-effect waves-light btn">
            Add education
          </button>
          
        </form>
        <br></br>
        <div className="row">
          <div className="col s12 m4 l4 xl4">
            <p className="teal year_exp white-text">
              Jan
              <strong>2016</strong>-March
              <strong>2018</strong>
            </p>
          </div>
          <div classname="col s12 m8 xl8">
            <blockquote className="no-pad">
              <h6 classname="no-pad mt-bottom ">
                <strong>{state.experience}</strong>
              </h6>
              {/* <p>{state.experiencedesc}</p> */}
            </blockquote>
          </div>
        </div>
        {todos.map((todo) => (
            <>
            <br></br>
          <div key={todo.id} className="todo row">
            <div className="col s12 m4 l4 xl4">
              <p className="teal year_exp white-text">
                Jan
                <strong>2016</strong>-March
                <strong>2018</strong>
              </p>
            </div>
            <div classname="col s12 m8 xl8">
              <blockquote className="no-pad">
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
                    <div></div>
                  )}
                  {/* {todo.id === todoEditing ? (
                    <input
                      type="text-desc"
                      placeholder="enter ur text"
                      onChange={(e) => setEditingText(e.target.value)}
                    />
                  ) : (
                    <div></div>
                  )} */}
                </div>
                <h6 classname="no-pad mt-bottom ">
                  <strong>{todo.text}</strong>
                </h6>
                <p>{todo.desc}</p>
              </blockquote>
              <div className="todo-actions">
                {todo.id === todoEditing ? (
                  <button
                    class="waves-effect waves-light btn"
                    onClick={() => submitEdits(todo.id)}
                  >
                    Submit Edits
                  </button>
                ) : (
                  <button
                    class="waves-effect waves-light btn"
                    onClick={() => setTodoEditing(todo.id)}
                  >
                    Edit
                  </button>
                )}

                <button
                  class="waves-effect waves-light btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Experience;
