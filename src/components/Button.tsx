import React from 'react'
import styles from './Button.module.css'

type PropsType = {
    text: string
    onClick: () => void
    disabled?: boolean
}

function Button(props: PropsType) {

    return <button className={styles.Button} onClick={props.onClick} disabled={props.disabled}>{props.text}</button>

}

export default Button
