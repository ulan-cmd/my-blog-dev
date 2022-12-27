import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import PopularPosts from "./components/PopularPosts";
import Tags from "./components/Tags";
import Footer from "./components/Footer";
import Post from "./components/Post";
import "./styles/index.css";
import posts from "./data/posts";
import Greeting from "./components/Greeting";
import LoginControl from "./components/LoginControl";
import MailBox from "./components/MailBox";
import WarningPage from "./components/WarningPage";
import UserProfile from "./components/UserProfile";

const MyBlogContent = () => {
    let postItems;

    if (posts.length > 0){
        postItems = posts.map((item,index) => {
            return (
                <Post
                    key={index}
                    img={item.img_url}
                    title={item.title}
                    title_desc={item.title_desc}
                    created_date={item.created_date}
                    desc={item.desc}
                    count_comments={item.count_comments}
                />
            )
        })
    } else{
        postItems = <h2>Нет постов</h2>;
    }


    return (
        <>
            <div className="w3-content" style={{maxWidth: '1400px'}}>
                <Header/>
                <div className="w3-row">
                    <div className="w3-col l8 s12">
                        {postItems}
                    </div>
                    <div className="w3-col l4">
                        <About/>
                        <PopularPosts/>
                        <Tags/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

const App = () => <UserProfile/>

export default App;