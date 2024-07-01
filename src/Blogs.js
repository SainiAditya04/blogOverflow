import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Shimmer from "./Shimmer";
import Card from "./Card";

const Blogs = () => {
    const { posts, loading } = useContext(AppContext);

    return (
        <>
            {
                loading ? (<Shimmer />) : (
                    posts.length == 0 ? (<div>No Blog Found</div>) : (
                        <div className="w-full flex flex-col items-center justify-center">
                            {
                                posts.map(post => (
                                    <div key={post.id} className="w-[50%] flex flex-col justify-center items-start gap-1 my-4 p-5 shadow-md rounded-md">
                                        <h1 className="font-bold text-xl"> {post.title} </h1>
                                        <p> By <span className=" italic font-semibold">{post.author}</span> on <span className="font-semibold italic">{post.category}</span> </p>
                                        <p>Posted on <span className="italic">{post.date}</span> </p>
                                        <p> {post.content} </p>
                                        <div className="flex gap-2">
                                            {post.tags.map(tag => (
                                                <p className=" text-blue-600 underline cursor-pointer">{`#${tag}`}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                )
            }
        </>
    );
};

export default Blogs;