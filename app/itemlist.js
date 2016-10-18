import React from 'react'

import styles from "./main.css"


export default class ItemList extends React.Component {   
   constructor(props) {
      super(props);
      this.state = {
         items: [],
      }
      
   }
   
   getItems() {
      this.state.items = this.props.itemgetter();
   }
        
        
   render() {
      return ( 
         <div className={styles.test}>
            <h1>Everything works! </h1>
         </div>
      );
   }
}
