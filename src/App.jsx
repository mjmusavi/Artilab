import { useState, useEffect } from "react";
import "./App.css";
import AddDevice from "./components/AddDevice";

function App() {

const [devices, setDevices] = useState(() => {
  const [editingIndex, setEditingIndex] = useState(null);
const [editingDevice, setEditingDevice] = useState(null);
  const saved = localStorage.getItem("devices");
  return saved ? JSON.parse(saved) : [];
});
useEffect(() => {
  localStorage.setItem("devices", JSON.stringify(devices));
}, [devices]);
  const addDevice = (device) => {
    setDevices([...devices, device]);
  };
const deleteDevice = (index) => {
  const updated = devices.filter((_, i) => i !== index);
  setDevices(updated);
};
  return (
    <div className="app">

      <header className="header">
        <h1>🧪 ArtiLab</h1>
        <p>Laboratory Equipment Management System</p>
      </header>

      <div className="cards">

        <div className="card">
          <h2>Devices</h2>
          <h3>{devices.length}</h3>
        </div>

        <div className="card">
          <h2>Maintenance</h2>
          <h3>0</h3>
        </div>

        <div className="card">
          <h2>Calibration</h2>
          <h3>0</h3>
        </div>

        <div className="card">
          <h2>Faults</h2>
          <h3>0</h3>
        </div>

      </div>

      <AddDevice addDevice={addDevice}/>

      <hr />

      <h2>Device List</h2>

      {
        devices.map((item,index)=>(
          <div className="card" key={index}>
            <h3>{item.name}</h3>

            <p>{item.company}</p>

            <p>{item.model}</p>
<button
  onClick={() => deleteDevice(index)}
  className="btn"
>
  Delete
</button>
          </div>
        ))
      }

    </div>
  );
}
const editDevice = (index) => {
  setEditingIndex(index);
  setEditingDevice(devices[index]);
};
const updateDevice = (device) => {

  const updated = [...devices];

  updated[editingIndex] = device;

  setDevices(updated);

  setEditingIndex(null);

  setEditingDevice(null);

};
<button
  onClick={() => editDevice(index)}
  className="btn"
  style={{marginRight:"10px"}}
>
  Edit
</button>
export default App;