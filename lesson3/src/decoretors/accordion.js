import React from 'react'

export default Component => class Accordion extends React.Component {
    /***
     * все статьи закрыты
     */
  /*state = {
    openItemId: null
  }*/
    /**
     * для того чтоб при рендере открыть статью
     * @param props
     */
  constructor(props) {
    super(props)
    this.state = {
      openItemId: props.defaultOpenId
    }
  }

  render() {
    return <Component {...this.props} toggleOpenItem = {this.toggleOpenItem} openItemId = {this.state.openItemId}/>
  }

  toggleOpenItem = openItemId => ev => {
    this.setState({
      openItemId: openItemId === this.state.openItemId ? null : openItemId
    })
  }
}