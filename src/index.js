import storeFactory from './store'
import { addDay, 
        addError,
        clearError,
        changeSuggestions,
        clearSuggestions,
        removeDay, 
        setGoal } from './actions'


const store = storeFactory()

store.dispatch(
    addDay("Heavenly", "2016-12-22")
)

store.dispatch(
    removeDay("2016-12-22")
)

store.dispatch(
    setGoal(55)
)

store.dispatch(
    addError("something went wrong!!!!")
)

store.dispatch(
    clearError(0)
)

store.dispatch(
    changeSuggestions(['One','Two','Three'])
)

store.dispatch(
    clearSuggestions()
)