import styles from './Hero.module.scss';
function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.hero__titles}`}>
                <h1 className={styles.hero__title}>Find your next stay</h1>
                <h3 className={styles.hero__subtitle}>Search low prices on hotels, homes and much more...</h3>
            </div>
        </section>
    );
}

export default Hero;