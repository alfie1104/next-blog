import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

//Post는 자주 바뀌지 않으므로 매 요청마다 작동하는 getServerSideProps 대신 getStaticProps를 적용
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    //revalidate: 1800, //1800초마다 신규 데이터로 파일 재생성
  };
}

export default HomePage;
