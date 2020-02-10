import React from 'react'

export default class GifSearch extends React.PureComponent {

    state = {
        query: ""
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGifs(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={event => this.handleChange(event)} />
                </form>
            </div>
        )
    }
}