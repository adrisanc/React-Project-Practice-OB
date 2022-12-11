// componente de clase
import React, { Component } from "react";
import PropTypes from "prop-types";
//por convención las clases inician con mayuscula
class Greeting extends Component {
    constructor(props){
        super(props);

        //state es privado es un valor estatico
        this.state = {
            age: 27
        }
    }
  render() {
    return (
      <div>
        <h1>¡Hola {this.props.name}!</h1>
        <h2> Tu edad es de: {this.state.age}</h2>
        <div>
            <button onClick={this.birthday}>
                Cumplir años
            </button>
        </div>
      </div>
    );
  }

  birthday = () =>{
    this.setState((prevState)=>(
        {
            age: prevState.age + 1
        }
    ))
  }
}
Greeting.propTypes = {
    name: PropTypes.string,
};

export default Greeting;
