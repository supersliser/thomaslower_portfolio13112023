import styles from './text.module.css'

export default function Text({children, dark}: {children: string, dark?: boolean}) {
    if (dark === null) {
        dark = false;
    }
    var color: string = "";
    if (dark) {
        color = "rgb(88, 74, 56)";
    }
    else {
        color = "rgb(231, 193, 145)";
    }
    return (
        <p className={styles.default} style={{color: color}}>{children}</p>
    )
}