
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import Logo from "./Logo";
import UserButton from "@/components/ui/UserButton";


const Header = () => {
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
