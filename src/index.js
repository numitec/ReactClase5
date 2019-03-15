import React from 'react';
import ReactDom from 'react-dom';
import MiStore from './store';
import { Provider } from "react-redux";
import { connect } from "react-redux";
import Botonito from './botonito';

function mapearEstadoConProps(state) {
    return { ultimaMilla: state.ultimaMilla };
};

function Excuse(props) {
    return (
        <div>
            <h1>Esto es excuse</h1>
            <h1>{props.ultimaMilla}</h1>
        </div>
    );
}

let Mostrar = connect(mapearEstadoConProps)(Excuse);

function App (props) {
    return (
        <div>
            <h1>App para probar redux</h1>
            <h1>{props.ultimaMilla}</h1>
            <Mostrar></Mostrar>
            <Botonito></Botonito>
        </div>
    );
}

ReactDom.render(
    <Provider store={MiStore}>
        <App>
        </App>
    </Provider>, 
    document.getElementById('root')
);