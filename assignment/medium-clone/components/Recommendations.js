import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdMarkEmailUnread } from 'react-icons/md';
import eg from '../images/banner.webp';

const styles = {
  wrapper: "h-screen min-w-[10rem] max-w-[30rem] flex flex-col justify-between p-[2rem]",
  accentedButton: "self-end text-sm bg-black text-white my-[2rem] rounded-full py-[.6rem] px-[1rem] flex items-center justify-center",
  searchBar: "flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full",
  searchInput: "border-none outline-none bg-none w-full",
  authorContainer: "my-[2rem]",
  authorProfileImage: "h-[3rem] w-[3rem] rounded-full overflow-hidden",
  authorName: "font-semibold mb-[.2rem] mt-[1rem]",
  authorFollowing: "text-[#787878]",
  authorActions: "flex gap-[.6rem] my-[1rem]",
  actionButton: "bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm",
  recommendationContainer: "mt-[2rem]",
  title: "text-xl font-semibold mb-[1rem]",
  articlesContainer: "flex flex-col gap-[1rem]",
  recommendationAuthorContainer: "flex items-center gap-[.6rem]",
  recommendationAuthorProfileImageContainer: "rounded-full overflow-hidden h-[2.4rem] w-[2.4rem]",
  recommendationAuthorName: "text-sm",
  recommendationTitle: 'font-bold',
  recommendationThumbnailContainer: 'flex flex-1 items-center justify-center h-[4rem] w-[4rem]',
  recommendationThumbnail: 'object-cover',
  articleContentWrapper: 'flex items-center justify-between cursor-pointer my-[1rem]',
  articleContent: 'flex-[4]',
};

const Recommendations = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get unlimited access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          placeholder='Search'
          type='text'
        />
      </div>
      <div className={styles.authorContainer}>
        <img className={styles.authorProfileImage} src="https://i.pinimg.com/474x/b2/3b/76/b23b7608195bfd6dbe5489bc0744ad63.jpg" alt="Author" />
        <div className={styles.authorName}>Hiya Kashyap</div>
        <div className={styles.authorFollowing}>1M followers</div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}><MdMarkEmailUnread /></button>
        </div>
      </div>
      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More from Medium</div>
        <div className={styles.articlesContainer}>
          {recommendedPosts.map((post, index) => (
            <div key={index} className={styles.articleContentWrapper}>
              <div className={styles.articleContent}>
                <div className={styles.recommendationAuthorContainer}>
                  <div className={styles.recommendationAuthorProfileImageContainer}>
                    <img className={styles.authorProfileImage} src={post.author.image} alt={post.author.name} />
                  </div>
                  <div className={styles.recommendationAuthorName}>{post.author.name}</div>
                </div>
                <div className={styles.recommendationTitle}>
                  {post.title}
                </div>
              </div>
              <div className={styles.recommendationThumbnailContainer}>
                <Image className={styles.recommendationThumbnail} src={post.image} height={100} width={100} alt="Post Thumbnail" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;

const recommendedPosts = [
  {
    title: 'What can you do with Replit?',
    image: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    author: {
      name: 'Clever Programmer',
      image: 'https://i.pinimg.com/474x/b6/17/dd/b617dd94a14e9a02315681dae2a89cd1.jpg'
    }
  },
  {
    title: 'How to Build a Personal Portfolio?',
    image: 'https://i.pinimg.com/474x/b2/2e/6b/b22e6b53480963dcdebfb27a93bd23e3.jpg',
    author: {
      name: 'John Doe',
      image: 'https://i.pinimg.com/474x/b2/2e/6b/b22e6b53480963dcdebfb27a93bd23e3.jpg'
    }
  },
  {
    title: 'Top 10 Tips for Learning JavaScript',
    image: 'https://i.pinimg.com/474x/25/e3/92/25e3929901ce9902fbc6e16de05a43bd.jpg',
    author: {
      name: 'Jane Smith',
      image: 'https://i.pinimg.com/474x/25/e3/92/25e3929901ce9902fbc6e16de05a43bd.jpg'
    }
  }
];