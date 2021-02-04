import React from 'react'

class Main extends React.Component {
    state = {
        senators: []
    }
    
    componentDidMount() {
        fetch('https://api.propublica.org/congress/v1/116/senate/members.json', {
            headers: new Headers ({
              
                'X-API-KEY': process.env.REACT_APP_PROPUBLICA_API_KEY,
            }),
        })
            .then(response => response.json())
            .then(senatorArray => {
                this.setState({senators: senatorArray.results[0].members})
                console.log(senatorArray.results[0].members[0])
            })
    }

    renderSenators = () => {
        return this.state.senators.map(senator => {
            return ( 
            <div>
                <p>{senator.first_name} {senator.last_name} </p>
                <p>{senator.party}</p>
            </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h3> What the heckin heck </h3>
                {this.renderSenators()}
            </div>
        ) 
    }
}
export default Main