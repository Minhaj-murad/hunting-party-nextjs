import Post from "../../Components/Post/Post";


const Posts = ({posts}) => {
    console.log(posts);
    return (
        <div>
            <h1 className="text-2xl">The number of posts { posts?.length}</h1>
            {
                posts?.map(post =><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;

export const getStaticProps = async () => {
    const res = await fetch("https://to-do-list-server-98tvv8qz2-mehedi-noob.vercel.app/listdata");
    const data = await res.json();
    console.log(data);

    return {
        props: {
            posts: data
        }
    }
}