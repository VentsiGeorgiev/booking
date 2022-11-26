import { useState } from 'react';
import { useAuthContext } from '../../../context/auth/authContext';
import styles from './GenderForm.module.scss';
import { MdErrorOutline } from 'react-icons/md';

const months = ['I am a man', 'I am a woman', 'I am a non-binary', 'I prefer not to say'];

function GenderForm() {
    const { user, updateUser } = useAuthContext();

    const [isNameEdit, setIsNameEdit] = useState(false);

    const [gender, setGender] = useState('');
    const [genderError, setGenderError] = useState('');

    const handleSave = () => {

        if (gender.trim() === '') {
            setGenderError('Please select your gender');
            return;
        }

        const userData = {
            id: user.id,
            gender,
        };

        updateUser(userData);

        setGender('');
        setGenderError('');
        setIsNameEdit(false);
    };

    const handleCancel = () => {
        setGender('');
        setGenderError('');
        setIsNameEdit((prevState) => !prevState);
    };

    return (
        <div className={styles.settings}>
            <div className={styles.settings__text}>
                <p>Gender</p>
                {isNameEdit
                    ? <form
                        onSubmit={(e) => e.preventDefault()}
                        className={styles.settings__name__form}
                    >
                        <div className='form__row'>
                            <label
                                htmlFor='month'
                                className={`form__label ${styles.settings__name__form__label}`}
                            >Gender <span className='color__red'>*</span></label>
                            <select
                                id='month'
                                type='text'
                                name='lastName'
                                onChange={(e) => setGender(e.target.value)}
                                className={genderError && 'form__input__error'}
                            >
                                <option value=''>Select your gender</option>
                                {months.map((month) => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </select >
                            {genderError && <p className='form__error__message'>{genderError}</p>}
                        </div>
                    </form>
                    : user?.gender
                        ? <p>{user.gender}</p>
                        : <p>Select your gender</p>
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

export default GenderForm;