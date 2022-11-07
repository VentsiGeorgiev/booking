import { useState } from 'react';
import { useAuthContext } from '../../context/auth/authContext';
import styles from './Account.module.scss';
import { AiFillCamera } from 'react-icons/ai';

function Personal() {

    const { updateUser, user, isSuccess } = useAuthContext();


    const [userImage, setUserImage] = useState('');

    const [isNameEdit, setIsNameEdit] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handlePhoto = (e) => {
        setUserImage(e.target.files[0]);
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        const id = user.id;
        if (!userImage) {
            return;
        }

        formData.append('id', id);
        formData.append('userImage', userImage);

        updateUser(formData);

        setUserImage('');

    };

    const handleSave = () => {


        setIsNameEdit(false);
    };

    return (
        <section>
            <div className={styles.header}>
                <div>
                    <h2>Personal details</h2>
                    <p>Update your information and find out how it's used.</p>
                </div>

                <div className={styles.avatar}>

                    {user.userImage && user?.userImage
                        ? <img src={`/uploads/${user?.userImage}`} alt="user" className={styles.avatar__image} />
                        : <img src='/uploads/userImage.png' alt="user" className={styles.avatar__image} />
                    }

                    <form onSubmit={handleSubmit} encType='multipart/form-data'>
                        <label
                            htmlFor='image-upload'
                            className={styles.avatar__label}
                        >
                            <AiFillCamera />

                        </label>
                        <input
                            id='image-upload'
                            type='file'
                            name='userImage'
                            accept='.png, .jpg, .jpeg'
                            onChange={handlePhoto}
                            className={styles.avatar__input}
                        />
                        <button
                            className={`btn ${styles.avatar__button}`}
                            disabled={!userImage}
                        >Save</button>
                    </form>



                </div>
            </div>

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
                        : <p>Choose a display name</p>
                    }
                </div>

                {isNameEdit
                    ? <button
                        onClick={handleSave}
                        className={`btn ${styles.settings__save__btn}`}
                    >
                        Save
                    </button>
                    : <button
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

export default Personal;