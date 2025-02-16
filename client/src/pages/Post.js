import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Lấy bài post theo ID
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  }, [id]);

  // Lấy danh sách comment theo ID
  useEffect(() => {
    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, [id]);

  // Hàm thêm comment mới
  const addComment = () => {
    if (newComment.trim() === "") return; // Chặn gửi comment rỗng

    axios.post("http://localhost:3001/comments", { commentBody: newComment, PostId: id },{
      headers: {
        accessToken: sessionStorage.getItem("accessToken"),
      },
    }).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
        return;
      }
      setComments([...comments, { commentBody: newComment }]);
      setNewComment(""); // Reset giá trị sau khi thêm comment
    });
  };

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title">Title: {postObject.title}</div>
          <div className="body">PostText: {postObject.postText}</div>
          <div className="footer">UserName: {postObject.username}</div>
        </div>
      </div>

      <div className="rightSide">
        <h3>Comment Section</h3>
        <div className="addCommentContainer">
          <input
            id="inputC"
            type="text"
            placeholder="Comment"
            autoComplete="off"
            value={newComment} // ✅ Liên kết state với input
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={addComment}>Add Comment</button>
        </div>

        <div className="listOfComments">
          {comments.map((comment, index) => (
            <div className="comment" key={index}>
              {comment.commentBody}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
