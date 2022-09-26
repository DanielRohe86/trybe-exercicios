const Redux = require('redux');

const fazerLogin = (email) => ({ // ACTION CREATOR  - ENVIA ACTION AO REDUCER PARA ATUALIZAR O ESTADO
  type: "LOGIN", //action pt 1 - O QUE A ACTION VAI MODIFICAR
  email, //action pt 2 - O QUE A ACTION VAI MODIFICAR
});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) { /// o SWITCH  administra a execução da ACTION via action.type, sendo o type ligado ao CASE
    case "LOGIN":
      return {
        ...state,
        login: !state.login, //ACTION
        email: action.email, //ACTION
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com")); //DISPATCHER

console.log(store.getState());

// { login: true, email: 'alguem@email.com' }