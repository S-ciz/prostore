import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Check, MoonIcon, SunIcon, SunMoon } from "lucide-react";

export default function Dropdown() {

      const { theme, setTheme } = useTheme();

  function displaysThemeIcon() {
    switch (theme) {
      case "light": {
        return <SunIcon />;
      }
      case "dark": {
        return <MoonIcon />;
      }
      default: {
        return <SunMoon />;
      }
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2">{displaysThemeIcon()} Mode</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System {theme === "system" && <Check />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light {theme === "light" && <Check />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark {theme === "dark" && <Check />}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
