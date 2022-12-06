import React from "react";
import Header from "./components/Header";
import Post1 from "./components/Post1";
import Post2 from "./components/Post2";
import About from "./components/About";
import PopularPosts from "./components/PopularPosts";
import Tags from "./components/Tags";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth: '1400px'}}>
                <Header/>
                <div className="w3-row">
                    <div className="w3-col l8 s12">
                        <Post1/>
                        <Post2/>
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

export default App;