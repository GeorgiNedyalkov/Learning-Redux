# Learning Redux

Learning redux following the tutorial of [Tania Rascia](https://www.taniarascia.com/redux-react-guide/), by building a simple blog app.

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

## Set up the App

## Bring in Reducers

A _reducer_ is a function that determines changes to Redux state.
It is a pure function that returns a copy of the state with the new change.

We can have many reducers and combine them into one root reducer using `combineReducers`.

## Create a root reducer file in reducers

## Create a posts reducer

with initial state that has an array of all posts, bool is it loading and bool if it has errors.

## Set up Redux Actions

Actions are how we communicate with redux store.

- We first define action types as constants to avoid typos as a best practice.

- Then we create _action creators_

Functions that return an actions, which consists of the type and an optional
payload containing data.

- Finally we make an async action that combines all actions using thunk.

## Respond to actions

- Import posts actions to posts reducers
