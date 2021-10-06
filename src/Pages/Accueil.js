import React, {Component} from "react";
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { DateTime } from 'luxon';

class Accueil extends Component
{
    constructor(props)
    {
        super(props);

        this.name = (props.match) ? props.match.params.name : "";
        this.state = {
            // name: (props.match) ? props.match.params.name : "",
            now: DateTime.now()
        }
    }

    componentDidMount()
    {
        setInterval(() => {
            this.setState({
                now: DateTime.now()
            });
        }, 1000);
    }

    render()
    {
        return (
            <div id='accueil'> 
                <h1 className={"text-danger"}> Hello {this.name}, 
                it's {this.state.now.toFormat('yyyy-LL-dd')} , 
                <span className={"text-success"}> {this.state.now.toFormat('HH:mm:ss')}</span> </h1>
            </div>
        )
    }
}

export default Accueil