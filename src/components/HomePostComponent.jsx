import React, { useEffect, useState } from 'react';
import "../CSS/HomePostComponent.css";
import { FaComment, FaHeart, FaShare, FaPaperPlane } from 'react-icons/fa';
import postImg from "../Images/Hero Img.png";
import { FaPhotoFilm, FaX } from 'react-icons/fa6';
import Swal from "sweetalert2";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import logo from "../Images/logo.png";

const postsData = [
  {
    "postId": "post_1",
    "post": [logo, postImg],
    "likes": [
      { "userId": "user_1", "username": "Alice" },
      { "userId": "user_2", "username": "Bob" }
    ],
    "comments": [
      { "userId": "user_3", "username": "Charlie", "comment": "Great post!" },
      { "userId": "user_4", "username": "Dana", "comment": "Very informative." }
    ],
    "text": "This is the first post with some interesting content."
  },
  {
    "postId": "post_2",
    "post": [postImg, "../Images/coursePageImg.jpeg"],
    "likes": [
      { "userId": "user_5", "username": "Eve" },
      { "userId": "user_6", "username": "Frank" },
      { "userId": "user_7", "username": "Grace" }
    ],
    "comments": [
      { "userId": "user_8", "username": "Hank", "comment": "Love this!" },
      { "userId": "user_9", "username": "Ivy", "comment": "Thanks for sharing." }
    ],
    "text": "Here is the second post, sharing some different information."
  },
  {
    "postId": "post_3",
    "post": [logo, "../Images/coursePageImg.jpeg"],
    "likes": [
      { "userId": "user_10", "username": "Jack" },
      { "userId": "user_11", "username": "Kara" },
      { "userId": "user_12", "username": "Leo" },
      { "userId": "user_13", "username": "Mia" }
    ],
    "comments": [
      { "userId": "user_14", "username": "Nina", "comment": "Interesting insights." },
      { "userId": "user_15", "username": "Owen", "comment": "Good read!" }
    ],
    "text": "The third post includes more insights and updates."
  },
  {
    "postId": "post_4",
    "post": [postImg, "../Images/coursePageImg.jpeg"],
    "likes": [
      { "userId": "user_16", "username": "Paul" },
      { "userId": "user_17", "username": "Quinn" },
      { "userId": "user_18", "username": "Rita" },
      { "userId": "user_19", "username": "Steve" },
      { "userId": "user_20", "username": "Tina" }
    ],
    "comments": [
      { "userId": "user_21", "username": "Uma", "comment": "Great details." },
      { "userId": "user_22", "username": "Vince", "comment": "Very well explained." }
    ],
    "text": "In this fourth post, there are additional details and stories."
  },
  {
    "postId": "post_5",
    "post": ["../Images/coursePageImg.jpeg", "../Images/coursePageImg.jpeg"],
    "likes": [
      { "userId": "user_23", "username": "Wendy" },
      { "userId": "user_24", "username": "Xander" },
      { "userId": "user_25", "username": "Yara" },
      { "userId": "user_26", "username": "Zane" }
    ],
    "comments": [
      { "userId": "user_27", "username": "Amy", "comment": "Excellent post." },
      { "userId": "user_28", "username": "Bill", "comment": "Really helpful, thanks!" }
    ],
    "text": "The fifth post wraps up with some final thoughts and feedback."
  }
];

const HomePostComponent = () => {
  const [like, setLike] = useState(false);
  const [activeCommentBox, setActiveCommentBox] = useState(null);
  const [expandedPosts, setExpandedPosts] = useState({});
  const [posts, setPosts] = useState(postsData);

  const handleLike = async () => {
    Swal.fire({ icon: "success", text: "You have liked this post", timer: 2000, showConfirmButton: false });
  };

  const handleUnlike = async () => {
    Swal.fire({ icon: "success", text: "You have Un-liked this post", timer: 2000, showConfirmButton: false });
  };

  useEffect(() => {
    if (like) {
      handleLike();
    } else if (!like) {
      handleUnlike();
    }
  }, [like]);

  const openCommentBox = (id) => {
    setActiveCommentBox(id);
  };

  const handleClickAway = () => {
    setActiveCommentBox(null);
  };

  const toggleTextLength = (id) => {
    setExpandedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePostComment = (postId, comment) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.postId === postId) {
          return {
            ...post,
            comments: [...post.comments, { userId: "current_user", username: "Current User", comment }]
          };
        }
        return post;
      });
    });
  };

  return (
    <div className='HomePostComponentWrap'>
      {posts.map((A) => (
        <div className='HomePostComponent' key={A.postId}>
          <div className='HomePostComponentProfileWrap'>
            <img src={postImg} alt="poster" />
            <p style={{ fontSize: "small" }}>James</p>
            <p style={{ fontSize: "small" }}>. 2 days ago</p>
          </div>
          <div className='HomePostComponentMedia'>
            <img src={A.post[0]} alt="media" />
          </div>
          <div className='HomePostComponentLikeShare'>
            <FaHeart style={{ cursor: "pointer", color: like ? "green" : "gray" }} onClick={() => setLike(!like)} />
            <FaComment style={{ cursor: "pointer", color: "gray" }} onClick={() => openCommentBox(A.postId)} />
            <FaShare style={{ cursor: "pointer", color: "gray" }} />
          </div>
          <div className='PostBody'>
            <p style={{ color: "gray" }}>{A.likes.length} Likes</p>
            <p style={{ color: "gray" }}>{A.comments.length} comments</p>

            {!expandedPosts[A.postId] ?
              <p>{A.text.slice(0, 20)} ... <span style={{ color: "blue", cursor: "pointer" }} onClick={() => toggleTextLength(A.postId)}>view more</span></p> :
              <p>{A.text}<span style={{ color: "blue", cursor: "pointer" }} onClick={() => toggleTextLength(A.postId)}> view less</span></p>
            }

            {activeCommentBox === A.postId &&
              <ClickAwayListener onClickAway={handleClickAway}>
                <div className='CommentsWrap'>
                  <div className='Comments' style={{ position: "relative" }}>
                    <FaX style={{ cursor: "pointer", position: "absolute", top: "0", right: "0" }} onClick={handleClickAway} />
                    {A.comments.map(comment => (
                      <div className='Comment' key={comment.userId}>
                        <p style={{ fontSize: "small", fontWeight: "bold" }}>{comment.username}</p>
                        <p style={{ fontSize: "small" }}>{comment.comment}</p>
                      </div>
                    ))}
                    <div className='CommentInputWrap'>
                      <input type="text" placeholder='comment as a user' id={`input-${A.postId}`} />
                      <FaPhotoFilm style={{ cursor: "pointer" }} />
                      <FaPaperPlane style={{ cursor: "pointer" }} onClick={() => handlePostComment(A.postId, document.getElementById(`input-${A.postId}`).value)} />
                    </div>
                  </div>
                </div>
              </ClickAwayListener>
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePostComponent;
