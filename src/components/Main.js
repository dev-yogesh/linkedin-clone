import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <ShareBox>Share</ShareBox>
      <div>
        <img src='/images/user.svg' alt='user' />
        <button>Start a post</button>
      </div>

      <div>
        <button>
          <img src='/images/photo-icon.svg' alt='phone' />
          <span>Photo</span>
        </button>

        <button>
          <img src='/images/video-icon.svg' alt='video' />
          <span>Video</span>
        </button>

        <button>
          <img src='/images/event-icon.svg' alt='event' />
          <span>Event</span>
        </button>

        <button>
          <img src='/images/article-icon.svg' alt='article' />
          <span>Write article</span>
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommanCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
`;

const ShareBox = styled(CommanCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  button {
    outline: none;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 1.5;
    min-height: 48px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  &:first-child {
    display: flex;
    align-items: center;
    padding: 8px 16px 0px 16x;
  }
`;

export default Main;
