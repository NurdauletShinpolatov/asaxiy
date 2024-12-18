import styles from './CustomButton.module.scss'

export default function CustomButton({ w, h, type="solid", children }) {
    return(
        <button className={`${styles.CustomButton} ${type != "solid" ? styles.transparent : ""}`} style={{ width: w, height: h}}>
            {children}
        </button>
    )
}