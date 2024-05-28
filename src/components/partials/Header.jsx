import NavItem from "./Nav";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Logo from "../Logo";

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function Header() {
  const menuItems = [
    { menu: "Accueil", link: "/" },
    { menu: "À propos", link: "about" },
    { menu: "Services", link: "services" },
  ];

  const btn = useRef();

  return (
    <Navbar disableAnimation>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle ref={btn} />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo size="w-24" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Logo size="w-24" />
        </NavbarBrand>
        <NavItem to="/">Accueil</NavItem>
        <NavItem to="about">À propos</NavItem>
        <NavItem to="services">Nos services</NavItem>
        <NavItem to="project">Nos projets</NavItem>
        <NavItem to="about/#team">Nos experts</NavItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <div className="text-danger bg-red-100 rounded-lg px-2 py-2 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="22 8 22 2 16 2" />
              <line x1="16" x2="22" y1="8" y2="2" />
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +261343874522
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-lg"
              to={item.link}
              onClick={() => btn?.current.click()}
            >
              {item.menu}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
