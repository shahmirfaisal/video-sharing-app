import React, { useEffect } from "react";
import classes from "./FullVideo.module.css";
import videoSrc from "../../assets/videoplayback (3).mp4";
import { Player } from "video-react";
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo";
import { Description } from "../../components/Description/Description";
import { Comments } from "../../components/Comments/Comments";
import { Input } from "../../components/Input/Input";
import { Button } from "../../styled-components/Button";
import { Spinner } from "../../components/Spinner/Spinner";
import { connect } from "react-redux";
import { getVideo } from "../../store/actions/actionCreators";
import { useParams } from "react-router-dom";

const FullVideo = ({ showContentSpinner, getVideo, video }) => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    getVideo(id);
  }, []);

  return (
    <>
      {showContentSpinner || !video ? (
        <Spinner />
      ) : (
        <section className={classes.fullVideo}>
          <div className={classes.video}>
            <Player src={`http://localhost:5000/${video.video}`} />
          </div>

          <h3 className={classes.title}>{video.title}</h3>

          <div className={classes.info}>
            <p>{video.createdAt}</p>

            <div>
              <i className="fas fa-heart"></i>
              {video.favourites.length}
            </div>
          </div>

          <ProfileInfo user={video.user} />
          <Description text={video.description} />

          <hr />

          <form className={classes.form}>
            <Input
              type="text"
              id="comment"
              label="Comment"
              placeholder="Comment"
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideo: (_id) => dispatch(getVideo(_id)),
  };
};

const FullVideoComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullVideo);

export { FullVideoComponent as FullVideo };
