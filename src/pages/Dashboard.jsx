import Header from "../components/Header";
import DashboardCards from "../components/DashboardCards";
import AddDevice from "../components/AddDevice";
import DeviceTable from "../components/DeviceTable";

export default function Dashboard({
  devices,
  filteredDevices,
  addDevice,
  editingDevice,
  updateDevice,
  editDevice,
  deleteDevice,
  search,
  setSearch,
}) {
  return (
    <>
      <Header />

      <DashboardCards devices={devices} />

      <AddDevice
        addDevice={addDevice}
        editingDevice={editingDevice}
        updateDevice={updateDevice}
      />

      <hr />

      <h2>Device List</h2>

      <input
        type="text"
        placeholder="Search Device..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <DeviceTable
        devices={filteredDevices}
        editDevice={editDevice}
        deleteDevice={deleteDevice}
      />
    </>
  );
}