import MenuArray from "@/array/menu";
import Image from "next/image";
import Link from "next/link";

import Logo from "public/assets/img/logo.png";

const Header = () => {
  return(
    <header className="relative flex flex_jc_sb flex_ai_c flex_basis_100">
      <div className="logo">
        <Image src={Logo} alt="" width={"auto"} height={40}/>
      </div>
      <ul className="left_menu flex flex_jc_sb flex_ai_c">
        {MenuArray.Type3.map((item, index) =>
          <li key={index} className="flex flex_jc_c flex_ai_c">
            <span className="title  cursor_p">{item.title}</span>
            <div className="depth_menu absolute">
              <nav className="con flex flex_jc_sb">
                <ul className="flex flex_as_s">
                  {item.depth.map((item,index) =>
                    <li key={index} className="flex">
                      <Link className="relative cursor_p" href="#">{item.title}</Link>
                    </li>
                  )}
                </ul>
                <div className="page_info_box relative">

                </div>
              </nav>
            </div>
          </li>
        )}
      </ul>
      <ul className="right_menu flex flex_jc_sb flex_ai_c">
        <li className="login">
          <Link href="#">Login</Link>
        </li>
        <li className="mypage">
          <Link href="#">MyPage</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;