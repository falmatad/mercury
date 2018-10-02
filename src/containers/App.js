import React from 'react'
import PropTypes from 'prop-types'
import SearchableList from '../components/SearchableList'
import { connect } from 'react-redux'
import { thunks } from '../redux'

class App extends React.Component {
  componentDidMount() {
    this.props.load()
  }

  handleSearchChange = (search) => {
    this.props.load(search)
  }

  render() {
    const { loaded, people } = this.props

    return (
      <SearchableList
        loaded={loaded}
        items={people}
        onSearchChange={this.handleSearchChange}
      />
    )
  }
}

App.propTypes = {
  load: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  people: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  loaded: state.loaded,
  people: state.people,
})

const mapDispatchToProps = {
  load: thunks.load,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
