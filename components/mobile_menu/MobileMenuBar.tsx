import { MdClose } from "react-icons/md";
import MobileMenuSection from "./MobileMenuSection";
import { Great_Vibes } from "next/font/google";

type Props = {
  openMobileMenu: boolean;
  handleOpenMobileMenu: any;
};

const SignatureFont = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

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
          <div className={SignatureFont.className}>
            <h1 className="text-3xl mt-2 tracking-wide bg-gradient-to-r from-secondary to-primary p-2 text-transparent bg-clip-text">
              Marvinel
            </h1>
          </div>
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
