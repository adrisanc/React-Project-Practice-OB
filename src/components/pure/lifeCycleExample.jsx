// Ejmplo de componente de tipo clase que disponde de los 
// metodos de ciclo de vida

import PropTypes from 'prop-types'
import React, { Component } from 'react'

class LifeCycleExample extends Component {
  // los constructores están para la inicialización de variables

  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR: Cuando se instancia el componente');
  }
  componentWillMount(){
    console.log('WillMount: Antes del montaje del componente');
  }

  componentDidMount(){
    console.log('DidMount: Justo al acabar el montaje del componente, antes renderizarlo');
  }

  componentWillReceiveProps(nextProps){
    console.log('WillReceiveProps: Si va a recibir nuevas props');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate: Controlar si el componnete debe o no actualizarse devuelve true || false');

  }

  componentWillUpdate(nextProps, nextState){
    console.log('WillUpdate: Justo antes de actualizarse');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('DidUpdate: Justo despues de actualizarse');
  }

  componentWillUnmount(){
    console.log('WillUnmount: Justo antes de desaparecer');
  }

  render() {
    return (
      <div>lifeCycleExample</div>
    )
  }
}
export default LifeCycleExample
