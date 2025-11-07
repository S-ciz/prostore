import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "./ui/sheet";

import { Button } from "./ui/button";
import { EllipsisVertical, ShoppingCart } from "lucide-react";
import Dropdown from "./dropdown";

const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <EllipsisVertical />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <div className="py-5 flex flex-col gap-5 items-start justify-items-start">
            <Dropdown />
            <Button className="border-none outline-none" variant="outline">
              <ShoppingCart /> Cart
            </Button>
            <Button className="border-none">Sign in</Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
