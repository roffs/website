import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"


const NavBar = () => (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <a href="/#about">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About
                    </NavigationMenuLink>
                </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <a href="/digital-garden">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Digital garden
                    </NavigationMenuLink>
                </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <a href="/contact">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Contact
                    </NavigationMenuLink>
                </a>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu >
)

export default NavBar;