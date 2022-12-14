# Learning Redux

### Install Dependencies

Redux, react-redux, redux-thunk, redux-devtools-extension, react-router-dom.

### Make directories

For _reducers_ and _actions_, as well as _pages_

## Setting up the _Redux Store_

In `index.js` we add:

- `createStore`: to create the store and maintain Redux state
- `applyMiddleware`: to be able to use middleware i.e. `thunk`
- `Provider`: to wrap the entire app in Redux
- `thunk`: a middleware that allows for async actions in Redux
