import styles from './styles.module.css'

export const Footer =()=>{
    return(
        <div className={styles.footer}>
            <div>
                <h1>QPICK</h1>
            </div>
            <div className={styles.social}>
                <nav className={styles.nav}>
                    <ul className={styles.links}>
                        <li >Избранное</li>
                        <li >Корзина</li>
                        <li >Контакты</li>
                    </ul>
                    <ul className={styles.links}>
                        <li>Условия сервиса</li>
                    </ul>
                </nav>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Footer;