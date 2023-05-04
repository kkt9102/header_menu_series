import MenuArray from "@/array/menu";
import Image from "next/image";
import Link from "next/link";

import Logo from "public/assets/img/logo.png";

const Header = () => {
  return(
    <header className="fixed flex flex_jc_sb flex_ai_c">
      <div className="logo">
        <Image src={Logo} alt="" width={"auto"} height={40}/>
      </div>
      <div className="head_menu">
        <ul className="flex flex_jc_sb">
          {MenuArray.Type4.map((item, index) =>
            <li key={index} className="relative cursor_p">
              <span className="title">{item.title}</span>
              <div className="depth_1 depth absolute">
                <ul>
                  {item.depth_1.map((item, index) =>
                    <li key={index} className="cursor_p">
                      {item.depth_2.length !== 0 ?
                        <>
                          <span className="title">{item.title}</span>
                          <div className="depth_2 depth absolute">
                            <ul>
                              {item.depth_2.map((item, index) =>
                                <li key={index}>
                                  <span>{item.title}</span>
                                </li>
                              )}
                            </ul>
                          </div>
                        </>
                        :
                        <span className="title">
                          <Link href="#">{item.title}</Link>
                        </span>
                      }
                    </li>
                  )}
                </ul>
              </div>
            </li>
          )}
        </ul>
      </div>
      <div className="my_menu">
        <ul className="flex flex_jc_sb flex_ai_c">
          <li>

          </li>
          <li>

          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;