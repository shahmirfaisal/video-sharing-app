import React, { useEffect } from "react";
import { Videos } from "../../components/Videos/Videos";
import { Heading } from "../../styled-components/Heading";
import { Spinner } from "../../components/Spinner/Spinner";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getSearchVideos } from "../../store/actions/actionCreators";
import classes from "./Search.module.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const Search = ({ showContentSpinner, videos, getVideos }) => {
  const { search } = useLocation();
  useDocumentTitle(`Search result for ${search}`);

  useEffect(() => {
    const url = new URLSearchParams(search);
    const searchText = url.get("search");
    getVideos(searchText);
  }, [search]);

  return (
    <>
      <Heading>Search Result:</Heading>

      {showContentSpinner || !videos ? (
        <Spinner />
      ) : (
        <section>
          {videos.length === 0 ? (
            <p className={classes.noVideos}>No videos found!</p>
          ) : (
            <Videos videos={videos} />
          )}
        </section>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    showContentSpinner: state.showContentSpinner,
    videos: state.searchVideos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideos: (search) => dispatch(getSearchVideos(search)),
  };
};

const SearchComponent = connect(mapStateToProps, mapDispatchToProps)(Search);

export { SearchComponent as Search };
