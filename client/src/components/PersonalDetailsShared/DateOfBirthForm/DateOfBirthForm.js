import { useState } from 'react';
import { useAuthContext } from '../../../context/auth/authContext';
import styles from './DateOfBirthForm.module.scss';
import { MdErrorOutline } from 'react-icons/md';

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function DateOfBirthForm() {
    const { user, updateUser } = useAuthContext();

    const [isNameEdit, setIsNameEdit] = useState(false);

    const [day, setDay] = useState('');
    const [dayError, setDayError] = useState('');
    const [month, setMonth] = useState('');
    const [monthError, setMonthError] = useState('');
    const [year, setYear] = useState('');
    const [yearError, setYearError] = useState('');

    const [isFormValid, setIsFormValid] = useState(true);

    const handleSave = () => {

        if (day.trim() === '') {
            setDayError('Please enter your birthday');
            setIsFormValid(false);
        }
        if (month.trim() === '') {
            setMonthError('Please enter the month you were born');
            setIsFormValid(false);;
        }
        if (year.trim() === '') {
            setYearError('Please enter the year you were born');
            setIsFormValid(false);
        }

        if (isFormValid === false) {
            console.log('hereee');
            return;
        }


        const userData = {
            id: user.id,
            day,
            month,
            year
        };

        updateUser(userData);

        setDay('');
        setYear('');
        setMonth('');
        setIsFormValid(true);
        setIsNameEdit(false);
    };

    const handleCancel = () => {
        setDayError('');
        setMonthError('');
        setYearError('');
        setIsNameEdit((prevState) => !prevState);
    };

    return (
        <div className={styles.settings}>
            <div className={styles.settings__text}>
                <p>Date of birth</p>
                {isNameEdit
                    ? <form
                        onSubmit={(e) => e.preventDefault()}
                        className={styles.settings__name__form}
                    >
                        <div className='form__row'>
                            <label
                                htmlFor='day'
                                className={`form__label ${styles.settings__name__form__label}`}
                            >Day of birth <span className='color__red'>*</span></label>
                            <input
                                id='day'
                                type='number'
                                name='firstName'
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                                className={dayError && 'form__input__error'}
                                placeholder='DD'
                                min="1"
                                max="31"
                            />
                            {dayError && <p className='form__error__message'>{dayError}</p>}
                        </div>
                        <div className='form__row'>
                            <label
                                htmlFor='month'
                                className={`form__label ${styles.settings__name__form__label}`}
                            >Month <span className='color__red'>*</span></label>
                            <select
                                id='month'
                                type='text'
                                name='lastName'
                                onChange={(e) => setMonth(e.target.value)}
                                className={yearError && 'form__input__error'}
                            >
                                <option value=''>MM</option>
                                {months.map((month) => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </select >
                            {monthError && <p className='form__error__message'>{monthError}</p>}
                        </div>
                        <div className='form__row'>
                            <label
                                htmlFor='year'
                                className={`form__label ${styles.settings__name__form__label}`}
                            >Year <span className='color__red'>*</span></label>
                            <input
                                id='year'
                                type='number'
                                name='firstName'
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className={yearError && 'form__input__error'}
                                placeholder='YYYY'
                            />
                            {yearError && <p className='form__error__message'>{yearError}</p>}
                        </div>

                    </form>
                    : (user?.day && user?.month && user?.year)
                        ? <p>{user.day}-{user.month}-{user.year}</p>
                        : <p>Add your date of birth</p>
                }
            </div>

            {isNameEdit
                ?
                <div className='form__buttons__wrapper'>
                    <button
                        className='form__cancel__btn'
                        onClick={handleCancel}
                    >Cancel</button>
                    <button
                        type='button'
                        onClick={handleSave}
                        className={`btn ${styles.settings__save__btn}`}
                    >
                        Save
                    </button>

                </div>
                : <button
                    type='button'
                    className={`btn ${styles.settings__edit}`}
                    onClick={() => setIsNameEdit((prevState) => !prevState)}
                >
                    Edit
                </button>
            }

        </div>
    );
}

export default DateOfBirthForm;