import styles from './text.module.css'

export default function Title({children, dark}: {children: string, dark?: boolean}) {
    if (dark === null)
    {
        dark = false;
    }
    var color: string = ""
    if (dark) {
        color = "rgb(34, 28, 21)";
    }
    else {
        color = "rgb(231, 193, 145)";
    }
    return (
        <p className={styles.default + " " + styles.title} style={{color: color}}>{children}</p>
    )
}