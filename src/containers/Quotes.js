import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes';

class Quotes extends Component {

  renderQuoteCards = () => {
    return this.props.quotes.map((quote) => 
    <QuoteCard key={quote.id} quote={quote}  upvote={this.props.upvoteQuote} downvote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} />
    )
  }

  
  render() {

    
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuoteCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, { upvoteQuote, downvoteQuote, removeQuote})(Quotes);
