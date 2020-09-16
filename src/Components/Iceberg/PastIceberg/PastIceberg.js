import React, { Component } from 'react'
import config from '../../../config'

export default class PastIceberg extends Component {

    constructor(props) {
        super(props);
        this.state = {
          listItems: [],
          count: 1,
        };
    }
    
    static defaultProps = {

        match: {
            params: {}
        }
    }

    componentDidMount() {
        this.IcebergData()
    }


    IcebergData () {
        fetch(`${config.API_ENDPOINT}/icebergs`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                listItems: data
            })
        });  
        
    }
    
    render() {

        const { icebergId } = this.props.match.params
       
        return (
            <div className="IcebergList">

                <h2>Past Iceberg</h2>
                    {this.state.listItems.length > 0 &&
                    this.state.listItems
                        .slice(icebergId-1, icebergId)
                        .map( date =>
                        <h3>Completed on: {date.modified}</h3>
                    )}
            </div>
        )
     }
}
