import { useState } from 'react';
import { useAuthContext } from '../../../context/auth/authContext';
import styles from './PhoneNumberForm.module.scss';
import { MdErrorOutline } from 'react-icons/md';

function PhoneNumberForm() {
    const { user, updateUser } = useAuthContext();

    const [isEditing, setIsEditing] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');

    const handleSave = () => {

        const regex = new RegExp(/^\d+$/);

        if (phoneNumber.trim() === '') {
            setPhoneNumberError('Please enter your phone number');
            setPhoneNumber('');
            return;
        } else if (!regex.test(phoneNumber)) {
            setPhoneNumberError('This phone number looks incorrect.');
            setPhoneNumber('');
            return;
        }

        const userData = {
            id: user.id,
            phoneNumber,
        };

        updateUser(userData);
        setPhoneNumber('');
        setPhoneNumberError('');
        setIsEditing(false);
    };

    const handleCancel = () => {
        setPhoneNumber('');
        setPhoneNumberError('');
        setIsEditing((prevState) => !prevState);
    };

    return (
        <div className={styles.settings}>
            <div className={styles.settings__text}>
                <p>Phone number</p>
                {isEditing
                    ? <form
                        onSubmit={(e) => e.preventDefault()}
                        className={styles.settings__name__form}
                    >
                        <div className='form__row'>
                            <label
                                htmlFor='phone-number'
                                className={`form__label ${styles.settings__name__form__label}`}
                            >Phone number</label>
                            <input
                                id='phone-number'
                                type='tel'
                                name='phoneNumber'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className={phoneNumberError && 'form__input__error'}
                            />
                            {phoneNumberError && <MdErrorOutline className='form__error_icon' />}
                            {phoneNumberError && <p className='form__error__message'>{phoneNumberError}</p>}
                        </div>

                    </form>
                    : user?.phoneNumber
                        ? <p>{user.phoneNumber}</p>
                        : <p>Add your phone number</p>
                }
            </div>

            {isEditing
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
                    onClick={() => setIsEditing((prevState) => !prevState)}
                >
                    Edit
                </button>
            }

        </div>
    );
}

export default PhoneNumberForm;