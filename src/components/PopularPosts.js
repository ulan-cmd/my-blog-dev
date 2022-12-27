import React from "react";
import popular_posts from "../data/popular_posts";

const PostItem = (props) => {
    return (
        <li className="w3-padding-16">
            <img src={props.img_url} alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
            <span className="w3-large">{props.title}</span><br />
            <span>{props.text}</span>
        </li>
    )
}

const PopularPosts = () => {
    const items = popular_posts.map((item,index) => {
        return (
            <PostItem
                key={index}
                img_url={item.img_url}
                title={item.title}
                text={item.text}
            />
        )
    })

    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular POSTS</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    { items }
                </ul>
            </div>
            <hr />
        </>
    )
}


export default PopularPosts;