import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100vw;
  height: 300px;
  object-fit: contain;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 85%;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  outline: none;
`
export const Heading = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const ViewsAndDate = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 0px;
`
