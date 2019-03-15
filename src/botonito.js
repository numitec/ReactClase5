import React from 'react';
import MiStore from './store';
import { connect } from "react-redux";

function mapearEstadoConProps(state) {
    return state;
};

function __botonito(props) {
    function actualizar() {
        MiStore.dispatch({type:'gogogo'});
    }
    return (
        <input type="button" value={props.ultimaMilla} onClick={actualizar} />
    );
}

let Botonito = connect(mapearEstadoConProps)(__botonito);

export default Botonito;
