"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import Button from "./Button";
import { supabase } from "@supabase/auth-ui-shared";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Link from "next/link";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = ({ className, children, ...props }) => {
  const { onOpen } = useAuthModal();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    // Shuts any playing songs
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged Out");
    }
  };

  return (
    <div
      className={cn("h-fit bg-gradient-to-b from-emerald-800 p-6", className)}
      {...props}
    >
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="hidden items-center gap-x-2 md:flex">
          <button
            onClick={() => router.back()}
            className="flex cursor-pointer items-center justify-center rounded-full bg-black transition hover:opacity-75"
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="flex cursor-pointer items-center justify-center rounded-full bg-black transition hover:opacity-75"
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex items-center gap-x-2 md:hidden">
          <Link
            href={"/"}
            className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75"
          >
            <HiHome size={20} className="text-black" />
          </Link>
          <Link
            href={"/search"}
            className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75"
          >
            <BiSearch size={20} className="text-black" />
          </Link>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          {user ? (
            <>
              <div className="">
                <Button onClick={handleLogout} className="bg-white px-6 py-2">
                  Log Out
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => router.push("/account")}
                  className="bg-white"
                >
                  <FaUserAlt />
                </Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <Button
                  onClick={onOpen}
                  className="bg-transparent font-medium text-neutral-300"
                >
                  Sign Up
                </Button>
              </div>
              <div>
                <Button onClick={onOpen} className="bg-white px-6 py-2">
                  Log In
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
