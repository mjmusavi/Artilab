import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import DeviceDetails from "./pages/DeviceDetails";
import Service from "./pages/Service";
import Calibration from "./pages/Calibration";
import Documents from "./pages/Documents";
import AI from "./pages/AI";
import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [devices, setDevices] = useState(() => {
    const saved = localStorage.getItem("devices");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingDevice, setEditingDevice] = useState(null);

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

  const filteredDevices = devices.filter((device) =>
    device.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Sidebar />
    <div className="main-content">

  <Routes>

    <Route
      path="/"
      element={
        <Dashboard
          devices={devices}
          filteredDevices={filteredDevices}
          addDevice={addDevice}
          editingDevice={editingDevice}
          updateDevice={updateDevice}
          editDevice={editDevice}
          deleteDevice={deleteDevice}
          search={search}
          setSearch={setSearch}
        />
      }
    />

    <Route
      path="/devices"
      element={<Devices />}
    />

    <Route
  path="/devices/:id"
  element={
    <DeviceDetails
      devices={devices}
    />
  }
/>

    <Route
      path="/service"
      element={<Service />}
    />

    <Route
      path="/calibration"
      element={<Calibration />}
    />

    <Route
      path="/documents"
      element={<Documents />}
    />

    <Route
      path="/ai"
      element={<AI />}
    />

  </Routes>

</div>
    </div>
  );
}

export default App;


