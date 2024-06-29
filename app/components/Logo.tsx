import Image from "next/image";
import { AspectRatio } from "@/components/aspect-ratio";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src="/images/chatt.png"
            alt="logo"
            width={50}
            height={30}
            className="dark:filter dark:invert"
          />
        </AspectRatio>
        
      </div>
    </Link>
  );
};

export default Logo;
