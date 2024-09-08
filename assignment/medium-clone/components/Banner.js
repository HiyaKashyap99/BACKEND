import Image from 'next/image';
import ban from '../images/banner.webp';

const styles = {
    banner: 'flex flex-col md:flex-row items-center justify-between p-10 bg-[#D6DF7E]', 
    heading: 'max-w-xl text-[6rem] font-mediumSerifItalic ', 
    subheading: 'text-2xl mt-0', 
    accentedButton: 'bg-green-700 text-black py-2 px-4 rounded-full cursor-pointer hover:bg-green-700 mt-6',
    imageContainer: 'flex justify-end mt-6 md:mt-0', 
    image: 'max-w-full h-auto'
};

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className='space-y-5 px-10 flex-[3]'>
        <h1 className={styles.heading}>Human stories& ideas</h1>
        <h3 className={styles.subheading}>A place to read, write, and deepen your understanding</h3>
        <button className={styles.accentedButton}>Start Reading</button>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={ban}
          alt="Banner Image"
          width={500} 
          height={400} 
        />
      </div>
    </div>
  );
};

export default Banner;

