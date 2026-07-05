import { useState } from "react";

function AddDevice({addDevice}) {

const[name,setName]=useState("");
const[company,setCompany]=useState("");
const[model,setModel]=useState("");

const save=()=>{

addDevice({

name,
company,
model

});

setName("");
setCompany("");
setModel("");

};

return(

<div className="card">

<h2>Add Device</h2>

<input

value={name}

onChange={(e)=>setName(e.target.value)}

placeholder="Device Name"

/>

<br/><br/>

<input

value={company}

onChange={(e)=>setCompany(e.target.value)}

placeholder="Manufacturer"

/>

<br/><br/>

<input

value={model}

onChange={(e)=>setModel(e.target.value)}

placeholder="Model"

/>

<br/><br/>

<button className="btn"

onClick={save}

>

Save Device

</button>

</div>

);

}

export default AddDevice;