import { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import FormModal from '../FormModal/FormModal';
import Hero from '../Hero/Hero';
import styles from './SearchForm.module.scss';


function SearchForm() {

    const { width } = useWindowDimensions();

    const [destination, setDestination] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [options, setOptions] = useState({
        adults: 2,
        children: 0,
        rooms: 1
    });
    const { adults, children, rooms } = options;


    const handleOptions = (name, operation) => {

        setOptions((prevState) => {
            return {
                ...prevState,
                [name]: operation === 'increment' ? options[name] + 1 : options[name] - 1
            };
        });
    };



    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(destination);
        console.log(checkInDate);
        console.log(checkOutDate);
    };

    const toggleModal = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    return (
        <>
            {width > 640 && <Hero />}
            <section className={`${styles['form-container']}`}>
                <div className='container'>
                    {width < 640 && <>
                        <h2 className={styles.form__title}>Search</h2>
                        <p className={styles.form__text}>Destinations, properties, even an address</p>
                    </>}
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.form__row}>
                            {width < 640 && <label
                                htmlFor="destination"
                                className={styles.form__label}
                            >
                                Destination
                            </label>}
                            <input
                                type="search"
                                id='destination'
                                className={styles.form__input}
                                placeholder="Where are you going?"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                        <div className={styles.form__wrapper}>
                            <div className={styles.form__row}>
                                {width < 640 && <label
                                    htmlFor="check-in"
                                    className={styles.form__label}
                                >
                                    Check-In
                                </label>}
                                <input
                                    id='check-in'
                                    type="date"
                                    className={styles.form__input}
                                    value={checkInDate}
                                    onChange={(e) => setCheckInDate(e.target.value)}
                                />
                            </div>
                            <div className={styles.form__row}>
                                {width < 640 && <label
                                    htmlFor="check-out"
                                    className={styles.form__label}
                                >
                                    Check-Out
                                </label>}
                                <input
                                    type="date"
                                    className={styles.form__input}
                                    value={checkOutDate}
                                    onChange={(e) => setCheckOutDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div
                            onClick={toggleModal}
                            className={styles.form__container}>
                            <div>
                                <p>Adults</p>
                                <p>{adults}</p>
                            </div>
                            <div>
                                <p>Children</p>
                                <p>{children}</p>
                            </div>
                            <div>
                                <p>Rooms</p>
                                <p>{rooms}</p>
                            </div>

                        </div>


                        <button
                            className={`btn ${styles.form__button}`}
                        >
                            Search
                        </button>
                    </form>
                    {isModalOpen &&

                        <FormModal
                            adults={adults}
                            children={children}
                            rooms={rooms}
                            toggleModal={toggleModal}
                            handleOptions={handleOptions}
                        />
                    }
                </div>
            </section>
        </>
    );
}

export default SearchForm;