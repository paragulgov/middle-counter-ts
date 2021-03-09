import React from 'react'
import styles from './CountScreen.module.css'
import Button from './Button'

type PropsType = {
    count: number
    incHandler: () => void
    resetHandler: () => void
    load: boolean
    max: number
}

function CountScreen(props: PropsType) {

    return (
        <div className={styles.CountScreen}>

            {
                props.load
                    ? <h1>set value</h1>
                    : <h1 className={props.count === props.max ? styles.Title : ''}>{props.count}</h1>
            }
            <div>
                {/*<button disabled={props.count === props.max} onClick={props.incHandler}>inc</button>*/}
                <Button text="inc" onClick={props.incHandler} disabled={props.count === props.max} />
                <Button text="reset" onClick={props.resetHandler} />
            </div>
        </div>
    )
}

export default CountScreen
