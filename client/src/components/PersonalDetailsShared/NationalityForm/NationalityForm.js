import { useState } from 'react';
import { useAuthContext } from '../../../context/auth/authContext';
import styles from './NationalityForm.module.scss';
import { MdErrorOutline } from 'react-icons/md';

function NationalityForm() {
    const { user, updateUser } = useAuthContext();

    const [isDisplayNameEdit, setIsDisplayNameEdit] = useState(false);

    const [nationality, setNationality] = useState('');
    const [nationalityError, setNationalityError] = useState('');

    const handleSave = () => {

        if (nationality.trim() === '') {
            setNationalityError('Please add your nationality');
            return;
        }


        const userData = {
            id: user.id,
            nationality,
        };

        updateUser(userData);
        setNationality('');
        setIsDisplayNameEdit(false);
    };

    const handleCancel = () => {
        setNationalityError('');
        setIsDisplayNameEdit((prevState) => !prevState);
    };

    return (
        <div className={styles.settings}>
            <div className={styles.settings__text}>
                <p>Nationality</p>
                {isDisplayNameEdit
                    ? <form
                        onSubmit={(e) => e.preventDefault()}
                        className={styles.settings__name__form}
                    >
                        <div className='form__row'>
                            <label
                                htmlFor='nationality'
                                className={`form__label ${styles.settings__name__form__label}`}
                            >Nationality <span className='color__red'>*</span></label>
                            <input
                                id='nationality'
                                type='text'
                                name='nationality'
                                value={nationality}
                                onChange={(e) => setNationality(e.target.value)}
                                className={nationalityError && 'form__input__error'}
                            />
                            {nationalityError && <MdErrorOutline className='form__error_icon' />}
                            {nationalityError && <p className='form__error__message'>{nationalityError}</p>}
                        </div>

                    </form>
                    : user?.nationality
                        ? <p>{user.nationality}</p>
                        : <p>Add your nationality</p>
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

export default NationalityForm;