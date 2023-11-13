import styles from './countainer.module.css'

export default function Container({children, width}) {
    return (
        <div style={{width: {width}}}>
            <div>
                {children}
            </div>
        </div>
    )
}