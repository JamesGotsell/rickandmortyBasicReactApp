
import React, { Component } from 'react'; 
import { ListItem } from 'material-ui/List'
import View from '../layout/View'
import { Route, Switch, withRouter } from 'react-router-dom'
import rickAndMorty from 'rick-and-morty';
// stateless component 
const QuoteList = ({quotes=[]}) => {

  let listItems;

    if (quotes.length === 0) {
      listItems = <View>Loading...</View>
    }else {
      listItems = (
        <View>
        <ul>
        { quotes.map((quote, i) => ( 
            <li key={i}>
                <img src={rickAndMorty.random()} />
                  <h4>{quote}</h4>
            </li> 
           ))}
        </ul>
        
        </View>
      )
    }
    return (
      <View style={{ display: 'flex' }}>
       <Route
        render={() => listItems }
        />
      </View>
    )
  
}

export default QuoteList;
    