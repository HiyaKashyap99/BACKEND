import Image from 'next/image';
import Link from 'next/link';
//import SmallLogo from '../images/logo_med'; 
import { HiOutlineHome } from 'react-icons/hi';
import { FiBell } from 'react-icons/fi';
import { BiBookmarks } from 'react-icons/bi';
import { RiArticleLine } from 'react-icons/ri';
import { BsPencilSquare } from 'react-icons/bs';
import logo from '../images/logo_med.png'
const styles = {
  logoContainer: `cursor-pointer`,
  wrapper: `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]`,
  iconsContainer:`flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]`,
  divider: `border-t border-gray-300 w-full my-4`, 
  profileImageContainer: `w-[2.4rem] h-[2.4rem] overflow-hidden flex justify-center rounded-full overflow-hodden place-items-center`,
  profileImage: `object-cover w-full h-auto`,
};
const ReadersNav = () => {
  return (
    <div className={styles.wrapper}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*psYl0y9DUzZWtHzFJLIvTw.png" alt="Logo" />
        </div>
      </Link>   
      <div className={styles.iconsContainer}>
        <HiOutlineHome />
        <FiBell />
        <BiBookmarks />
        <RiArticleLine />
        <div className={styles.divider}></div> 
        <BsPencilSquare />
      </div>
      <div className={styles.profileImageContainer}>
        <img className='profileImage' src="https://i.pinimg.com/474x/b2/3b/76/b23b7608195bfd6dbe5489bc0744ad63.jpg"></img>
      </div>
    </div>
  );
};

export default ReadersNav;





