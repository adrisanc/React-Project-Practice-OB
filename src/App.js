import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskList from './components/container/task_list';
import UserList from './components/container/user_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';

import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente  propio Greeting.jsx */}
        {/* <Greeting name="Yasmín"></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name={'Yasmín'}></GreetingF> */}
        {/* Componente de listado de tareas */}
        {/* <TaskList></TaskList> */}

        {/* ejercicios 1, 2 y 3 */}
        {/* <UserList></UserList> */}
        
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 name="yasmin">
        {/* Todo lo que hay aqui desde el inicio hasta el cierre, es tratado como props.children en cualquier componente */}
        <h2> Contenido del props.children</h2>
        <p>Otro props.children</p>
        </Ejemplo4>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
