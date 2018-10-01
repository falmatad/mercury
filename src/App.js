import React from 'react'
import PropTypes from 'prop-types'
import './App.css'
import SearchableList from './SearchableList'
import { connect } from 'react-redux'
import * as thunks from './thunks'

class App extends React.Component {
  componentDidMount() {
    this.props.load()
  }

  handleSearchChange = (search) => {
    console.log('search for', search)
  }

  render() {
    const { loaded } = this.props

    return (
      <div className="App">
        <SearchableList
          loaded={loaded}
          onSearchChange={this.handleSearchChange}
        />
      </div>
    )
  }
}

App.propTypes = {
  load: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  loaded: state.loaded,
})

const mapDispatchToProps = {
  load: thunks.load,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
