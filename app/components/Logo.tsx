import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          {/* <Image
            priority
            src={LogoImage}
            alt="Logo"
            className="dark:filter dark:invent"
          /> */}
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
