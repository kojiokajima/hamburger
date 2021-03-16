import React, { useState } from 'react'
import {MenuItem, MenuButton, Menu} from './index'
import './hamburger.css'


const Hamburger = () => {
    // constructor(props){
    //   super(props);
    //   this.state={
    //     menuOpen:false,
    //   }
    // }
    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleMenuClick = () => {
    //   this.setState({menuOpen:!this.state.menuOpen});
        setMenuOpen(!menuOpen)
    }
    
    const handleLinkClick = () => {
    //   this.setState({menuOpen: false});
        setMenuOpen(false)
    }
    

    const styles　= {
      container:{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '99',
        opacity: 0.9,
        display:'flex',
        alignItems:'center',
        background: 'black',
        width: '100%',
        color: 'white',
        fontFamily:'Lobster',
      },
      logo: {
        margin: '0 auto',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        filter: menuOpen ? 'blur(2px)':null,
        transition: 'filter 0.5s ease',
      },
    }

    const menu = ['About Us','Our Products','Services','FAQ','Contact Us']
    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.1}s`}
          onClick={()=>{handleLinkClick();}}
          >
            {val}
        </MenuItem>
      )
    });
      
    return(
      <div>
        <div style={styles.container}>
          <MenuButton open={menuOpen} onClick={()=>handleMenuClick()} color='white'/>
          <div style={styles.logo}>Logo</div>
        </div>
        <Menu open={menuOpen}>
          {menuItems}
        </Menu>
      </div>
    )
  }

  export default Hamburger