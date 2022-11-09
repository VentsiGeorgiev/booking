import { useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { useAuthContext } from '../../../context/auth/authContext';
import styles from './UserImageForm.module.scss';

function UserImageForm() {

    const { uploadImage, user, isSuccess, updateUser } = useAuthContext();

    const [userImage, setUserImage] = useState('');

    const handlePhoto = (e) => {
        setUserImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        const id = user._id;
        if (!userImage) {
            return;
        }

        formData.append('id', id);
        formData.append('userImage', userImage);

        uploadImage(formData);

        setUserImage('');

    };

    return (
        <div className={styles.header}>
            <div>
                <h2>Personal details</h2>
                <p>Update your information and find out how it's used.</p>
            </div>

            <div className={styles.avatar}>

                {user.userImage && user?.userImage
                    ? <img src={`/uploads/${user?.userImage}`} alt='user' className={styles.avatar__image} />
                    : <img src='/uploads/userImage.png' alt='user' className={styles.avatar__image} />
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

    );
}

export default UserImageForm;