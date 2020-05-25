import React, { useEffect } from "react";
import { Videos } from "../../components/Videos/Videos";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Heading } from "../../styled-components/Heading";
import { connect } from "react-redux";
import { getFavouriteVideos } from "../../store/actions/actionCreators";
import { Spinner } from "../../components/Spinner/Spinner";
import { useHistory } from "react-router-dom";

const Favourites = ({
  showContentSpinner,
  videos,
  getVideos,
  currentUser,
  isAuth,
}) => {
  useDocumentTitle("Favourite Videos");

  const history = useHistory();

  useEffect(() => {
    if (!isAuth) history.replace("/");
    else if (!videos) getVideos(currentUser._id);
  }, []);

  return (
    <section>
      <Heading>Favourites</Heading>
      {showContentSpinner || !videos ? <Spinner /> : <Videos videos={videos} />}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    showContentSpinner: state.showContentSpinner,
    videos: state.favouriteVideos,
    currentUser: state.currentUser,
    isAuth: state.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideos: (id) => dispatch(getFavouriteVideos(id)),
  };
};

const FavouritesComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);

export { FavouritesComponent as Favourites };
