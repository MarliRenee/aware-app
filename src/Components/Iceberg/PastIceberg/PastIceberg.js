import React, { Component } from 'react'
import config from '../../../config'
import PastIcebergForm from './PastIcebergForm'

export default class PastIceberg extends Component {

    constructor(props) {
        super(props);
        this.state = {
          listItems: [],
        };
    }
    
    static defaultProps = {

        match: {
            params: {}
        }
    }

    componentDidMount() {
        this.IcebergData();
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
        console.log(this.state.pastAnswer)
       
        return (
            <div className="IcebergList">

                <h2>Past Iceberg</h2>
                <div className="CompletedDate">
                    {this.state.listItems.length > 0 &&
                    this.state.listItems
                        .slice(icebergId-1, icebergId)
                        .map( date =>
                        <h3 key={date.id}>Completed on: {date.modified}</h3>
                    )}
                </div>

                <div>
                    <PastIcebergForm />
                </div> 
                        
            </div>
        )
     }
}
