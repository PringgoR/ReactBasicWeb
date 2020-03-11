import React from "react";
import 'antd/dist/antd.css';
import './style.css';

//Working copy 2 below without using any UI framework
function Organizers() {
    return (
        <div className="box">
                 <div className="circle"></div>
                 <div><h8>Organizers</h8><br></br>
                    <h8>Adhy Wiranata 4 others.</h8>
                 </div>
        </div>
      
    );
    }

export default Organizers;

// Working copy below without using any UI framework
// class Organizers extends Component {
//     render() {
//         return (
//             <React.Fragment>
//             <div className="box">
//                 <div className="circle"></div>
//                 <div><h8>Organizers</h8><br></br>
//                     <h8>Adhy Wiranata 4 others.</h8>
//                 </div>
//             </div>
            
//             </React.Fragment>
//         );
//     }
// }

// export default Organizers;