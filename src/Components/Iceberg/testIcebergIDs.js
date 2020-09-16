import React, { Component } from 'react'
import config from '../../config'

export default class IcebergIdTest extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          icebergs: [],
          selected: null
        };
    }

    // {this.props.data.length > 0 &&
    //     this.props.data.map(
    //     (vocabArray => (
    //         <div className="column">
    //             <ul>
    //             { this.props.data.length > 0 &&
    //                 vocabArray.map(
    //                     (emotion => (
    //                         <li><p>{emotion}</p></li>
    //                     ))  
    //                 )
    //             }
    //             </ul>
    //         </div>
    //     )) 
    // )}

    componentDidMount() {
            // fetch('https://country.register.gov.uk/records.json?page-size=5000')
            // .then(response => response.json())
            // .then(data => {
            //     const countries = Object.keys(data)
            //         .map(key => data[key].item[0]);
            //     this.setState({
            //     countries
            //     });
            // });

        // Do not delete ***this works ish***
        fetch(`${config.API_ENDPOINT}/icebergs`)
          .then(response => response.json())
          .then(data => {
              console.log(data);
              const icebergs = Object.keys(data[0])
                this.setState({
                    icebergs
                })
            }); 
    }

    render() {
        return (
            <div>
            {this.state.icebergs}
            </div>
        )
    }
}

