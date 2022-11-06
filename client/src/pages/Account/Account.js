import { Header } from '../../components';
import styles from './Account.module.scss';
import { Link } from 'react-router-dom';
import { accountSettingsData } from '../../data/AccountSettingsLinks';

function Account() {
    return (
        <>
            <Header />
            <section className='container'>
                <div className={styles.section__heading}>
                    <h2>Account settings</h2>
                    <p>Manage your Booking.com experience</p>
                </div>

                <div className={styles.settings}>

                    {accountSettingsData.map((data) => (
                        <Link key={data.id} className={styles.link1} to={data.link}>
                            <div className={styles.settings__card}>
                                <i className={styles.settings__card__icon}>{data.icon}</i>
                                <div className={styles.settings__card__details}>
                                    <h3 className={styles.settings__card__details__title}>{data.title}</h3>
                                    <p className={styles.settings__card__details__text}>{data.text}</p>
                                    <p className={styles.settings__card__details__link}>{data.linkText}</p>
                                </div>
                            </div>
                        </Link>
                    ))}


                </div>
            </section>
        </>
    );
}

export default Account;