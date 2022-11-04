import { BiUserCircle, BiMenu } from 'react-icons/bi';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <section className={`container ${styles.header__wrapper}`}>
                <div className={styles.header__logo}>Booking.com</div>
                <div className={styles.header__icons}>
                    <BiUserCircle />
                    <BiMenu />
                </div>
            </section>
        </header>
    );
}

export default Header;