import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-util";

function PostDetailPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}
//[slug].js로 주소가 동적이기 때문에 getStaticPaths로 어떤 페이지를 미리 만들지 알려줘야함
export function getStaticPaths() {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })), //미리 만들어둘 페이지 주소
    //미리만들어둔 페이지가 없을 경우 행동방안
    fallback: false,
    // true : data will be prepared and fetched on demand when we visit the page
    // blocking : wait until the page has been generated
  };
}

export default PostDetailPage;
