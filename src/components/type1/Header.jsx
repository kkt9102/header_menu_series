// import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Link } from "react-scroll";

import MenuArray from "@/array/menu";

import Logo from "public/assets/img/logo.png";

const Header = () => {
  const router = useRouter();
  return(
    <header className="fixed flex flex_jc_sb flex_ai_c">
      <div className="logo">
        <Image src={Logo} width={"auto"} height={40} alt=""/>
      </div>
      <ul className="menu_box flex flex_jc_sa flex_ai_c">
        {MenuArray.UseHome.map((item, index) =>
          <li key={index} className="cursor_p">
            <Link className="relative flex flex_jc_sa flex_ai_c " to={`section_${index+1}`} spy={true} smooth={true}>{item.title}</Link>
          </li>
        )}
      </ul>
      <ul className="btn_box flex flex_jc_sa">
        <li className="flex flex_jc_sa flex_ai_c">
          <button onClick={() => router.push("/")}>홈으로</button>
        </li>
        <li className="flex flex_jc_sa flex_ai_c">
          <button onClick={() => window.open("https://github.com/kkt9102/header_menu_series")}>github</button>
        </li>
      </ul>
    </header>
  )
}

export default Header;