import { Outlet, createFileRoute } from '@tanstack/react-router'
import {Navbar} from "@/components/resturant/navbar.tsx";
import {Sidebar} from "@/components/resturant/sidebar.tsx";

export const Route = createFileRoute('/resturant')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="flex flex-col">
      <Navbar></Navbar>
      <div className="flex flex-row">
          <Sidebar></Sidebar>
          <Outlet />
      </div>
  </div>
}
