
const Post = ({post}) => {
    console.log(post);
    return (
        <div className="card mt-10 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{post?.id}</h2>
                <h2 className="card-title">{post?.data}</h2>
                
            </div>
        </div>
    );
};

export default Post;