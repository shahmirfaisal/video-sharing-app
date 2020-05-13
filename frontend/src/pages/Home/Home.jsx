import React, { useEffect } from "react";
import { Videos } from "../../components/Videos/Videos";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Heading } from "../../styled-components/Heading";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";
import { Spinner } from "../../components/Spinner/Spinner";

const Home = ({ getAllVideos, showContentSpinner, videos }) => {
  useEffect(() => {
    if (!videos) getAllVideos();
  }, []);

  useDocumentTitle("Video Sharing App");

  return (
    <section>
      <Heading>Explore</Heading>

      {showContentSpinner || !videos ? <Spinner /> : <Videos videos={videos} />}
    </section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllVideos: () => dispatch(actionCreators.getAllVideos()),
  };
};

const mapStateToProps = (state) => {
  return {
    showContentSpinner: state.showContentSpinner,
    videos: state.videos,
  };
};

const HomeComponent = connect(mapStateToProps, mapDispatchToProps)(Home);

export { HomeComponent as Home };
