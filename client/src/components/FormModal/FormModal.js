import styles from './FormModal.module.scss';

function FormModal({ adults, children, rooms, toggleModal, handleOptions }) {
    return (
        <div className={styles.form__modal}>
            <div className={styles.form__modal__context}>
                <div className={styles.form__modal__row}>
                    <p>Adults</p>
                    <div className={styles.form__modal__buttons}>
                        <button
                            className='btn btn-secondary'
                            onClick={() => handleOptions('adults', 'decrement')}
                        >
                            -
                        </button>
                        <p>{adults}</p>
                        <button
                            onClick={() => handleOptions('adults', 'increment')}
                            className='btn btn-secondary'
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className={styles.form__modal__row}>
                    <p>children</p>
                    <div className={styles.form__modal__buttons}>
                        <button
                            onClick={() => handleOptions('children', 'decrement')}
                            className='btn btn-secondary'
                        >
                            -
                        </button>
                        <p>{children}</p>
                        <button
                            onClick={() => handleOptions('children', 'increment')}
                            className='btn btn-secondary'
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className={styles.form__modal__row}>
                    <p>rooms</p>
                    <div className={styles.form__modal__buttons}>
                        <button
                            onClick={() => handleOptions('rooms', 'decrement')}
                            className='btn btn-secondary'
                        >
                            -
                        </button>
                        <p>{rooms}</p>
                        <button
                            onClick={() => handleOptions('rooms', 'increment')}
                            className='btn btn-secondary'
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className={styles.button_wrapper}>

                    <button
                        onClick={toggleModal}
                        type='button'
                        className={`btn ${styles.form__button}`}
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FormModal;