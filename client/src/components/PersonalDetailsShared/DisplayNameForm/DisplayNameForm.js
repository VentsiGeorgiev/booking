import { useState } from 'react';
import { useAuthContext } from '../../../context/auth/authContext';
import styles from './DisplayNameForm.module.scss';

function DisplayNameForm() {
    const { user, updateUser } = useAuthContext();

    const [isDisplayNameEdit, setIsDisplayNameEdit] = useState(false);

    const [displayName, setDisplayName] = useState('');

    const handleSave = () => {

        const userData = {
            id: user._id,
            displayName,
        };

        updateUser(userData);
        setDisplayName('');
        setIsDisplayNameEdit(false);
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
                            >Display name</label>
                            <input
                                id='display-name'
                                type='text'
                                name='displayName'
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                            />
                        </div>

                    </form>
                    : user?.displayName
                        ? <p>{user.displayName}</p>
                        : <p>Choose a display name</p>
                }
            </div>

            {isDisplayNameEdit
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
                    onClick={() => setIsDisplayNameEdit((prevState) => !prevState)}
                >
                    Edit
                </button>
            }

        </div>
    );
}

export default DisplayNameForm;