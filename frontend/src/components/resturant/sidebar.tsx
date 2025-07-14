import { HiUsers } from "react-icons/hi2";
import { IoPizzaSharp } from "react-icons/io5";
import { FaChartPie,FaBook } from "react-icons/fa";
import { Link } from '@tanstack/react-router'
export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 pt-7">
          <Link className="space-4 flex flex-row  gap-2 pl-15"
              to="/resturant/home"
          >
        <HiUsers className="text-xl"></HiUsers>
        <h1 className=" ">Customers</h1>
          </Link>

           <Link className="space-4 flex flex-row  gap-2 pl-15 pt-7"
               to="/resturant/home"
           >
               <FaChartPie className="text-xl"></FaChartPie>
               <h1 className=" ">Report</h1>
           </Link>

           <Link className="space-4 flex flex-row  gap-2 pl-15 pt-7"
               to="//resturant/item"
           >
               <IoPizzaSharp className="text-xl"></IoPizzaSharp>
               <h1 className=" ">Items</h1>
           </Link>

           <Link className="space-4 flex flex-row  gap-2 pl-15 pt-7"
               to="/resturant/home"
           >
               <FaBook className="text-xl"></FaBook>
               <h1 className=" ">Orders</h1>
           </Link>

    </aside>
  );
};