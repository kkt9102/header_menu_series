import PageTitle from "@/components/common/PageTitle";
import Header from "@/components/type1/Header";
import Home from "@/components/type1/Home";
import About from "@/components/type1/About";
import Code from "@/components/type1/Code";
import Contact from "@/components/type1/Contact";
import Footer from "@/components/type1/Footer";

const Type1 = () => {
  return(
    <>
      <PageTitle/>
      <div className="type1">
        <Header/>
        <div className="con">
          <Home/>
          <About/>
          <Code/>
          <Contact/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Type1;