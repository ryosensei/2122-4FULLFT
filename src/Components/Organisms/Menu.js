import React, {Component} from "react";

class Menu extends Component
{
    constructor(props)
    {
        super(props);

        this.menuItems = [{
            url: '/',
            name: 'Accueil'
        },{
            url: '/fdjklsjfklds',
            name: 'Not Found'
        }];
    }
    render()
    {
        return (
            <div className="menu">
                <ul>
                    {this.menuItems.map(i => (
                        <li><a href={i.url}>{i.name}</a></li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Menu