import React from 'react'
import Hamburger from './hamburger/Hamburger'

const App = () => {

  const styles = {
    main: {
      display:'flex',
      flexDirection:'column',
      alignItems: 'center',
      height: '100vh',
    }
  }
    
  return (
    <div style={styles.main}>
      <Hamburger />
    </div>
  )
}

export default App