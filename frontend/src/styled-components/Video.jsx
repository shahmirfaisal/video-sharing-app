import styled from "styled-components";

export const Video = styled.div`
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  transition: all 0.3s;

  :hover {
    box-shadow: 1px 7px 20px rgba(0, 0, 0, 0.15);
  }

  video {
    width: 100%;
    border-radius: 3px 3px 0 0;
    object-fit: cover;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  }

  .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1rem;
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .body {
    padding: 1rem 1rem;
    position: relative;

    .icon {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -0.9rem;
      right: 1rem;
      transform: translateY(-50%);
      background-color: white;
      color: rgb(55, 78, 215);
      cursor: pointer;
    }

    .creator {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 0.9rem;
      margin: 0.8rem 0;
      font-weight: 500;
      opacity: 0.8;
      text-align: left;
      :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .date {
      font-size: 0.85rem;
      font-weight: 500;
      opacity: 0.8;
      text-align: left;
    }
  }
`;
