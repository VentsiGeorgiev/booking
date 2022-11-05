import { useEffect, useState } from 'react';
import { AiFillFacebook, AiFillGoogleSquare } from 'react-icons/ai';
import { MdMobileScreenShare } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/auth/authContext';
import { Spinner } from '../../components';
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Register() {

    const { registerUser, isSuccess, isLoading, isError, error: errorMessage } = useAuthContext();
    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {

        if (isSuccess) {
            navigate('/');
        }

    }, [isSuccess, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '' || repass.trim() === '') {
            setError('All fields are required');
            return;
        }
        if (password.trim() !== repass.trim()) {
            setError('Passwords don\'t match');
            return;
        }

        if (!email.match(EMAIL_PATTERN)) {
            setError('Invalid email');
            return;
        }


        registerUser({ email, password, repass });

    };

    if (isLoading) {
        return <Spinner />;
    }


    return (
        <>
            <div className='header-sign'>
                <div className='container'>
                    <Link to='/'>
                        <h2>Booking.com</h2>
                    </Link>
                </div>
            </div>
            {isError && <p className='error'>{errorMessage}</p>}
            <section className='container form-wrapper'>

                <form onSubmit={handleSubmit} className='form'>
                    <h2 className='form__title'>Sign in or create an account</h2>
                    {error && <p className='error'>{error}</p>}
                    <div className='form__row'>
                        <label
                            htmlFor="email"
                            className='form__label'
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            name='email'
                            className='form__input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='form__row'>
                        <label
                            htmlFor="password"
                            className='form__label'
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            className='form__input'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='form__row'>
                        <label
                            htmlFor="repass"
                            className='form__label'
                        >
                            Repeat Password
                        </label>
                        <input
                            type="password"
                            name="repass"
                            className='form__input'
                            value={repass}
                            onChange={(e) => setRepass(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-primary'>Continue with email</button>
                </form>
                <div className='social'>
                    <p>or use one of this options</p>
                    <div className='social__icons'>
                        <div className='social__icon'>
                            <AiFillFacebook className='icon fb-icon' />
                        </div>
                        <div className='social__icon'>
                            <AiFillGoogleSquare className='icon google-icon' />
                        </div>
                        <div className='social__icon'>
                            <MdMobileScreenShare className='icon phone-icon' />
                        </div>
                    </div>
                    <h4 className='social__subtitle'>More ways to sign in</h4>
                    <p className='small-text'>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</p>
                    <p className='small-text'>All rights reserved. Copyright (2006 - 2022) - Booking.com™</p>


                </div>
            </section>
        </>
    );
}

export default Register;