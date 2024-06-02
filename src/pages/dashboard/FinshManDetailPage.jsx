import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import Footer from "../../widgets/layout/footer";
import Sidenav from "../../widgets/layout/sidenav"; 
import routes from "../../routes"
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";
function FinshManDetailPage() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    // Fetch the detailed data based on the id
    // For now, let's mock the data fetching
    const fetchData = async () => {
      const data = {
        name: "John Doe",
        contact: "123-456-7890",
        email: "john.doe@example.com",
        city: "New York",
        address: "123 Main St, New York, NY 10001",
      };
      setDetailData(data);
    };

    fetchData();
  }, [id]);

  if (!detailData) {
    return <Typography>Loading...</Typography>;
  }

  return ( <div className="xl:ml-80">
  <DashboardNavbar routes={routes} />
  <Sidenav routes={routes} /> 
    <Card className="m-4 p-4">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-4">
          Detail Page
        </Typography>
        <Typography>Name: {detailData.name}</Typography>
        <Typography>Contact: {detailData.contact}</Typography>
        <Typography>Email: {detailData.email}</Typography>
        <Typography>City: {detailData.city}</Typography>
        <Typography>Address: {detailData.address}</Typography>
      </CardBody>
    </Card>
    <Footer />
  </div>
  );
}

export default FinshManDetailPage;
