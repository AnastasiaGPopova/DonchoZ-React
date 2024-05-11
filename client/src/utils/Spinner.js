import {PuffLoader} from "react-spinners";

const override = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "transperant" };

function Spinner(){
return (
<PuffLoader color="#191a1a" 
cssOverride={override}
size={150}
/>
)
}

export default Spinner
