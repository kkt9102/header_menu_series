import Link from "next/link";
import Image from "next/image";

import MenuArray from "@/array/menu";

import Logo from "public/assets/img/logo.png";

const Header = () => {
  return(
    <header className="flex flex_jc_sb flex_ai_c flex_basis_100">
      <div className="logo">
        <Image src={Logo} alt="" width={"auto"} height={40}/>
      </div>
      <ul className="flex flex_jc_sa flex_ai_c">
        {MenuArray.UseDepth.map((item, index) =>
          <li key={index} className="relative">
            {item.depth.length !== 0 ?
              <>
                <span className="flex flex_jc_c flex_ai_c">{item.title}</span>
                <div className="depth_menu absolute">
                  <ul>
                    {item.Depth.map((item, index) =>
                      <li key={index} className="flex flex_jc_c flex_ai_c">
                        <Link href="#" className="relative flex flex_jc_c flex_ai_c">{item.title}</Link>
                      </li>
                    )}
                  </ul>
                </div>
              </>
              :
              <span className="flex flex_jc_c flex_ai_c cursor_p">{item.title}</span>
            }
          </li>
        )}
      </ul>
    </header>
  )
}

export default Header;