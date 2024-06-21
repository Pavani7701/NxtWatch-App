import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  addSavedVideos: () => {},
  toggleTheme: () => {},
  changeTab: () => {},
})

export default NxtWatchContext
