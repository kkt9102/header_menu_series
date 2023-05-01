import Head from "next/head";
import { useRouter } from "next/router";

const PageTitle = () => {
  const router = useRouter();
  return(
    <Head>
      <title>Header Menu Series | {router.query.title}</title>
    </Head>
  )
}

export default PageTitle;