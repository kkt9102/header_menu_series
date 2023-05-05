import PageTitle from "@/components/common/PageTitle";
import Header from "@/components/type2/Header";
import Home from "@/components/type2/Home";

const Type2 = () => {
  return(
    <>
      <PageTitle/>
      <div className="type2">
        <Header/>
        <div className="con">
          <Home/>
        </div>
      </div>
    </>
  )
}

export default Type2;