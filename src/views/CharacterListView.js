import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { getData }  from '../actions'

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.getData()
  }

  render() {
    //console.log('PROPS from CHARACTER VIEW', this.props)
    //console.log('STATE from CHARACTER VIEW', this.state)
    if (this.props.fetching) {
      return <h1>Loading...</h1> 
    }
    
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log('STATE from map To Props:', state)
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  }
}

export default connect(mapStateToProps, { getData })(CharacterListView)





