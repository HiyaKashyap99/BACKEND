"use client"; 
import ReadersNav from '@/components/ReadersNav';
import Recommendations from '@/components/Recommendations';
import ArticleMain from '@/components/ArticleMain';
import { useRouter } from 'next/navigation';

const styles={
  content: ` flex `,
}
const Post = ({ params }) => {
  const router = useRouter(); 
  const { id } = params;  
  return (
    <div className={styles.content}>
      {/* <h1>Post ID: {id}</h1>
      <h1>Post page</h1> */}
      <ReadersNav />
      <ArticleMain/>
      <Recommendations/>
      {/* <button onClick={() => router.push('/')}>Go Home</button> */}
    </div>
    
  );
};

export default Post;