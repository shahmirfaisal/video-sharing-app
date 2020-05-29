import React, { useEffect } from "react";
import classes from "./FullVideo.module.css";
import { Player } from "video-react";
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo";
import { Description } from "../../components/Description/Description";
import { Comments } from "../../components/Comments/Comments";
import { Input } from "../../components/Input/Input";
import { Button } from "../../styled-components/Button";
import { Spinner } from "../../components/Spinner/Spinner";
import { connect } from "react-redux";
import { useInput } from "../../hooks/useInput";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import {
  getVideo,
  toggleFavouriteVideo,
  postComment,
} from "../../store/actions/actionCreators";
import { useParams, useHistory } from "react-router-dom";

const FullVideo = ({
  showContentSpinner,
  getVideo,
  video,
  currentUser,
  token,
  toggleFavourite,
  postComment,
}) => {
  useDocumentTitle(video?.title || "Video Sharing App");

  const { id } = useParams();
  const history = useHistory();
  const [comment, changeComment, resetComment] = useInput("");

  useEffect(() => {
    getVideo(id);
  }, []);

  const toggleFavouriteHandler = () => {
    if (currentUser) {
      toggleFavourite(
        video._id,
        token,
        !video.favourites.includes(currentUser._id)
      );
    } else {
      history.push("/login");
    }
  };

  const postCommentHandler = (e) => {
    e.preventDefault();
    if (!currentUser) return history.push("/login");
    if (comment.trim().length === 0) return;
    postComment(video._id, token, comment);
    resetComment();
  };

  return (
    <>
      {showContentSpinner || !video ? (
        <Spinner />
      ) : (
        <section className={classes.fullVideo}>
          <div className={classes.video}>
            <Player src={video.video} />
          </div>

          <h3 className={classes.title}>{video.title}</h3>

          <div className={classes.info}>
            <p>{video.createdAt}</p>

            <div onClick={toggleFavouriteHandler}>
              <i
                className={[
                  "fas fa-heart",
                  currentUser && video.favourites.includes(currentUser._id)
                    ? classes.favouriteIcon
                    : null,
                ].join(" ")}
              ></i>
              {video.favourites.length}
            </div>
          </div>

          <ProfileInfo
            user={video.user}
            currentUser={currentUser}
            token={token}
          />
          <Description text={video.description} />

          <hr />

          <form className={classes.form} onSubmit={postCommentHandler}>
            <Input
              type="text"
              id="comment"
              label="Comment"
              placeholder="Comment"
              value={comment}
              onChange={changeComment}
            />
            <Button>Add Comment</Button>
          </form>

          <h3 className={classes.commentsTitle}>Comments</h3>

          {video.comments.length === 0 ? (
            <p className={classes.noComments}>No Comments</p>
          ) : (
            <Comments comments={video.comments} />
          )}
        </section>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    showContentSpinner: state.showContentSpinner,
    video: state.video,
    currentUser: state.currentUser,
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideo: (_id) => dispatch(getVideo(_id)),
    toggleFavourite: (videoId, token, bool) =>
      dispatch(toggleFavouriteVideo(videoId, token, bool)),
    postComment: (videoId, token, comment) =>
      dispatch(postComment(videoId, token, comment)),
  };
};

const FullVideoComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullVideo);

export { FullVideoComponent as FullVideo };
