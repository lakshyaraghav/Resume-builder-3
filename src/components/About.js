import React from "react";
import { useLocation } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

const About = (props) => {
    // const [todos, setTodos] = React.useState([]);
    // const [todo, setTodo] = React.useState("");
    // const [todoEditing, setTodoEditing] = React.useState(null);
    // const [editingText, setEditingText] = React.useState("");
  
    // React.useEffect(() => {
    //   const json = localStorage.getItem("todos");
    //   const loadedTodos = JSON.parse(json);
    //   if (loadedTodos) {
    //     setTodos(loadedTodos);
    //   }
    // }, []);
  
    // React.useEffect(() => {
    //   const json = JSON.stringify(todos);
    //   localStorage.setItem("todos", json);
    // }, [todos]);
  
    // function handleSubmit(e) {
    //   e.preventDefault();
  
    //   const newTodo = {
    //     id: new Date().getTime(),
    //     text: todo,
    //     completed: false,
    //   };
    //   setTodos([...todos].concat(newTodo));
    //   setTodo("");
    // }
  
    // function deleteTodo(id) {
    //   let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    //   setTodos(updatedTodos);
    // }
  
    // function toggleComplete(id) {
    //   let updatedTodos = [...todos].map((todo) => {
    //     if (todo.id === id) {
    //       todo.completed = !todo.completed;
    //     }
    //     return todo;
    //   });
    //   setTodos(updatedTodos);
    // }
  
    // function submitEdits(id) {
    //   const updatedTodos = [...todos].map((todo) => {
    //     if (todo.id === id) {
    //       todo.text = editingText;
    //     }
    //     return todo;
    //   });
    //   setTodos(updatedTodos);
    //   setTodoEditing(null);
    // }
  

////

  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>{state.username}</strong>
          </h6>
          <h6><strong>Description</strong></h6>
          <p className="grey-text">{state.desc}</p>
        </div>
        <div className="card-action">
          <h6>
            <strong>Personal info</strong>
          </h6>
          <div className="row mt">
            <div className="col s12 m6 l6 xl6">
              <p>
                <strong>Name:</strong> {state.username}
                <EditIcon />
              </p>
              <p>
                <strong>Email:</strong>
                {state.email}
                <EditIcon />
              </p>
              <p>
                <strong>Phone:</strong>
                {state.phone}
                <EditIcon />
              </p>
            </div>
            <div className="col s12 m6 l6 xl6">
              <p>
                <strong>Address:</strong>
                {state.address}
                <EditIcon />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    
    
  );
};

export default About;
