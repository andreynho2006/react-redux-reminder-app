import C from './constants';
import { skiDay } from './store/reducers';

const state = null;

const action = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Heavenly",
        "date": "2016-12-16",
        "powder": true,
        "backcountr": false
    }
}

const nextState = skiDay(state, action)

console.log(`
        
    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

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