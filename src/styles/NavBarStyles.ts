import styled from 'styled-components';

export const NavBarBackground = styled.div`
  background-color: #FFA400;
  color: white;
  padding: 1rem;
  border: none;
  box-shadow: 0 0px 2px 0px gray;
  display: flex;
  gap: 6rem;
`;
export const NavBarSections = styled.div`
  justify-content: center;
  gap: 2rem;
  display: flex;
  flex-direction: row;
  
`;

export const NavBarLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;