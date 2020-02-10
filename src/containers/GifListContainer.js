import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.PureComponent {

    state = {
        gifs: []
    }
    
    componentDidMount() {
        this.fetchGifs()
    }
    
    fetchGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({
                gifs: data.map(gif => ({ url: gif.images.original.url }))
            })
        })
    }

    render() {
        return (
            <div>
            <div>
                < GifSearch fetchGifs={this.fetchGifs} />
            </div>
            <div>
                < GifList gifs={this.state.gifs} />
            </div>
            </div>
        )
            
        
    }
}