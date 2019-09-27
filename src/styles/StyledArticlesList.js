import styled from 'styled-components';

const StyledArticlesList = styled.div`

  .article-container {
    padding: 3rem;
    border: 3px solid black;
    margin: 2rem 0;
  }
  h3 {
    color: black;
    font-size: 2rem;

    &:hover {
        color: grey;
    }
  }

  a {
      text-decoration: none;
  }
  
`;


export default StyledArticlesList;