import CircleLoader from "react-spinners/CircleLoader ";

const override = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "transperant" };

function Spinner(){
return (
    
<CircleLoader 
color="#ffffff" 
cssOverride={override}
size={150}
/>
)
}

export default Spinner
