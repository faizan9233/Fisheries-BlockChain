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
function FishTesterDetailPage() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    // Fetch the detailed data based on the id
    // For now, let's mock the data fetching
    const fetchData = async () => {
      const data = {
        id: id,
        species: "123-456-7890",
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
        <Typography>Fish id: {detailData.id}</Typography>
        <Typography>Species: {detailData.species}</Typography>
        
      </CardBody>
    </Card>
    <Footer />
</div>
  );
}

export default FishTesterDetailPage;
