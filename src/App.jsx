import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Dashboard } from "@/layouts";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AllFishman from "./pages/dashboard/AllFishman";
import AllFishTester from "./pages/dashboard/AllFishTester";
import FinshManDetailPage from "./pages/dashboard/FinshManDetailPage";
import FishTesterDetailPage from "./pages/dashboard/FishTesterDetailPage";
import AllDistributors from "./pages/dashboard/AllDistributors";
import DistributorsDetailPage from "./pages/dashboard/DistributorsDetailPage";
import AllRetailers from "./pages/dashboard/AllRetailers";
import RetailersDetailPage from "./pages/dashboard/RetailersDetailPage";
import AllCustomer from "./pages/dashboard/AllCustomer";
import CustomerDetail from "./pages/dashboard/CustomerDetail";
function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/fisherman/detail/:id" element={<FinshManDetailPage/>} />
      <Route path="/all/fisher-man" element={<AllFishman/>} />
      <Route path="/all/Customers" element={<AllCustomer/>} />
      <Route path="/all/retailers" element={<AllRetailers/>} />
      <Route path="/all/distributors" element={<AllDistributors/>} />
      <Route path="/all/fish-tester/species" element={<AllFishTester/>} />
      <Route path="/fish-tester/detail/:id" element={<FishTesterDetailPage/>} />
      <Route path="/distributor/details/:id" element={<DistributorsDetailPage/>} />   
      <Route path="/retailer/details/:id" element={<RetailersDetailPage/>} />
      <Route path="/customer/details/:id" element={<CustomerDetail/>} />

    </Routes>
  );
}

export default App;
