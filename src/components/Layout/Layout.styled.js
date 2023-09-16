import styled from "styled-components";
import { NavLink } from "react-router-dom"


export const StyledLink = styled(NavLink)`
display: block;
padding: 5px 5px 5px 5px;
text-transform: uppercase;
font-weight: 600;
color: white;
font-size: 20px;

  &.active {
    color: orange;
  }
  &:hover {color: green;}
`;

export const Container = styled.div`
max-width: 1000px;
    margin-right: auto;
    margin-left: auto;` 

    export const Navigation = styled.nav`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: grey;
        height: 50px;
        padding-top: 10px;
        padding-bottom: 10px;
    `