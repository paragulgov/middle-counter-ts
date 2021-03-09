import React, {useEffect, useState} from 'react'
import styles from './App.module.css'
import CountScreen from './components/CountScreen'
import EditScreen from './components/EditScreen'

function App() {
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(5)
    const [count, setCount] = useState(min)
    const [load, setLoad] = useState<boolean>(false)

    useEffect(() => {
        let minCount = localStorage.getItem('minValue')
        let maxCount = localStorage.getItem('maxValue')
        if (minCount) {
            setCount(JSON.parse(minCount))
            setMin(JSON.parse(minCount))
        }
        if (maxCount) {
            setMax(JSON.parse(maxCount))
        }
    }, [])

    const incHandler = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }

    const resetHandler = () => {
        setCount(min)
    }

    const applySettings = (minValue: number, maxValue: number) => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setLoad(false)
        setCount(minValue)
        setMin(minValue)
        setMax(maxValue)
    }

    return (
        <div className={styles.App}>
            <EditScreen applySettings={applySettings} load={load} setLoad={setLoad} />
            <CountScreen count={count} incHandler={incHandler} resetHandler={resetHandler} load={load} max={max} />
        </div>
    )
}

export default App
