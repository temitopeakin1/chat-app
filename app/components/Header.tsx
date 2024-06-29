
import DarkModeToggle from "@/components/DarkModeToggle";
import Logo from "./Logo";
import UserButton from "@/components/UserButton";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";


async function Header() {
  const session =  await getServerSession(authOptions)
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* language */}

          {/* session */}

          {/* Dark mode Toggle */}
          <DarkModeToggle />
          {/* User button */}
          <UserButton />

        </div>
      </nav>

      {/* Upgrade banner */}
    </header>
  );
};

export default Header;
