function Square({value}) {
   return <button className="square">{value}</button>
}

export default function Board() {
 
   return( 
   <>
      <div className="board-row">
         <Square value="1"/>
         <Square value="2"/>
         <Square value="3"/>
      </div>
      <div className="board-row">
         <Square value="4"/>
         <Square value="5"/>
         <Square value="6"/>
      </div>
      <div className="board-row">
         <Square value="7"/>
         <Square value="8"/>
         <Square value="9"/>
      </div>

   </>
  )
}





/*

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

*/


/*
function AboutPage() {
  return (
    <>
      <h1>Acerca de</h1>
      <p>Hola.<br />¿Cómo <br /> vas?</p>
      <img className="avatar" src="./imagenes/smiley.gif" alt="Avatar" />
    </>
  );
}



function MyButton() {
  return (
    <button>
      Soy un botón
    </button>
  );
}

function MyApp() {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <MyButton />
      <AboutPage />
    </div>
  );
}

export default MyApp;*/

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          Hola Mundo!
        </p>
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

export default App;*/
