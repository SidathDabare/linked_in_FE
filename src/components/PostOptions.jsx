import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faLink,
  faEyeSlash,
  faCircleXmark,
  faFlag,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import {
  selectPostAction,
  deletePostActionWithThunk,
} from "../redux/actions/index";
import { Link } from "react-router-dom";
import "../style/PostList.css";
import { useDispatch } from "react-redux";
import useComponentVisible from "../hooks/ClickOutHook";

const PostOptions = ({ id, updatePost, setShowAlert, scrollTo }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="post-top-edit-options"
        onClick={() => {
          setIsComponentVisible(true);
        }}
      >
        <FontAwesomeIcon
          style={{ height: "25px", color: "rgb(107, 107, 107)" }}
          icon={faEllipsis}
        />
        {isComponentVisible && (
          <div className="post-options">
            <div ref={ref} className="post-options-icons">
              <div className="post-options-incon-and-text">
                <FontAwesomeIcon
                  style={{ marginRight: "5px", marginLeft: "5px" }}
                  icon={faBookmark}
                />
                <p>Save</p>
              </div>
              <div
                className="post-options-incon-and-text"
                onClick={() => {
                  updatePost();
                  dispatch(selectPostAction(id));
                }}
              >
                <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faPen} />
                <p>Edit post</p>
              </div>
              <div
                className="post-options-incon-and-text"
                onClick={() => {
                  setShowAlert();
                  dispatch(deletePostActionWithThunk(id));
                  
                }}
              >
                <FontAwesomeIcon
                  style={{ marginRight: "7.5px" }}
                  icon={faTrash}
                />
                <p>Delete post</p>
              </div>
              <div className="post-options-incon-and-text">
                <FontAwesomeIcon icon={faLink} />
                <p>Copy link to post</p>
              </div>
              <div className="post-options-incon-and-text">
                <FontAwesomeIcon icon={faEyeSlash} />
                <p>I don't want to see this</p>
              </div>
              <div className="post-options-incon-and-text">
                <FontAwesomeIcon
                  style={{ marginRight: "5px" }}
                  icon={faCircleXmark}
                />
                <p>Unfollow</p>
              </div>
              <div className="post-options-incon-and-text">
                <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faFlag} />
                <p>Report this post</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PostOptions;
