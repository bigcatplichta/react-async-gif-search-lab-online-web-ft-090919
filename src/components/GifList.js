import React from 'react'

export default class Giflist extends React.PureComponent {

    state = {
        gifs: this.props.gifs
    }

    render() {
       return (
        <div>
            {this.props.gifs.map(gif => <img key={gif.url} src={gif.url} />)}
        </div>
       ) 
    }
}