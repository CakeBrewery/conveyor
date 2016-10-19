import React from 'react'
import ReactDOM from 'react-dom'

import ItemList from './itemlist'
import styles from "./main.css"


class App extends React.Component {
   
   render() {
      return ( 
         <div className={styles.test}>
            <h1>Conveyor</h1>
            <ItemList 
               itemgetter={getItems} 
               processors={processors}/>
         </div>
      );
   }
}


var getItems = function(){
   return ['Hi,', 'how', 'are', 'you?'];
}

var processor1 = function(item) {
   console.log('1: ' + item);
}
var processor2 = function(item){
   console.log('2: ' + item); 
}
var processors = [processor1, processor2];



ReactDOM.render(<App/>, document.getElementById('app'));
