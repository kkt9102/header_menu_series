import Table from "../common/Table";

const Home = () => {
  const TypeInfo = [
    {
      td: "false"
    },
    {
      td: "false"
    },
    {
      td: "none"
    },
    {
      td: "false"
    },
    {
      td: "true"
    }
  ];
  return(
    <div id="section_1" className="section">
      <h1 className="page_tit">Home</h1>
      <p className="mar_bot_30">가장 일반적인 메뉴 스타일입니다.</p>
      <Table TypeInfo={TypeInfo}/>
    </div>
  )
}

export default Home;