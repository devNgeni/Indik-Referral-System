import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const PopContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 300px;
  height: 100%;
  top: 0;
  left: 0;
  background: white;
  transition: 0.3s ease-in-out;
    // opacity: ${({ showSidebar }) => (showSidebar ? "100%" : "0")};
    // top: ${({ showSidebar }) => (showSidebar ? "0" : "-100%")};
`;
export const PopDash = styled.div`
  font-family: "Gill Sans", sans-serif;
  text-decoration: none;
  color: #3a5168;
  font-weight: bold;
  font-size: 2.5em;
  height: 40px;
  text-align: start;
`;
export const PopText = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  padding: 10px;
  text-align-last: start;
  transition: 0.2s ease-in-out;
`;
export const PopDiv = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  padding: 10px;
  text-align-last: start;
  transition: 0.2s ease-in-out;
`;
export const PopContact = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  padding: 10px;
  text-align-last: start;
  transition: 0.2s ease-in-out;
`;
export const PopButton = styled.div`
  text-align-last: start;
  height: 150px;
  padding: 20px;
`;
export const PopIt = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const PopEven = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  padding: 10px;
  text-align-last: start;
  transition: 0.2s ease-in-out;
`;
export const PopWord = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 1.5em;
  text-align-last: start;
`;
export const Profile = styled.div`
  padding: 20px;
`;
export const SidebarLink = styled(LinkS)`
  &:hover {
    color: #00aff0;
    transition: 0.2s ease-in-out;
  }
`;
