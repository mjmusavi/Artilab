import { useState, useEffect } from "react";

function AddDevice({
  addDevice,
  editingDevice,
  updateDevice,
}) {
const[name,setName]=useState("");
const[company,setCompany]=useState("");
const[model,setModel]=useState("");
const[serialNumber,setSerialNumber]=useState("");
const[assetNumber,setAssetNumber]=useState("");

useEffect(() => {
  if (editingDevice) {
    setName(editingDevice.name || "");
    setCompany(editingDevice.company || "");
    setModel(editingDevice.model || "");
    setSerialNumber(editingDevice.serialNumber || "");
    setAssetNumber(editingDevice.assetNumber || "");
  }
}, [editingDevice]);
const save = () => {

const device = {
  name,
  company,
  model,
  serialNumber,
  assetNumber,
};

  if (editingDevice) {
    updateDevice(device);
  } else {
    addDevice(device);
  }

  setName("");
  setCompany("");
  setModel("");
  setSerialNumber("");
setAssetNumber("");
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

value={serialNumber}

onChange={(e)=>setSerialNumber(e.target.value)}

placeholder="Serial Number"

/>

<br/><br/>

<input

value={assetNumber}

onChange={(e)=>setAssetNumber(e.target.value)}

placeholder="Asset Number"

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

{editingDevice ? "Update Device" : "Save Device"}

</button>

</div>

);

}

export default AddDevice;