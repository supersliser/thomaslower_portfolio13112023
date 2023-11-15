import styles from './countainer.module.css'

export default function Container({children, width}: {children: React.ReactNode, width: number}) {
    return (
        <div style={{width: width + "%"}}>
            <div className={styles.Defaultcolour}>
                {children}
            </div>
        </div>
    )
}