import { BiUserCircle, BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import SearchForm from '../SearchForm/SearchForm';
import { useAuthContext } from '../../context/auth/authContext';

function Header() {

    const { user } = useAuthContext();
    const { width } = useWindowDimensions();

    const mobileNavigation = (
        <div className={styles.header__icons}>
            <BiUserCircle />
            <BiMenu />
        </div>
    );

    const desktopNavigation = (
        <ul className={styles.header__links}>
            {user === null
                ?
                <>
                    <li className={styles.header__link}>
                        <Link className='btn btn-secondary' to='/register'>Register</Link>
                    </li>
                    <li className={styles.header__link}>
                        <Link className='btn btn-secondary' to='/sign-in'>Sign in</Link>
                    </li>
                </>
                :
                <>
                    <li className={styles.header__link}>
                        <Link to='/account'>Your account</Link>
                    </li>
                </>
            }
        </ul>
    );

    return (
        <>
            <header className={styles.header}>
                <section className={`container ${styles.header__wrapper}`}>
                    <div className={styles.header__logo}>Booking.com</div>
                    {width <= 640
                        ? mobileNavigation
                        : desktopNavigation
                    }

                </section>
                <section className='container'>
                    {width > 640 && <div className={styles.header__titles}>
                        <h1 className={styles.header__title}>Find your next stay</h1>
                        <h3 className={styles.header__subtitle}>Search low prices on hotels, homes and much more...</h3>
                    </div>}

                </section>
            </header>
            <SearchForm />
        </>
    );
}

export default Header;