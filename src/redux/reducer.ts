export type CounterType = {
    min: number,
    max: number,
    count: number,
    load: boolean
}

export type IncActionType = {
    type: 'INC'
}

export type ResetActionType = {
    type: 'RESET'
}

export type SetMinActionType = {
    type: 'SET-MIN',
    value: number
}

export type SetMaxActionType = {
    type: 'SET-MAX',
    value: number
}

export type ToggleLoadActionType = {
    type: 'TOGGLE-LOAD',
    value: boolean
}

const initialState: CounterType = {
    min: 0,
    max: 5,
    count: 1,
    load: false
}

type ActionTypes = IncActionType | ResetActionType | SetMinActionType | SetMaxActionType | ToggleLoadActionType

export const reducer = (state: CounterType = initialState, action: ActionTypes): CounterType => {
    switch (action.type) {
        case 'INC': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'RESET': {
            return {
                ...state,
                count: state.min
            }
        }
        case 'SET-MIN': {
            return {
                ...state,
                min: action.value,
                count: action.value
            }
        }
        case 'SET-MAX': {
            return {
                ...state,
                max: action.value
            }
        }
        case 'TOGGLE-LOAD': {
            return {
                ...state,
                load: action.value
            }
        }

        default:
            return state
    }
}

export const inc = (): IncActionType => {
    return {type: 'INC'}
}

export const reset = (): ResetActionType => {
    return {type: 'RESET'}
}

export const setMin = (value: number): SetMinActionType => {
    return {type: 'SET-MIN', value}
}

export const setMax = (value: number): SetMaxActionType => {
    return {type: 'SET-MAX', value}
}

export const toggleLoad = (value: boolean): ToggleLoadActionType => {
    return {type: 'TOGGLE-LOAD', value}
}
