import React, { forwardRef } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const ArticleCard = forwardRef(({ article }, ref) => {
  return (
    <div ref={ref}>
      <Article>
        <SharedActor>
          <a>
            <img src={article.actor.image} alt='user' />
            <div>
              <span>{article.actor.title}</span>
              <span>{article.actor.description}</span>
              <span>{article.actor.date.toDate().toLocaleDateString()}</span>
            </div>
          </a>
          <button>
            <img src='/images/ellipsis.png' alt='ellipsis' />
          </button>
        </SharedActor>
        <Description>{article.description}</Description>
        <SharedImg>
          <a>
            {!article.sharedImg && article.video ? (
              <ReactPlayer width={'100%'} url={article.video} />
            ) : (
              article.sharedImg && <img src={article.sharedImg} />
            )}
          </a>
        </SharedImg>
        <SocialCounts>
          <li>
            <button>
              <img src='/images/like-icon.png' alt='like' />
              <img src='/images/clap-icon.png' alt='clap' />
              <span>75</span>
            </button>
          </li>
          <li>
            <a>{article.comments} comments</a>
          </li>
        </SocialCounts>
        <SocialActions>
          <button>
            <i className='far fa-thumbs-up'></i>
            <span>Like</span>
          </button>
          <button>
            <i className='far fa-comment'></i>
            <span>Comment</span>
          </button>
          <button>
            <i className='fas fa-share'></i>
            <span>Share</span>
          </button>
          <button>
            <i className='fab fa-telegram-plane'></i>
            <span>Send</span>
          </button>
        </SocialActions>
      </Article>
    </div>
  );
});

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

const Article = styled(CommanCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 100%;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  list-style: none;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      border: none;
      background: #fff;
    }
  }
  img {
    width: 18px;
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    border: none;
    background-color: #fff;
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

export default ArticleCard;
