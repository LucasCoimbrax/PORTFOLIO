import React from 'react';
import styled from 'styled-components'

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4% 30%;
  padding: 1%;

  border: 1px solid gray;
  box-shadow: 1px 2px gray;
`
const ContainerAdicionarTarefas = styled.div`
  display: flex;
  padding-bottom: 2%;
`

const ContainerTarefas = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30%;
  padding: 2%;

  border: 1px solid gray;
  box-shadow: 1px 2px gray;
`

const ContainerTexto = styled.p`
  display: flex;
  text-align: justify;
  width: 50%;
`

class App extends React.Component {
  state = {
    inputTarefa: '',
    inputDate: '',
    listaDeTarefas: [
      {id: 1, texto: 'Levar o Cachorro para Passear', date: '07/02/2022'},
      {id: 2, texto: 'Revisar o conteúdo de JavaScript', date: '07/02/2022'},
      {id: 3, texto: 'Dar água para as plantas da sala!', date: '07/02/2022'}
    ]
  }

  guardaTexto = (event) => {
    this.setState({inputTarefa: event.target.value})
  }
  guardaDate = (event) => {
    this.setState({inputDate: event.target.value})
  }

  addTarefa = () => {
    const novaTarefa = {
      id: Math.random(),
      texto: this.state.inputTarefa,
      date: this.state.inputDate
    }
    const copia = [...this.state.listaDeTarefas, novaTarefa]

    this.setState({listaDeTarefas: copia})
    this.setState({inputTarefa: '', inputDate: ''})
  }

  deletarTarefa = (tarefaFeita) => {
    const copia = [...this.state.listaDeTarefas]
    const novaListaDeTarefas = copia.filter((tarefa) => {
      return tarefa.id !== tarefaFeita
    })

    this.setState({listaDeTarefas: novaListaDeTarefas})
  }

  render(){
    const tarefas = this.state.listaDeTarefas.map((tarefas) => {
      return (
        <ContainerTarefas>
          <input type='checkbox'/>
          <ContainerTexto>
            {tarefas.texto}
          </ContainerTexto>
          <p>
            {tarefas.date}
          </p>
          <button onClick={() => this.deletarTarefa(tarefas.id)}> X </button>
        </ContainerTarefas>
      )
    })

    return (
      <div>
        <ContainerPrincipal>
          <h1> Lista De Tarefas </h1>
          <ContainerAdicionarTarefas>
            <input 
              type='text' 
              placeholder='Tarefa'
              value={this.state.inputTarefa}
              onChange={this.guardaTexto}
            />
            <input 
              type='date'
              value={this.state.inputDate}
              onChange={this.guardaDate}
            />
            <button onClick={this.addTarefa}> Adicionar Tarefa </button>
          </ContainerAdicionarTarefas>
        </ContainerPrincipal>
        {tarefas}
      </div>
    )
  }
}
export default App;
