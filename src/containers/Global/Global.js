import React, {Component} from 'react'
import './Global.css'

export default class Global extends Component{
    render(){
        return(
            <div className="Global">
                <h1 className="heading">Covid-19 Tracker</h1>
                <p className="description">Let's Check Information About Covid-19</p>

                <div className="world-stats">
                    {/* Show Data */}
                </div>
            </div>
        )
    }
}
