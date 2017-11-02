import React, { Component } from 'react'; 
 import QuoteItem from './QuoteItem';


class QuotesContainer extends Component {

    constructor(){
        super()
        this.state = {
            quotes:[]
        };
    }

    componentDidMount(){
            fetch('http://loremricksum.com/api/?paragraphs=100&quotes=5')
            .then(response => response.json())
            .then(data => 
                {
                  
                    this.setState({  quotes: data })
                });
    }

    render(){
        console.log(this.state)
      
        return ( 
            // { this.state.quotes.data.map(
            //     <QuoteItem  />
            // )}
                
            <QuoteItem  />
            
        )
    }

}

export default QuotesContainer