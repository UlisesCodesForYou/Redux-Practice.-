const redux = require("redux"); // This is how I import redux.

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    // This function holds 2 parameters. 1. old/existing state 2. dispatched action.
    return {
      counter: state.counter + 1,
    }; // The return code block will return thew new state in the component.  Most of the time, this function can return anything. But most of the time it will return an object.
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer); // This is the store that I created.

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
