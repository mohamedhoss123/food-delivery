import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx"
import { IoIosNotificationsOutline } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx"
import { GiHamburger } from "react-icons/gi";
export const Navbar = () => {
  return (
    <nav className="bg-white border-b px-2 flex justify-between h-16 pl-[50px] pr-[60px]">
      <div className="flex items-center gap-3">
            <GiHamburger className="text-3xl"></GiHamburger>
          <h1>Foodie Link</h1>
      </div>

        <div className="flex items-center gap-8">
            <div className='border rounded-2xl p-2 w-12 h-12 text-3xl'>
                <DropdownMenu>
                    <DropdownMenuTrigger><IoIosNotificationsOutline /></DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
            <DropdownMenu>
                <DropdownMenuTrigger><Avatar className="w-12 h-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar></DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Mohamed</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    </nav>
  );
};