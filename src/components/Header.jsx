import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.menu_container}>

            <div className={styles.flex_item}>

                <div className={styles.menu_title}>
                    Welcome to Burger World!
                </div>
            </div>
            <div className={styles.flex_item}>

                <div className={styles.cart}>Cart</div>
                </div>
        </div>
    )
}

export default Header;