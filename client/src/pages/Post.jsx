import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
const Post = () =>{
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
        })
    },[id]);

    return(
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title">
                        Title: {postObject.title + "  "}
                    </div>
                    <div className="body">
                        PostText: {postObject.postText}
                    </div>
                    <div className="footer">
                        UserName: {postObject.userName}
                    </div>
                </div>
            </div>
            <div className={"rightSide"}>
                Comment Section
            </div>
        </div>
    );
}
export default Post;