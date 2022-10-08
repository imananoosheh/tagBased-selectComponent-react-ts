import styles from './select.module.css'

type SelectOption = {
    value: string
    label: any
}

type SelectProps = {
    value?: SelectOption
    options: SelectOption[]
    onChange: (value: SelectOption | undefined) => void
}

export function Select({ value, onChange, options}: SelectProps){
    return(
        <div tabIndex={0} className={styles["app-container"]}>
            <span className={styles.value}>value</span>
            <button className={styles["clear-button"]}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${styles.show}`}>
                {options.map(option => (
                    <li key={option.label} className={styles.option}>
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}