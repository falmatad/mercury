import React from 'react'
import PropTypes from 'prop-types'
import SearchableList from '../components/SearchableList'
import { connect } from 'react-redux'
import { actions, thunks } from '../redux'

class App extends React.Component {
  componentDidMount() {
    this.props.load()
  }

  handleSearchChange = (search) => {
    this.props.load(search)
  }

  handleSortChange = (sort) => {
    this.props.setSort(sort)
  }

  render() {
    const { loaded, people, sort } = this.props

    return (
      <SearchableList
        loaded={loaded}
        items={people}
        sort={sort}
        onSearchChange={this.handleSearchChange}
        onSortChange={this.handleSortChange}
      />
    )
  }
}

App.propTypes = {
  load: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  people: PropTypes.array.isRequired,
  setSort: PropTypes.func.isRequired,
  sort: PropTypes.string,
}

const mapStateToProps = state => ({
  loaded: state.loaded,
  people: state.people,
  sort: state.sort,
})

const mapDispatchToProps = {
  load: thunks.load,
  setSort: actions.setSort,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
