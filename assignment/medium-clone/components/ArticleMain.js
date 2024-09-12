import Image from 'next/image';
import eg from '../images/banner.webp';
import { AiFillPlayCircle } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { HiOutlineLink } from 'react-icons/hi';
import { BiBookmarks } from 'react-icons/bi';
import { FiMoreHorizontal } from 'react-icons/fi';

const styles = {
  wrapper: "flex items-center justify-center flex-[3] border-l border-r",
  content: "h-screen w-full p-[2rem]",
  postHeaderContainer: "flex justify-between items-center mt-[2.2rem] mb-[1.2rem]",
  authorContainer: "my-[2rem]",
  authorProfileImageContainer: "w-[3rem] h-[3rem] overflow-hidden flex justify-center rounded-full place-items-center",
  ProfileImage: "h-[3rem] w-[3rem] rounded-full overflow-hidden",
  column: "flex flex-col justify-center",
  postDetails: "flex gap-[.2rem] text-[#787878]",
  listenButton: "flex items-center gap-[.2rem] text-[#1A8917]",
  socials: "flex gap-[1rem] text-[#787878] cursor-pointer",
  space: "w-[.5rem]",
  bannerContainer: "h-[18rem] w-full grid center overflow-hidden mb-[2rem]",
  articleMainContainer: "flex flex-col gap-[1rem]",
  image: "object-cover ",
  title: "font-bold text-3xl",
  subtitle: "font-mediumSerifItalic text-[1.4rem] text-[#292929]",
  articleText: "font-mediumSerif text-[1.4rem] text-[#292929]",
};

const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <img className={styles.Profileimage} src="https://media.istockphoto.com/id/1352185987/photo/shot-of-a-young-woman-sitting-with-her-hands-behind-her-head-while-studying-at-home.jpg?s=612x612&w=0&k=20&c=2ZDkV4ffbIYxmAw-z4MsEx95LR0vgNbp_-rrIFPlsVo=" alt="Author Profile" />
            </div>
            <div className={styles.column}>
              <div>AUTHOR</div>
              <div className={styles.postDetails}>
                <span>June 15 • 7 min read • </span>
                <span className={styles.listenButton}>
                  <AiFillPlayCircle /> Listen
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <img className={styles.image} src='https://media.istockphoto.com/id/1172935536/photo/business-people-smile-and-raise-hands-up-feeling-happy-complete-finish-job-teamwork.jpg?s=612x612&w=0&k=20&c=yhVJi303j6QAT4m7EFLDOH7Lzr8oodGm2dBszi_UYYY=' alt="Banner" />
          </div>
          <h1 className={styles.title}>
            7 Free Tools That Will Make You More Productive In 2022
          </h1>
          <h4 className={styles.subtitle}>
            <div>Rafeh Qazi, June 15, 2022</div>
            <div>Brief: Productivity is a skill that can be learned.</div>
          </h4>
          <div className={styles.articleText}>
            I love being productive every day as it helps me sort out all my priorities
            very quickly. Being productive is a superpower we all must acquire early in
            our lives. So, for this same quest, I keep searching for some of the best
            productivity tools that will help me stay productive all day long. Here, I
            have curated some of the best productivity tools that will also make you more
            productive, so you can achieve most of the day very easily. Let's get started.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;