import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from './Table';
import Navbar from "../../widgets/layout/navbar";
import Footer from "../../widgets/layout/footer";
import Sidenav from "../../widgets/layout/sidenav"; 
import routes from "../../routes"
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";
function AllDistributors() {
    const navigate = useNavigate();

    const handleDeleteClick = (itemToDelete) => {
      console.log("Item to delete:", itemToDelete);
    };
  
    const handleUpdateClick = (itemId) => {
      console.log("Item ID to update:", itemId);
      // navigate(`/invoice/edit/${itemId}`);
    };
  
    const handleDetailsClick = (itemId) => {
      console.log("Item ID to view details:", itemId);
      navigate(`/distributor/details/${itemId}`);
    };
    
    const actions = [
        {
          name: "View",
          onClick: (item) => handleDetailsClick(item.id),
        },
        {
          name: "Edit",
          onClick: (item) => handleUpdateClick(item.id),
        },
        {
          name: "Delete",
          color: "red",
          onClick: handleDeleteClick,
        },
    ];
    
    // Sample data for testing
    const Data = [
      { id: 1, name: "species 1", contact_number: "03030232344422", email:"abc@gmail.com",city:"abc", address:"abc" },
      { id: 2, name: "species 2", contact_number: "03030232344422 " ,email:"abcd@gmail.com",city:"abddddc", address:"abc" },
      { id: 3, name: "species 3", contact_number: "03030232344422", email:"abcd@gmail.com",city:"awerwbc", address:"abc" },
  ];

    return (
        <div className="xl:ml-80">
            <DashboardNavbar routes={routes} />
            <Sidenav routes={routes} /> 
            <div className='p-4 w-full'>
                <div className='text-2xl font-bold mb-4'>All Distributors</div>
                <Table actions={actions} data={Data} />
            </div>
            <Footer />
        </div>
    );
}

export default AllDistributors;
