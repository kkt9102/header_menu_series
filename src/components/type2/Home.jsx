import Table from "../common/Table";

const Home = () => {
  const TypeInfo = [
    {
      td: "false"
    },
    {
      td: "true"
    },
    {
      td: "1"
    },
    {
      td: "true"
    },
    {
      td: "false"
    }
  ];
  return(
    <div className="index">
      <div className="page_ttle">Home</div>
      <p>1Depth 메뉴가 나오는 메뉴 스타일입니다.</p>
      <Table TypeInfo={TypeInfo}/>
    </div>
  )
}

export default Home;