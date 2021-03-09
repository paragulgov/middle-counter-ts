import React, {ChangeEvent, useEffect, useState} from 'react'
import styles from './EditScreen.module.css'
import Button from './Button'

type PropsType = {
    applySettings: (minValue: number, maxValue: number) => void
    load: boolean
    setLoad: (value: boolean) => void
}

function EditScreen(props: PropsType) {

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)

    useEffect(() => {
        let minCount = localStorage.getItem('minValue')
        let maxCount = localStorage.getItem('maxValue')
        if (minCount) {
            setMinValue(JSON.parse(minCount))
        }
        if (maxCount) {
            setMaxValue(JSON.parse(maxCount))
        }
    }, [])

    const changeMin = (e: ChangeEvent<HTMLInputElement>) => {
        if (!props.load) {
            props.setLoad(true)
        }
        let value = Number(e.currentTarget.value)
        if (value >= 0 && value < maxValue) {
            setMinValue(value)
        }
    }

    const changeMax = (e: ChangeEvent<HTMLInputElement>) => {
        if (!props.load) {
            props.setLoad(true)
        }
        let value = Number(e.currentTarget.value)
        if (value > minValue) {
            setMaxValue(value)
        }
    }

    const applySettings = () => {
        props.applySettings(minValue, maxValue)
    }

    return (
        <div className={styles.EditScreen}>
            <label>
                start
                <input type="number" value={minValue} onChange={changeMin} />
            </label>
            <label>
                max
                <input type="number" value={maxValue} onChange={changeMax} />
            </label>
            <Button disabled={!props.load} onClick={applySettings} text="set" />
        </div>
    )
}

export default EditScreen
