import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  padding: 30px;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f9f9f9')};
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#00306e')};
  width: 100%;
  position: fixed;
  top: 0;
  width: 100%;
`
export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const Logo = styled.img`
  width: 70px;
  @media screen and (min-width: 768px) {
    width: 90px;
  }
`
export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#0f0f0f')};
  cursor: pointer;
  outline: none;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 18px;
`
export const MenuIcon = styled.div`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  font-family: 'Roboto';
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 4px;
  background-color: ${props => (props.isDarkTheme ? ' #1e293b' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#00306e')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#cbd5e1')};
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const ModalDescription = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  margin: 10px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const CrossBtn = styled.button`
  align-self: flex-end;
  margin-right: 50px;
  background: none;
  border: none;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid #616e7c;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 5px;
  margin: 12px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 5px;
  margin: 12px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`
export const NavSmallContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 70px;
  position: fixed;
  cursor: pointer;
  outline: none;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Name = styled.p`
  font-size: 18px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
