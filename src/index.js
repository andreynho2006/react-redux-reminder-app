import C from './constants';
import { goal } from './store/reducers';

const state = 10;

const action = {
    type: C.SET_GOAL,
    payload: 15
}

const nextState = goal(state, action)

console.log(`
        
    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${nextState}

`)




// console.log(`

//     Sky Day Counter
//     ===================
//     The goal is ${goal} days
//     Initial there are ${allSkyDays.length} sky days in state

    
//     Constants (actions)
//     ===================
//     ${Object.keys(C).join('\n     ')}

// `)