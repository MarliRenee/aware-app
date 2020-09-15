import React, { Component } from 'react'

const IcebergListContext = React.createContext({
  icebergList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setIcebergList: () => {},
})
export default IcebergListContext

export class IcebergListProvider extends Component {
  state = {
    icebergList: [],
    error: null,
  };

  setIcebergList = icebergList => {
    this.setState({ icebergList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      icebergList: this.state.icebergList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setIcebergList: this.setIcebergList,
    }
    return (
      <IcebergListContext.Provider value={value}>
        {this.props.children}
      </IcebergListContext.Provider>
    )
  }
}