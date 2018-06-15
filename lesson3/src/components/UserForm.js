import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {

    };

    state = {
        username: ''
    }

    render() {
        return (
            <div>
                {/*pattern "reverse data flow" или "обратный поток данных"*/}
                Name: <input type='text' value={this.state.username} onChange = {this.handleUserChange}/>
            </div>
        )
    }

    handleUserChange = (ev) => {
        if (ev.target.value.length > 10) {
            this.setState({
                username: 'lol'
            })
            return
        }

        this.setState({
            username: ev.target.value
        })

    }
}

export default UserForm
