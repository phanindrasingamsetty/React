import React from "react"

class Userclass extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {namee,Location}=this.props;
        return(
        <div className="username">
            <h3>{namee}</h3>
            <h3>Location: {Location}</h3>
            <h3>Contact: sdfjdsj</h3>
        </div>
        )
    }
}
export default Userclass;