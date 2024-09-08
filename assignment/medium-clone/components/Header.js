import Image from 'next/image';
import Logo from '../images/logo_med.png';

const styles = {
    wrapper: 'flex justify-center gap-10 p-5 bg-[#FAA49A]',
    //border-y border-black to add border
    content: 'max-w-7xl flex-1 flex justify-between gap-10',
    logoContainer: 'flex items-center flex-start',
    logo: 'cursor-pointer object-contain',
    bannerNav: 'flex cursor-pointer items-center gap-4', 
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full cursor-pointer hover:bg-gray-800',
};

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Image
                        className={styles.logo}
                        src={Logo}
                        alt="Logo"
                        height={40}
                        width={200}
                    />
                </div>

                <div className={styles.bannerNav}>
                    <div>Our Story</div>
                    <div>Membership</div>
                    <div>Sign in</div>
                    <div className={styles.accentedButton}>Get Started</div>
                </div>
            </div>
        </div>
    );
};

export default Header;


