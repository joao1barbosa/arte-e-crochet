import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

import Image from "next/image";

export function Navbar() {
  return (
    <nav className="z-50 bg-pink-900 shadow-md p-4">
      <div className="flex justify-between items-center">
        <h3>logo</h3>
        <NavigationMenu>
          <NavigationMenuList className="space-x-5">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#section1">Seção 1</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#section2">Seção 2</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#section3">Seção 3</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}