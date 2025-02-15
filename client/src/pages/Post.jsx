import { useEffect, useState } from 'react';
import { data, useParams } from "react-router-dom";
import axios from "axios";
const Post = () => {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    // lay du lieu tu server ve
    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
        })
        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            setComments(response.data);
        })
    }, [newComment]);

    const addComment = () => {
        axios.post("http://localhost:3001/comments", { commentBody: newComment, PostId: id },{
            headers: {
                accessToken: sessionStorage.getItem("accessToken"),
            },
        }).then((response) => {
            if(response.data.error){
             alert("You need to log in to make a comment");
            }
            else{
            const commentToAdd = { commentBody: newComment }
            setComments([...comments, commentToAdd]);
            document.getElementById('inputC').value = ""; // xoa gia tri trong input
            }
        })
    }


    return (
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
                <div className='addCommentContainer'>
                    <input id='inputC' type="text" placeholder='Comment' autoComplete='off' onChange={(e) => {
                        setNewComment(e.target.value);
                    }} />
                    <button onClick={addComment}>Add Comment </button>
                </div>

                <div className='listOfComments'>
                    {
                        comments.map((comments, key) => {
                            return (
                                <div className='comment' key={key}>
                                    {comments.commentBody}
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default Post;