import Image from "next/image";
import Link from "next/link";

import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

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
        <Menu />
      </div>
    </header>
  );
};

export default Header;
