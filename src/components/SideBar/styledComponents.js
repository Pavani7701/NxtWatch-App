import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  display: flex;
`
export const NavLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  position: fixed;
  top: 90px;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  margin-top: 0px;
  padding: 0px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  outline: none;
`
export const NavLinkContainer = styled.li`
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => props.bgColor};
`
export const NavText = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  margin-left: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  font-weight: ${props => (props.activeTab ? 'bold' : '')};
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-bottom: 80px;
`
export const ContactHeading = styled.p`
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const IconImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`
export const ContactDescription = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
`
