import { useState } from 'react';
import { useAuthContext } from '../../../context/auth/authContext';
import styles from './PhoneNumberForm.module.scss';

function PhoneNumberForm() {
    const { user, updateUser } = useAuthContext();

    const [isEditing, setIsEditing] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSave = () => {

        const userData = {
            id: user._id,
            phoneNumber,
        };

        updateUser(userData);
        setPhoneNumber('');
        setIsEditing(false);
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
                            />
                        </div>

                    </form>
                    : user?.phoneNumber
                        ? <p>{user.phoneNumber}</p>
                        : <p>Add your phone number</p>
                }
            </div>

            {isEditing
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
                    onClick={() => setIsEditing((prevState) => !prevState)}
                >
                    Edit
                </button>
            }

        </div>
    );
}

export default PhoneNumberForm;