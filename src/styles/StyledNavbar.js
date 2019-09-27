import styled from 'styled-components';


const StyledNavbar = styled.nav`
  padding: 1rem;
  border-bottom: 3px solid black;

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    

    li {
      margin: 0 2rem;
      font-size: 1.8rem;
      font-weight: bold;
      
      
      a {
        text-decoration: none;
        color: black;
        padding: 2rem;

        &:hover {
          transition: background 0.6s;
          background: black;
          color: white;
        }
      }
    }
  }

`;

export default StyledNavbar