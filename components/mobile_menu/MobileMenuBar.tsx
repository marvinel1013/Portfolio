import Image from "next/image";
import MyLogo from "../../assets/images/MyLogo.png";
import { MdClose } from "react-icons/md";
import MobileMenuSection from "./MobileMenuSection";

type Props = {
  openMobileMenu: boolean;
  handleOpenMobileMenu: any;
};

function MobileMenuBar({ openMobileMenu, handleOpenMobileMenu }: Props) {
  return (
    <div
      className={
        openMobileMenu
          ? "fixed h-full w-full top-0 left-0 bg-gray-500/10 backdrop-blur md:hidden"
          : " "
      }
    >
      <div
        className={
          openMobileMenu
            ? "fixed top-0 left-0 h-full w-[75%] bg-dark p-5 shadow-xl shadow-secondary duration-500 ease-in"
            : "fixed top-0 left-[-100%] h-full w-[75%] bg-dark p-5 shadow-xl shadow-secondary duration-500 ease-in"
        }
      >
        <div className="flex items-center justify-between">
          <Image
            onClick={handleOpenMobileMenu}
            src={MyLogo}
            alt="my-logo"
            width={45}
            className="shadow-lg shadow-primary rounded-md animate-pulse"
          />
          <div
            onClick={handleOpenMobileMenu}
            className=" shadow-md shadow-secondary p-1 rounded-full"
          >
            <MdClose size={20} />
          </div>
        </div>
        <MobileMenuSection />
      </div>
    </div>
  );
}

export default MobileMenuBar;
