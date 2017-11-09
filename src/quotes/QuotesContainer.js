import React, { Component } from 'react'; 
 import QuoteList from './QuoteList';


class QuotesContainer extends Component {

    constructor(){
        super()
        // set state quotes as an empty array 
        this.state = {
            quotes: []
        };
    }

    componentWillMount(){
            fetch('http://loremricksum.com/api/?paragraphs=5&quotes=1')
            .then(response => response.json())
            .then(data => {
                console.log('parsed data ', data)
                this.setState({quotes: data}) 
            }).catch((err)=> {
                console.log(err)
            })
              
    }
    render() {
        // within pass the state as props into the quotes list
        return ( 
                   <QuoteList  quotes={this.state.quotes.data} />         
        )
    }

}

export default QuotesContainer