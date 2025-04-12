import { useContext, useRef } from "react";
import { PostList } from "../store/postlist-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdEle = useRef();
  const postTitleEle = useRef();
  const postBodyEle = useRef();
  const reactionsEle = useRef();
  const tagsEle = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const userId = userIdEle.current.value;
    const postTitle = postTitleEle.current.value;
    const postBody = postBodyEle.current.value;
    const reactions = reactionsEle.current.value;
    const tags = tagsEle.current.value.split(" ");

    userIdEle.current.value = "";
    postTitleEle.current.value = "";
    postBodyEle.current.value = "";
    reactionsEle.current.value = "";
    tagsEle.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="cp" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          ref={userIdEle}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleEle}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyEle}
          rows="4"
          className="form-control"
          id="title"
          placeholder="Tell us more about it!"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionsEle}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your Hashtags here
        </label>
        <input
          type="text"
          ref={tagsEle}
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
