import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import MenuArray from "@/array/menu";
import { CommonMenu } from "@/array/common";

import Logo from "public/assets/img/logo.png";

const Header = () => {
  const router = useRouter();
  return(
    <header className="fixed flex flex_jc_sb flex_ai_c">
      <div className="logo">
        <Image src={Logo} alt="" width={"auto"} height={40}/>
      </div>
      <div className="head_menu">
        <ul className="flex flex_jc_sb">
          {MenuArray.Type4.map((item, index) =>
            <li key={index} className="relative flex flex_jc_c flex_ai_c cursor_p">
              <span className="title">{item.title}</span>
              <div className="depth_1 depth absolute">
                <ul>
                  {item.depth_1.map((item, index) =>
                    <li key={index} className="relative cursor_p">
                      {item.depth_2.length !== 0 ?
                        <>
                          <span className="title">{item.title}</span>
                          <div className="depth_2 depth absolute">
                            <ul>
                              {item.depth_2.map((item, index) =>
                                <li key={index}>
                                  <span className="title">{item.title}</span>
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
        {CommonMenu.map((item, index) =>
          <li key={index} className="flex flex_jc_sa flex_ai_c">
            <button onClick={
              () => 
              {item.title !== "github" ? 
                router.push(`${item.link}`)
                :
                window.open(`${item.link}`)
              }
            }>{item.title}</button>
          </li>
        )}
        </ul>
      </div>
    </header>
  )
}

export default Header;