import { Link, Outlet } from 'react-router-dom';
import { Header } from '../../components';
import { accountSettingsData } from '../../data/AccountSettingsLinks';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import styles from './AccountSettingsLayout.module.scss';

function AccountSettingsLayout() {

    const { width } = useWindowDimensions();

    return (
        <>
            <Header />
            <main className={`container ${styles.account__settings}`}>
                {width > 800 && (
                    <aside className={styles.aside}>
                        {accountSettingsData.map((data) => (
                            <li key={data.id}>
                                <Link className={styles.aside__link} to={`${data.link}`}>
                                    <div className={styles.aside__box}>
                                        <i className={styles.aside__box__icon}>{data.icon}</i>
                                        <p className={styles.aside__box__title}>{data.title}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </aside>
                )}
                <div>
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default AccountSettingsLayout;