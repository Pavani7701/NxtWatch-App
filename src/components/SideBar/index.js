import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavBar,
  NavLgContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  IconImage,
  ContactDescription,
} from './styledComponents'

const SideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeTab} = value
      const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

      const onClickTab = tabName => {
        changeTab(tabName)
      }

      return (
        <NavBar>
          <NavLgContainer isDarkTheme={isDarkTheme}>
            <NavOptions>
              <NavLink to="/">
                <NavLinkContainer
                  key="home"
                  bgColor={activeTab === 'Home' ? activeTabBg : ''}
                  onClick={() => onClickTab('Home')}
                >
                  <AiFillHome
                    size={30}
                    color={activeTab === 'Home' ? '#ff0000' : '#909090'}
                  />
                  <NavText isDarkTheme={isDarkTheme} activeTab={activeTab}>
                    Home
                  </NavText>
                </NavLinkContainer>
              </NavLink>
              <NavLink to="/trending">
                <NavLinkContainer
                  key="trending"
                  bgColor={activeTab === 'Trending' ? activeTabBg : ''}
                  onClick={() => onClickTab('Trending')}
                >
                  <HiFire
                    size={30}
                    color={activeTab === 'Trending' ? '#ff0000' : '#909090'}
                  />
                  <NavText isDarkTheme={isDarkTheme}>Trending</NavText>
                </NavLinkContainer>
              </NavLink>
              <NavLink to="/gaming">
                <NavLinkContainer
                  key="gaming"
                  bgColor={activeTab === 'Gaming' ? activeTabBg : ''}
                  onClick={() => onClickTab('Gaming')}
                >
                  <SiYoutubegaming
                    size={30}
                    color={activeTab === 'Gaming' ? '#ff0000' : '#909090'}
                  />
                  <NavText isDarkTheme={isDarkTheme}>Gaming</NavText>
                </NavLinkContainer>
              </NavLink>
              <NavLink to="/saved-videos">
                <NavLinkContainer
                  key="saved"
                  bgColor={activeTab === 'Saved' ? activeTabBg : ''}
                  onClick={() => onClickTab('Saved')}
                >
                  <MdPlaylistAdd
                    size={30}
                    color={activeTab === 'Saved' ? '#ff0000' : '#909090'}
                  />
                  <NavText isDarkTheme={isDarkTheme}>Saved Videos</NavText>
                </NavLinkContainer>
              </NavLink>
            </NavOptions>
            <ContactInfo>
              <ContactHeading isDarkTheme={isDarkTheme}>
                Contact Us
              </ContactHeading>
              <ContactIcons>
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <a href="https://www.linkedin.com/in/shivasai-boddu-732bb6224/">
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </a>
              </ContactIcons>
              <ContactDescription isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </ContactDescription>
            </ContactInfo>
          </NavLgContainer>
        </NavBar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SideBar
