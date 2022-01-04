import React, { Component } from 'react'
import './Contador.css'

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5
  }
  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>

        <h3> {this.state.numero}</h3>
        <div>
          <label htmlFor="passoInput">Passos: </label>
          <input
            id="passoInput"
            type="number"
            value={this.state.passo}
            onChange={e => this.setState({ passo: +e.target.value })}
          />
        </div>
        <button
          onClick={() =>
            this.setState({ numero: this.state.numero + this.state.passo })
          }
        >
          +
        </button>
        <button
          onClick={() =>
            this.setState({ numero: this.state.numero - this.state.passo })
          }
        >
          -
        </button>
      </div>
    )
  }
}

export default Contador
