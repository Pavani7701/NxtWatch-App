import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsBrightnessHigh, BsMoon} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavHeader,
  NavContent,
  Logo,
  ActionContainer,
  ThemeButton,
  ProfileImage,
  MenuIcon,
  LogoutButton,
  LogoutIconButton,
  ButtonsContainer,
  CrossBtn,
  CloseButton,
  ConfirmButton,
  ModalContainer,
  ModalDescription,
  NavSmallContainer,
  Name,
  NavLink,
} from './styledComponents'

class Header extends Component {
  state = {isNavSmallOpen: false, activeTab: 'Home'}

  showSmallNav = () => {
    this.setState({isNavSmallOpen: true})
  }

  hideSmallNav = () => {
    this.setState({isNavSmallOpen: false})
  }

  render() {
    const {isNavSmallOpen, activeTab} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const logoDisplay = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const onChangeTheme = () => {
            toggleTheme()
          }

          const onClickLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          return (
            <>
              <NavHeader isDarkTheme={isDarkTheme}>
                <NavContent>
                  <Link to="/">
                    <Logo src={logoDisplay} alt="website logo" />
                  </Link>
                  <ActionContainer>
                    <ThemeButton
                      type="button"
                      data-testid="theme"
                      onClick={onChangeTheme}
                      isDarkTheme={isDarkTheme}
                    >
                      {isDarkTheme ? (
                        <BsBrightnessHigh size={25} />
                      ) : (
                        <BsMoon size={25} />
                      )}
                    </ThemeButton>
                    <ProfileImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                    <MenuIcon onClick={this.showSmallNav}>
                      <GiHamburgerMenu size={25} />
                    </MenuIcon>
                    <Popup
                      modal
                      trigger={
                        <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                          Logout
                        </LogoutButton>
                      }
                      className="popup-content"
                    >
                      {close => (
                        <ModalContainer isDarkTheme={isDarkTheme}>
                          <ModalDescription isDarkTheme={isDarkTheme}>
                            Are you sure, you want to logout?
                          </ModalDescription>
                          <ButtonsContainer>
                            <CloseButton
                              type="button"
                              data-testid="closeButton"
                              onClick={() => close()}
                              isDarkTheme={isDarkTheme}
                            >
                              Cancel
                            </CloseButton>
                            <ConfirmButton
                              type="button"
                              onClick={onClickLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </ButtonsContainer>
                        </ModalContainer>
                      )}
                    </Popup>
                    <Popup
                      modal
                      trigger={
                        <LogoutIconButton
                          type="button"
                          isDarkTheme={isDarkTheme}
                        >
                          <FiLogOut size={25} />
                        </LogoutIconButton>
                      }
                      className="popup-content"
                    >
                      {close => (
                        <ModalContainer>
                          <ModalDescription>
                            Are you sure, you want to logout?
                          </ModalDescription>
                          <ButtonsContainer>
                            <CloseButton
                              type="button"
                              data-testid="closeButton"
                              isDarkTheme={isDarkTheme}
                              onClick={() => close()}
                            >
                              Cancel
                            </CloseButton>
                            <ConfirmButton
                              type="button"
                              onClick={onClickLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </ButtonsContainer>
                        </ModalContainer>
                      )}
                    </Popup>
                  </ActionContainer>
                </NavContent>
              </NavHeader>
              {isNavSmallOpen && (
                <NavSmallContainer isDarkTheme={isDarkTheme}>
                  <CrossBtn onClick={this.hideSmallNav}>
                    <AiOutlineClose size={20} />
                  </CrossBtn>

                  <NavLink to="/" onClick={this.hideSmallNav}>
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0000' : '#909090'}
                    />
                    <Name>Home</Name>
                  </NavLink>
                  <NavLink to="/trending" onClick={this.hideSmallNav}>
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0000' : '#909090'}
                    />
                    <Name>Trending</Name>
                  </NavLink>
                  <NavLink to="/gaming" onClick={this.hideSmallNav}>
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0000' : '#909090'}
                    />
                    <Name>Gaming</Name>
                  </NavLink>
                  <NavLink to="/saved-videos" onClick={this.hideSmallNav}>
                    <MdPlaylistAdd
                      size={30}
                      color={activeTab === 'Saved' ? '#ff0000' : '#909090'}
                    />
                    <Name>Saved Videos</Name>
                  </NavLink>
                </NavSmallContainer>
              )}
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
