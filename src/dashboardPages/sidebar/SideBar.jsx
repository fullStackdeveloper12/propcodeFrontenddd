import React, { useState } from "react";
import {
  BookCheck,
  Home,
  MapPinHouse,
  Package,
  PanelLeft,
  Plus,
  Settings,
  TextQuote,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import EditModal from "../components/EditModal";
import axios from "axios";
import { signOut } from "@/redux/user/userSlice";
import { toast } from "react-toastify";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleLogout = async (e) => {
    e.preventDefault(); // Prevent default link behavior
    try {
      const response = await axios.post(
        "https://propcodebackendadminpaneltesting.onrender.com/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      if (response.data.status) {
        dispatch(signOut());
        toast.success("Successfully Signed out");
        navigate("/signin");
      } else {
        throw new Error("Logout failed");
      }
    } catch (err) {
      console.error("Error logging out:", err);
      toast.error("Failed to Signed out");
    } finally {
      setIsProfileMenuOpen(false); // Close the profile menu
    }
  };

  return (
    <>
      <aside className="fixed inset-y-0 bg-[#00375A] left-0 z-20 hidden w-52 flex-col sm:flex text-white">
        <nav className="flex flex-col gap-4 pl-5 sm:py-5">
          <Link to="/dashboard" className="flex gap-3 items-center">
            <div className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#135C8F] text-lg font-semibold text-primary-foreground md:h-10 md:w-10 md:text-base">
              <Package className="h-5 w-5 transition-all group-hover:scale-110" />
            </div>
            <span className="font-semibold text-lg">PropCodes</span>
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            to="/postproperty"
            className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
          >
            <Plus className="h-4 w-4" />
            Post Property
          </Link>
          <Link
            to="/allproperty"
            className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
          >
            <MapPinHouse className="h-4 w-4" />
            All Property
          </Link>
          <Link
            to="/addblog"
            className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
          >
            <Plus className="h-4 w-4" />
            Add Blog
          </Link>
          <Link
            to="/allblogs"
            className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
          >
            <TextQuote className="h-4 w-4" />
            All Blogs
          </Link>
          <Link
            to="/testimonial"
            className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
          >
            <BookCheck className="h-4 w-4" />
            Testimonial
          </Link>
          <Link
            to="/addabout"
            className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
          >
            <Plus className="h-4 w-4" />
            Add About
          </Link>
        </nav>
      </aside>
      <div className="flex flex-col lg:fixed lg:w-full z-10 sm:gap-4 sm:py-4 bg-[#135C8F] sm:pl-52">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="sm:max-w-xs bg-[#00375A] rounded-lg"
            >
              <nav className="grid gap-3 text-white text-lg font-medium">
                <Link to="/dashboard" className="flex gap-3 items-center">
                  <div className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#135C8F] text-lg font-semibold text-[#52ABBE]-foreground md:h-10 md:w-10 md:text-base">
                    <Package className="h-5 w-5 transition-all group-hover:scale-110" />
                  </div>
                  <span className="font-semibold text-lg">PropCodes</span>
                </Link>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  to="/postproperty"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
                >
                  <Plus className="h-4 w-4" />
                  Post Property
                </Link>
                <Link
                  to="/allproperty"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
                >
                  <MapPinHouse className="h-4 w-4" />
                  All Property
                </Link>
                <Link
                  to="/addblog"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
                >
                  <Plus className="h-4 w-4" />
                  Add Blog
                </Link>
                <Link
                  to="/allblog"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
                >
                  <TextQuote className="h-4 w-4" />
                  All Blogs
                </Link>
                <Link
                  to="/alltestimonial"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
                >
                  <BookCheck className="h-4 w-4" />
                  All Testimonial
                </Link>
                <Link
                  to="/addabout"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
                >
                  <Plus className="h-4 w-4" />
                  Add About
                </Link>
                <Link
                  to="/setting"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-[#52ABBE] text-white font-semibold"
                >
                  <Settings className="h-4 w-4" />
                  Setting
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex"></Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0"></div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <FaUser />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => {
                  setIsModalOpen(true); // Open the modal on click
                  setIsProfileMenuOpen(false); // Close the dropdown
                }}
              >
                Edit Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
      </div>
      <EditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default SideBar;
