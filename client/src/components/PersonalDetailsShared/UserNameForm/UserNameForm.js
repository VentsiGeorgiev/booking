import { useState } from 'react';
import { useAuthContext } from '../../../context/auth/authContext';
import styles from './UserNameForm.module.scss';
import { MdErrorOutline } from 'react-icons/md';

function UserNameForm() {
    const { user, updateUser } = useAuthContext();

    const [isNameEdit, setIsNameEdit] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const handleSave = () => {

        if (firstName === '') {
            setFirstNameError('Please enter your first name');
        }
        if (lastName === '') {
            setLastNameError('Please enter your last name');
        }

        if (firstName === '' || lastName === '') {
            return;
        }

        const userData = {
            id: user.id,
            firstName,
            lastName
        };

        updateUser(userData);
        setFirstName('');
        setLastName('');
        setIsNameEdit(false);
    };

    return (
        <div className={styles.settings}>
            <div className={styles.settings__text}>
                <p>Name</p>
                {isNameEdit
                    ? <form
                        onSubmit={(e) => e.preventDefault()}
                        className={styles.settings__name__form}
                    >
                        <div className='form__row'>
                            <label
                                htmlFor='first-name'
                                className={`form__label ${styles.settings__name__form__label}`}
                            >First name <span className='color__red'>*</span></label>
                            <input
                                id='first-name'
                                type='text'
                                name='firstName'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className={firstNameError && 'form__input__error'}
                            />
                            {firstNameError && <MdErrorOutline className='form__error_icon' />}
                            {firstNameError && <p className='form__error__message'>{firstNameError}</p>}
                        </div>
                        <div className='form__row'>
                            <label
                                htmlFor='last-name'
                                className={`form__label ${styles.settings__name__form__label}`}
                            >Last name <span className='color__red'>*</span></label>
                            <input
                                id='last-name'
                                type='text'
                                name='lastName'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className={firstNameError && 'form__input__error'}
                            />
                            {firstNameError && <MdErrorOutline className='form__error_icon' />}
                            {lastNameError && <p className='form__error__message'>{lastNameError}</p>}
                        </div>

                    </form>
                    : (user?.firstName && user?.lastName)
                        ? <p>{user.firstName} {user.lastName}</p>
                        : <p>Choose a display name</p>
                }
            </div>

            {isNameEdit
                ? <button
                    type='button'
                    onClick={handleSave}
                    className={`btn ${styles.settings__save__btn}`}
                >
                    Save
                </button>
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

export default UserNameForm;