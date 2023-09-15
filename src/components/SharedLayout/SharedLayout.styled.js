import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
  box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.82);
`;
export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
`;
export const Navigation = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 20px;

  &.active {
    color: red;
  }
`;
export const GoBackButton = styled(Link)`
  padding: 4px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  margin: 10px 0;

  &:hover,
  :focus {
    color: white;
    background-color: #3f51b5;
  }
`;
