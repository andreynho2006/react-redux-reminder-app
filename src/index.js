import C from './constants';
import { allSkyDays, goal } from './initialState.json';

console.log(`

    Sky Day Counter
    ===================
    The goal is ${goal} days
    Initial there are ${allSkyDays.length} sky days in state

    
    Constants (actions)
    ===================
    ${Object.keys(C).join('\n     ')}
    
`)