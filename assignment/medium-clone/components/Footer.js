import Image from 'next/image';
import logo from '../images/logo_med.png'; // Update with your actual logo path

const styles = {
    footer: 'bg-[#FAA49A] text-black p-6',
    container: 'max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center',
    logo: 'w-24 h-auto',
    nav: 'flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8',
    navLink: 'hover:underline',
    copyright: 'text-sm mt-4',
};

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Image
                    className={styles.logo}
                    src={logo}
                    alt="Company Logo"
                />
                <nav className={styles.nav}>
                    <a href="#about" className={styles.navLink}>About Us</a>
                    <a href="#services" className={styles.navLink}>Services</a>
                    <a href="#contact" className={styles.navLink}>Contact</a>
                    <a href="#privacy" className={styles.navLink}>Privacy Policy</a>
                </nav>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;