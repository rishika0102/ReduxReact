 const redux = require('redux');
 const createStore = redux.createStore;
 const combineReducer = redux.combineReducers;
 const reduxLogger = require('redux-logger');
 const logger = reduxLogger.createLogger();
 const applyMiddleWare = redux.applyMiddleWare;

 const buy_cake = 'Buy_cake';
 const buy_ice_cream = 'Buy_ice-cream';

  function BuyCake() {
    return {
      type: buy_cake,
      info: 'First redux'
    }
  }

  function BuyIcecream() {
    return {
      type: buy_ice_cream
    }
  }

  const initialCakeState = {
    numberofCake : 10
  }

  const intialIcecreamState = {
    numberoficecream: 20
  }

  const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
      case buy_cake: return {
        ...state,
        numberofCake: state.numberofCake * 2
      }
      default: return state.numberofCake * 3
    }
  }

  const icecreamReducer = (state = intialIcecreamState, action) => {
    switch(action.type) {
      case buy_ice_cream: return {
        ...state,
        numberoficecream: state.numberoficecream * 2
      }
      default: return state.numberoficecream * 3
    }
  }

  const rootReducer = combineReducer({
    cake: cakeReducer,
    icecream: icecreamReducer
  })

  const store = createStore(rootReducer);
  console.log("intial state", store.getState());
  const unsubscribe = store.subscribe(()=> console.log('update state', store.getState()));
  store.dispatch(buy_cake())
  store.dispatch(buy_ice_cream())
  store.dispatch(buy_ice_cream())
  // unsubscribe()

  export default BuyCake;
