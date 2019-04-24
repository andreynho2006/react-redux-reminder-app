import storeFactory from './store'
import { suggestResortNames } from './actions'
import { addDay, 
        addError,
        clearError,
        changeSuggestions,
        clearSuggestions,
        removeDay, 
        setGoal,
        randomGoals
        } from './actions'


const store = storeFactory()

store.dispatch(
    suggestResortNames("hea")
)

// store.dispatch(
//     randomGoals()
// )

// store.dispatch(
//     removeDay("2016-12-22")
// )

// store.dispatch(
//     setGoal(55)
// )

// store.dispatch(
//     addError("something went wrong!!!!")
// )

// store.dispatch(
//     clearError(0)
// )

// store.dispatch(
//     changeSuggestions(['One','Two','Three'])
// )

// store.dispatch(
//     clearSuggestions()
// )