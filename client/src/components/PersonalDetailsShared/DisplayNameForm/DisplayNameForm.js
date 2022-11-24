import { useState } from 'react';
import { useAuthContext } from '../../../context/auth/authContext';
import styles from './DisplayNameForm.module.scss';
import { MdErrorOutline } from 'react-icons/md';

function DisplayNameForm() {
    const { user, updateUser } = useAuthContext();

    const [isDisplayNameEdit, setIsDisplayNameEdit] = useState(false);

    const [displayName, setDisplayName] = useState('');
    const [displayNameError, setDisplayNameError] = useState('');

    const handleSave = () => {

        if (displayName.trim() === '') {
            setDisplayNameError('Please choose a display name');
            return;
        }

        const userData = {
            id: user.id,
            displayName,
        };

        updateUser(userData);
        setDisplayName('');
        setIsDisplayNameEdit(false);
    };

    const handleCancel = () => {
        setDisplayNameError('');
        setIsDisplayNameEdit((prevState) => !prevState);
    };

    return (
        <div className={styles.settings}>
            <div className={styles.settings__text}>
                <p>Display name</p>
                {isDisplayNameEdit
                    ? <form
                        onSubmit={(e) => e.preventDefault()}
                        className={styles.settings__name__form}
                    >
                        <div className='form__row'>
                            <label
                                htmlFor='display-name'
                                className={`form__label ${styles.settings__name__form__label}`}
                            >Display name <span className='color__red'>*</span></label>
                            <input
                                id='display-name'
                                type='text'
                                name='displayName'
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                className={displayNameError && 'form__input__error'}
                            />
                            {displayNameError && <MdErrorOutline className='form__error_icon' />}
                            {displayNameError && <p className='form__error__message'>{displayNameError}</p>}
                        </div>

                    </form>
                    : user?.displayName
                        ? <p>{user.displayName}</p>
                        : <p>Choose a display name</p>
                }
            </div>

            {isDisplayNameEdit
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
                    onClick={() => setIsDisplayNameEdit((prevState) => !prevState)}
                >
                    Edit
                </button>
            }

        </div>
    );
}

export default DisplayNameForm;