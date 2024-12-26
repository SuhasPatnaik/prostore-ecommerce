import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <Link href="/" className="flex-center">
          <Image
            src="/images/logo.svg"
            width={48}
            height={48}
            alt={`${APP_NAME} logo`}
          />
          <span className="hidden lg:block font-bold text-2xl ml-3">
            {APP_NAME}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
