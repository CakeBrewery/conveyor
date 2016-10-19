import React from 'react'

import styles from "./main.css"


export default class ItemList extends React.Component {   
   constructor(props) {
      super(props);
      this.state = {
         items: this.getItems(),
         done: []
      }
   }
   
   getItems() {
      return this.props.itemgetter();
   }
   
   processItem() {
      if (this.state.items.length <= 0) {
         console.log('List is empty. ');
         return
      }
         
      var item = this.state.items.pop();
      this.setState({item: this.state.items});
      

      // Go through each processor specified and apply it. 
      this.props.processors.forEach(function(processor, index){
         var chain = processor(item, index);
         if (chain){  // If the processor returns something. 
            item = chain
         }
      });
      
      // For each is blocking (synchronous) so..
      this.state.done.push(item)
   }

   render() {
      return ( 
         <div className={styles.test}>
            <h3> Items </h3>
            {this.state.items}
            <h3> Done </h3>
            {this.state.done}
            <button onClick={this.processItem.bind(this)}>
               Process
            </button>
         </div>
      );
   }
}
