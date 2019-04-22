import C from './constants';
import appReducer from './store/reducers';
import initialState from './initialState.json'

let state = initialState;

console.log(`

    Initial State
    ==========
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`)

state = appReducer(state, {
    type: C.SET_GOAL,
    payload: 2
})

state = appReducer(state, {
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date":"2016-10-28",
        "powder": false,
        "backcountr": true
    }
})

state = appReducer(state, {
    type: C.CHANGE_SUGGESTIONS,
    payload: ["MT Tallac", "Mt Shasta"]
})

console.log(`

    Next State
    ==========
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`)