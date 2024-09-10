import Header from '../components/Header';  
import Banner from '../components/Banner';  
import PostCard from '../components/PostCard';  

const styles = {
  container:'max-w-7xl flex-1',
  main:'flex justify-center',
  wrapper:'mx-auto',
  postsList: 'flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3',
};

export default function Home() {
  return (
    <>
    <div className='styles.wrpper'>
      <Header />   
      <Banner />  
      <div className={styles.main}>
      <div className={styles.container}>
      <div className={styles.postsList}>
        <PostCard />  
        <PostCard />
        <PostCard />
      </div>
      </div> 
      </div>
      </div>
    </>
<<<<<<< HEAD
    
    )
}
fvf
=======
  );
}
>>>>>>> d1a4b56 (changes)
