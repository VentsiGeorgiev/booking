import { useState } from 'react';
import { useAuthContext } from '../../context/auth/authContext';
import styles from './PersonalDetails.module.scss';
import { UserImageForm } from '../../components/PersonalDetailsShared';

function PersonalDetails() {

    const { uploadImage, user, isSuccess, updateUser } = useAuthContext();

    const [isNameEdit, setIsNameEdit] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSave = () => {

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
        <section>
            <UserImageForm />


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
                                >First name</label>
                                <input
                                    id='first-name'
                                    type='text'
                                    name='firstName'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className='form__row'>
                                <label
                                    htmlFor='last-name'
                                    className={`form__label ${styles.settings__name__form__label}`}
                                >Last name</label>
                                <input
                                    id='last-name'
                                    type='text'
                                    name='lastName'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
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

        </section >
    );
}

export default PersonalDetails;