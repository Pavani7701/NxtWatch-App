import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideos from './components/SavedVideos'
import VideoDetails from './components/VideoDetails'
import NotFound from './components/NotFound'
import NxtWatchContext from './context/NxtWatchContext'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false, activeTab: 'Home', savedVideos: []}

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeTab = tab => {
    this.setState({
      activeTab: tab,
    })
  }

  addSavedVideos = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeSavedVideos = id => {
    const {savedVideos} = this.state
    const updateSavedVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideos: updateSavedVideos})
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          savedVideos,
          toggleTheme: this.toggleTheme,
          addSavedVideos: this.addSavedVideos,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
