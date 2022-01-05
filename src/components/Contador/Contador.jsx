import React, { Component } from 'react'
import Button from '../Button/Button'
import './Contador.css'
import Display from './Display'
import PassoForm from './passoForm'

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5
  }
  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>

        <Display numero={this.state.numero}/>
        <PassoForm onChange = {(e) => this.setState({ passo: +e.target.value })} value={this.state.passo}/>
        <Button
          onClick={() =>
            this.setState({ numero: this.state.numero + this.state.passo })
          }
        >
          +
        </Button>
        <Button
          onClick={() =>
            this.setState({ numero: this.state.numero - this.state.passo })
          }
        >
          -
        </Button>
      </div>
    )
  }
}

export default Contador
