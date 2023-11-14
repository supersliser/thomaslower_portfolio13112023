import styles from './text.module.css'

export default function Text({children}: {children: string}) {
    return (
        <p className={styles.default}>{children}</p>
    )
}