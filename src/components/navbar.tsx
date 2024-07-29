import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const LocalNavbar = () => {
  return (
    <Navbar fluid className="bg-black text-white text-xl font-semibold p-4">
      <NavbarBrand as={Link} href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Covered .
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" className="text-white">
          Pricing
        </NavbarLink>
        <NavbarLink href="#" className="text-white">
          About me
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default LocalNavbar;
