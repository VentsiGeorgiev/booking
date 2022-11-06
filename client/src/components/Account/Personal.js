import styles from './Account.module.scss';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../context/auth/authContext';

function Personal() {

    const { updateUser, user, isSuccess } = useAuthContext();


    const [userImage, setUserImage] = useState('');

    const handlePhoto = (e) => {
        setUserImage(e.target.files[0]);
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        const id = user.id;

        formData.append('id', id);
        formData.append('userImage', userImage);

        updateUser(formData);

        setUserImage('');

    };

    return (
        <section>
            <div className={styles.header}>
                <div>
                    <h2>Personal details</h2>
                    <p>Update your information and find out how it's used.</p>

                    {user.userImage && user?.userImage
                        ? <img src={`/uploads/${user?.userImage}`} alt=".." width={50} height={50} />
                        : <img src='/uploads/avatar.png' alt=".." width={50} height={50} />
                    }

                    {/* {userImg ? <img src={`/uploads/${userImg}`} alt="..." /> : <img src='/uploads/avatar' alt="..." />} */}
                </div>
                <div>
                    <form onSubmit={handleSubmit} encType='multipart/form-data'>
                        <input
                            type='file'
                            name='userImage'
                            accept='.png, .jpg, .jpeg'
                            onChange={handlePhoto}
                        />
                        <button>Upload</button>
                    </form>
                </div>
            </div>

        </section>
    );
}

export default Personal;