import User from "./User";
import Userclass from "./Userclass";
const About=()=>{
    return(
    <div>
        <h1>AboutUs</h1>
        <h2>This regarding about us page</h2>
        <User namee={'Phanindra'}Location={'Hyderabad'}/>
        <Userclass />
    </div>
    );
};
export default About;