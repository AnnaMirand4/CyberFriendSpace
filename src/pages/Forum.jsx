import { useState } from "react"
import { PaperPlaneTilt, Trash } from 'phosphor-react'
import style from '../styles/pages/forum.module.css'
import Header from "../components/Header";
import forum from '../assets/friends.svg'



const Forum = () => {

  const [posts, setPost] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [replies, setReplies] = useState({});

  const handleInputChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() !== '') {
      const post = {
        content: newPost,
        replies: [],
      };

      const updatePosts = [...posts, post];
      setPost(updatePosts);
      setNewPost('');

    }
  };

  const handleReply = (postId, reply) => {
    const updateReplies ={
      ...replies,
      [postId]: [...(replies[postId] || []), reply],
    };

    setReplies(updateReplies);

  };

  const handleDeletePost = (index) => {
    const updatePosts = [...posts];
    updatePosts.splice(index, 1);
    setPost(updatePosts)
  };

  const handleDeleteReply = (postIndex, replyIndex) => {
    const updateReplies = {...replies};
    updateReplies[postIndex].splice(replyIndex, 1);
    setReplies(updateReplies)
  };


  return (
    <>
    <Header
    title='Este é o nosso Fórum, fique à vontade!'
    img={forum}
    />

    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.formPost}>
        <input
          className={style.inputPost}
          type="text"
          placeholder="Digite sua mensagem"
          value={newPost}
          onChange={handleInputChange}
        />
        <button className={style.button} type="submit"><PaperPlaneTilt size={30} /></button>
      </form>
      <div className={style.textAreaPost}>
        {posts.map((post, postIndex) => (
          <div key={postIndex} className={style.post}>
            <div className={style.textPost}>{post.content}</div>
            <button className={style.postTrash} onClick={() => handleDeletePost(postIndex)}>
            <Trash size={20} />
            </button>
            <form className={style.formReply}
              onSubmit={(event) => {
                event.preventDefault();
                handleReply(postIndex, event.target.elements.reply.value);
                event.target.reset();
              }}
            >
              <input className={style.inputReply} type="text" name="reply" placeholder="Responder" />
              <button className={style.button} type="submit"><PaperPlaneTilt size={20} /></button>
            </form>
            <div className={style.textAreaReply}>
              {replies[postIndex] &&
                replies[postIndex].map((reply, replyIndex) => (
                  <div key={replyIndex} className={style.reply}>
                    {reply}
                    <button className={style.replyTrash} onClick={() => handleDeleteReply(postIndex, replyIndex)}>
                    <Trash size={20} />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
  
}


export default Forum