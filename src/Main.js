import React from 'react'

class Main extends React.Component {
    state = {
        senators: []
    }
    
    componentDidMount() {
        fetch('https://api.propublica.org/congress/v1/116/house/members.json', {
            headers: new Headers ({
              
                'X-API-KEY': process.env.REACT_APP_PROPUBLICA_API_KEY,
            }),
        })
            .then(response => response.json())
            .then(senatorArray => {
                this.setState({senators: senatorArray.results[0].members})
                console.log(senatorArray.results[0].members)
            })
    }

    renderSenators = () => {
        return this.state.senators.map(senator => {
            return ( 
            <div>
                <p>{senator.first_name} {senator.last_name} ({senator.party})</p>
                <a href={senator.contact_form} >Contact Me</a>
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