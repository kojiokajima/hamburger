import React, { useEffect, useState } from 'react'

/* Menu.jsx */
const Menu = (props) => {
    // constructor(props){
    //   super(props);
    //   this.state={
    //     open: this.props.open? this.props.open:false,
    //   }
    // }
    const [open, setOpen] = useState(props.open ? props.open : false);
      
    // componentWillReceiveProps(nextProps){
    //   if(nextProps.open !== this.state.open){
    //     this.setState({open:nextProps.open});
    //   }
    // }
    useEffect(() => {
        if(props.open !== open) {
            setOpen(props.open)
        }
    }, [props])
    

      const styles={
        container: {
          position: 'absolute',
          top: 0,
          left: 0,
          height: open? '100%': 0,
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          background: 'black',
          opacity: 0.95,
          color: '#fafafa',
          transition: 'height 0.3s ease',
          zIndex: 2,
        },
        menuList: {
          paddingTop: '3rem',
        }
      }
      return(
        <div style={styles.container}>
          {
            open?
              <div style={styles.menuList}>
                {props.children}
              </div>:null
          }
        </div>
      )
  }

  export default Menu