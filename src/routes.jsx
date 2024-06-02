import {
  HomeIcon,
  UserCircleIcon,
  DocumentTextIcon,
  PlusIcon,
  ServerStackIcon,
  RectangleStackIcon,
  ArrowRightOnRectangleIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import FishCreation from "./pages/dashboard/FishCreation";
import FishInvoices from "./pages/dashboard/FishInvoices";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <PlusIcon {...icon} />,
        name: "Fish Creation",
        path: "/fish-creation",
        element: <FishCreation />,
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "Fish Invoices",
        path: "/fish-invoices",
        element: <FishInvoices />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Logout", 
      },
    ],
  },
];

export default routes;
