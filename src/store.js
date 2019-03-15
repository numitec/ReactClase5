import {createStore} from 'redux';
import reducerPrincipal from './reducer';

let MiStore = createStore(reducerPrincipal, {
    contador : 1,
    targetInicial : 10000,
    ts : Math.floor(new Date().getTime())
});

alert('one timer');

window.pruebaReducer = reducerPrincipal;
window.store = MiStore;

export default MiStore;