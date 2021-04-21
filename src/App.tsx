import React, {useEffect} from 'react'
import styles from './App.module.css'
import CountScreen from './components/CountScreen'
import EditScreen from './components/EditScreen'
import {useDispatch, useSelector} from 'react-redux'
import {CounterType, inc, reset, setMax, setMin, toggleLoad} from './redux/reducer'
import {AppRootStateType} from './redux/store'

function App() {
    const state = useSelector<AppRootStateType, CounterType>(state => state.counter)

    const dispatch = useDispatch()

    useEffect(() => {
        const min = localStorage.getItem('minValue')
        const max = localStorage.getItem('maxValue')
        if (min) {
            dispatch(setMin(Number(JSON.parse(min))))
        }
        if (max) {
            dispatch(setMax(Number(JSON.parse(max))))
        }
    }, [])

    const incHandler = () => {
        if (state.count < state.max) {
            dispatch(inc())
        }
    }

    const resetHandler = () => {
        dispatch(reset())
    }

    const applySettings = (minValue: number, maxValue: number) => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        dispatch(toggleLoad(false))
        dispatch(setMin(minValue))
        dispatch(setMax(maxValue))
    }

    return (
        <div className={styles.App}>
            <EditScreen
                applySettings={applySettings}
                load={state.load}
                dispatch={dispatch}
            />
            <CountScreen
                resetHandler={resetHandler}
                incHandler={incHandler}
                count={state.count}
                load={state.load}
                max={state.max}
            />
        </div>
    )
}

export default App
