import Image from "next/image";
import Link from "next/link";

import Logo from "public/assets/img/logo.png";

const Header = () => {
  return(
    <header className="flex flex_jc_sb flex_ai_c flex_basis_100">
      <div className="logo">
        <Image src={Logo} alt="" width={"auto"} height={40}/>
      </div>
      <ul className="left_menu flex flex_jc_sb flex_ai_c">

      </ul>
      <ul className="right_menu flex flex_jc_sb flex_ai_c">
        <li>
          <Link href="#" target="_blank"></Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;