import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Home = () => {
    const [listOfPosts, setListOfPosts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            // console.log(response.data);
            setListOfPosts(response.data);
        })
    }, []);
    return (
        <div className="home">
            {
                listOfPosts.map((value,index) =>{
                    return <div className="post" key={index} onClick={() =>{
                        navigate(`/post/${value.id}`);
                    }}>
                        <div className="title">
                            Title: {value.title + "  "}
                        </div>
                        <div className="body">
                            PostText: {value.postText + "  "}
                        </div>
                        <div className="footer">
                            UserName: {value.userName}
                        </div>
                    </div>
                })
            }
        </div>
    )
};
export default Home;
