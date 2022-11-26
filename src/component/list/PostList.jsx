import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListitem";

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-strat;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function PostList(props) {
  const { posts, onClickItem } = props;

  return (
    <Wrapper>
      {posts.map((post, index) => { 
        return (
          <PostListItem 
            key={post.id}
            post={post}
            onClick={() => {
              onClickItem(post);
            }}
          />
        );
      })}
    </Wrapper>
  );
}