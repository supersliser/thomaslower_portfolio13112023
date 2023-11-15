import { ReactNode } from "react";
import styles from './countainer.module.css'

export default function BlockContainer({children, colour} : {children: ReactNode, colour: string[]}) {
    return (
        <div className={styles.BlockColour} style={{backgroundColor:"rgba(" + colour[0] + ", " + colour[1] + ", " + colour[2] + ", 0.90)"}}>
            {children}
        </div>
    )
}