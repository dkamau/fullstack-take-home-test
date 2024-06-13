import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link href="/">
          <Image
            width={72}
            height={72}
            src="https://books.ello.com/static/media/logoEllo.2b20bb072a0c339867f3cb02fe3515b6.svg"
            alt="Ello"
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
