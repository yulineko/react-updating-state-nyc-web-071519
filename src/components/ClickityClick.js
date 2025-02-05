// Code ClickityClick Component Here
import React from "react"

class ClickityClick extends React.Component{
    constructor(){
        super()
        this.state = {
            hasBeenClicked: false,
            currentTheme: "blue",
            addressInfo: {
                street: null, 
                number: null, 
                cuty: null,
                country: null
            }
        }
    }

    handleClick = () => {
        // console.log("CLICKED!")
        this.setState({
            hasBeenClicked: true,
        }, () => console.log(this.state))
        
    }

    render(){
        return(
            <div>
                <p>
                    I have {this.state.hasBeenClicked ? null : 'not'} been clicked!
                </p>
                <button onClick = {this.handleClick}>
                    Click me!
                </button>
            </div>
        )
    }
}

export default ClickityClick
