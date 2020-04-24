// Este é o arquivo principal de nossa aplicação, ele carrega módulos do ReactDOM, rotas e renderiza tudo no arquivo index.html que está dentro de public, utilizando a div com o id=root

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';


const App = () => <Routes />; 


// debugger;

ReactDOM.render(<App />, document.getElementById('root'));


