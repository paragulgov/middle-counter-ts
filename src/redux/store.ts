import { combineReducers, createStore } from "redux";
import {reducer} from './reducer'

const rootReducer = combineReducers({
    counter: reducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>
