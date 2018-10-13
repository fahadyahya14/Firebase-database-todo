import React from 'react';
import firebase from 'firebase'
import Show from "./table"
import {sumbit} from './../../sreive/serive'



class Inputomponent extends  React.Component {
  constructor(){
    super();
    this.state = {
      name:'',
      editNameNum:'',
      add:true,
      todo :[]
    }
    
    firebase.database().ref('message/todo').on('value', snapshot => {
      const todosObj = snapshot.val();
      console.log(todosObj)    
      this.setState({todo:todosObj})
    })
  };
    
  formInput=(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  addItem=()=>{
    let todoArr =  [...this.state.todo,this.state.name];
    sumbit(todoArr)
    this.setState({
      todo:todoArr,
      name:'',
    }) 
  };

  removeItem=(event)=>{
    let todoArr =  [...this.state.todo];
    let ind = todoArr.indexOf(event.target.id)
    todoArr.splice(ind,1);
    sumbit(todoArr)    
    this.setState({
      todo:todoArr
    })
  };

  editItem=(event)=>{
    let todoArr =  [...this.state.todo];
    let ind = todoArr.indexOf(event.target.id)
    let editName = todoArr[ind];
    this.setState({
      add:false,
      name:editName,
      editNameNum:ind
    })
  };

  saveItem=()=>{
    let todoArr =  [...this.state.todo];
    todoArr[this.state.editNameNum] = this.state.name;
    sumbit(todoArr)
    this.setState({
      add:true,
      todo:todoArr,
      name:''
    })
  };





  render() {
    return (
      <div className="container">
        <h1>Todo App</h1>
        <input  label="Add Todo"  name="name" value={this.state.name}  onChange={this.formInput}  margin="normal"/>
        {this.state.add ? 
        (<button onClick={this.addItem} className="btn btn-outline-primary">+ Add</button>):
        (<button onClick={this.saveItem} className="btn btn-outline-warning">Save</button>)}

{console.log(  this.state.todo.length > 1 ? 'mat':null)} 
  <Show data={this.state.todo}   od={this.removeItem} of={this.editItem} />

      </div>
    );
  }
}

export default Inputomponent;
