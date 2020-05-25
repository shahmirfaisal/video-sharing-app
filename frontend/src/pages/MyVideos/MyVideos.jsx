import React, { useEffect } from "react";
import { Videos } from "../../components/Videos/Videos";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Heading } from "../../styled-components/Heading";
import { connect } from "react-redux";
import { getMyVideos } from "../../store/actions/actionCreators";
import { Spinner } from "../../components/Spinner/Spinner";
import { useHistory } from "react-router-dom";

const MyVideos = ({
  videos,
  getVideos,
  currentUser,
  showContentSpinner,
  isAuth,
}) => {
  useDocumentTitle("My Videos");

  const history = useHistory();

  useEffect(() => {
    if (!isAuth) history.replace("/");
    else if (!videos) getVideos(currentUser._id);
  }, []);

  return (
    <section>
      <Heading>Your Videos</Heading>
      {showContentSpinner || !videos ? <Spinner /> : <Videos videos={videos} />}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.myVideos,
    currentUser: state.currentUser,
    showContentSpinner: state.showContentSpinner,
    isAuth: state.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideos: (id) => dispatch(getMyVideos(id)),
  };
};

const MyVideosComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyVideos);

export { MyVideosComponent as MyVideos };
