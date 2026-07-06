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

const[status,setStatus]=useState("Active");
const[department,setDepartment]=useState("");
const[laboratory,setLaboratory]=useState("");
const [installationDate, setInstallationDate] = useState("");
const [warrantyExpiry, setWarrantyExpiry] = useState("");
const [supplier, setSupplier] = useState("");
useEffect(() => {
  if (editingDevice) {
    setName(editingDevice.name || "");
    setCompany(editingDevice.company || "");
    setModel(editingDevice.model || "");
    setSerialNumber(editingDevice.serialNumber || "");
    setAssetNumber(editingDevice.assetNumber || "");
    setStatus(editingDevice.status || "Active");
    setDepartment(editingDevice.department || "");
    setLaboratory(editingDevice.laboratory || "");
    setInstallationDate(editingDevice.installationDate || "");
    setWarrantyExpiry(editingDevice.warrantyExpiry || "");
    setSupplier(editingDevice.supplier || "");
  }
}, [editingDevice]);
const save = () => {

const device = {
  name,
  company,
  model,
  serialNumber,
  assetNumber,
  status,
  department,
  laboratory,
  installationDate,
  warrantyExpiry,
  supplier,
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
setStatus("Active");
setDepartment("");
setLaboratory("");
setInstallationDate("");
setWarrantyExpiry("");
setSupplier("");
};

return (

<div className="card">

<h2>Add Device</h2>

<div className="form-grid">

<input
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="Device Name"
/>

<input
value={company}
onChange={(e)=>setCompany(e.target.value)}
placeholder="Manufacturer"
/>

<input
value={model}
onChange={(e)=>setModel(e.target.value)}
placeholder="Model"
/>

<input
value={serialNumber}
onChange={(e)=>setSerialNumber(e.target.value)}
placeholder="Serial Number"
/>

<input
value={assetNumber}
onChange={(e)=>setAssetNumber(e.target.value)}
placeholder="Asset Number"
/>

<select
value={status}
onChange={(e)=>setStatus(e.target.value)}
>

<option>Active</option>

<option>Maintenance</option>

<option>Out of Service</option>

</select>

<select
value={department}
onChange={(e)=>setDepartment(e.target.value)}
>

<option value="">Select Department</option>

<option>Hematology</option>

<option>Biochemistry</option>

<option>Microbiology</option>

<option>Immunology</option>

<option>Pathology</option>

</select>

<select
value={laboratory}
onChange={(e)=>setLaboratory(e.target.value)}
>

<option value="">Select Laboratory</option>

<option>Central Lab</option>

<option>Chemistry Lab</option>

<option>Hematology Lab</option>

<option>Microbiology Lab</option>

<option>PCR Lab</option>

</select>
<input
  type="date"
  value={installationDate}
  onChange={(e) => setInstallationDate(e.target.value)}
/>

<input
  type="date"
  value={warrantyExpiry}
  onChange={(e) => setWarrantyExpiry(e.target.value)}
/>

<input
  value={supplier}
  onChange={(e) => setSupplier(e.target.value)}
  placeholder="Supplier"
/>

</div>

<br/>

<button
className="btn"
onClick={save}
>

{editingDevice ? "Update Device" : "Save Device"}

</button>

</div>

);

}

export default AddDevice;