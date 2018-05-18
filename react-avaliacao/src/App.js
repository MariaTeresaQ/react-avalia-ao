import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tarefas: [],
      nova_tarefa: "",
      newDate: new Date(),
      estado_tarefa: "",
    }
    this.handleNovaTarefa = this.handleNovaTarefa.bind(this)
    this.inserirNovaTarefa = this.inserirNovaTarefa.bind(this)
  }

  handleNovaTarefa(e){
    e.preventDefault()
    if(this.state.nova_tarefa !== ""){
      this.state.tarefas.push({
        text: this.state.nova_tarefa,
        //date: this.javejo
        //completo: this.state.estado_tarefa === "not_done" ? false : true, isto e para o estilo
      })
      this.setState({
        tarefas: this.state.tarefas,
        nova_tarefa: ""
      })
      //this.nova_tarefa.focus()
    } else{}
  }

  inserirNovaTarefa(e){
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*<p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
         </p>*/}

        <div>
          <p>TO DO LIST</p>
        </div>

        <div>
          <ul>
            {this.state.tarefas.map((item, index) => {
              return <li>
                <p>{this.state.tarefas[index]}</p>
                <p>{item.text}</p>
              </li>
            })}
          </ul>
          </div>


        <div>

        </div>

        <div>
          <form onSubmit={this.handleNovaTarefa}>
            <input type="text" name="nova_tarefa" value={this.state.nova_tarefa} onChange={this.inserirNovaTarefa}/>
            <p>aqui há de estar a data, 'pera aí</p>
            <select name="estado_tarefa" value={this.state.estado_tarefa} onChange={this.inserirNovaTarefa} >
                  <option value="done">Done</option>
                  <option value="not_done">Not Done</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
