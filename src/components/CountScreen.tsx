import React from 'react'
import styles from './CountScreen.module.css'
import Button from './Button'

type CountPropsType = {
    resetHandler: () => void
    incHandler: () => void
    count: number
    load: boolean
    max: number
}

function CountScreen(props: CountPropsType) {

    return (
        <div className={styles.CountScreen}>
            {props.load
                ? <h1>set value</h1>
                : <h1 className={props.count === props.max ? styles.Title : ''}>{props.count}</h1>
            }
            <div>
                <Button text="inc" onClick={props.incHandler} disabled={props.count === props.max} />
                <Button text="reset" onClick={props.resetHandler} />
            </div>
        </div>
    )
}

export default CountScreen
