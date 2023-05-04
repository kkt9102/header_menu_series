import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {

  return (
    <>
      <Head>
        <title>Header Menu Series</title>
        <meta name="description" content="Header Menu Series. Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keyword" content="header menu, 헤더메뉴, html 메뉴, css 메뉴"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex_dir_c">
          <Link href={{pathname: "Type1/Type1" , query: {title: "Type1"}}} as="Type1/Type1">Type1 가기</Link>
          <Link href={{pathname: "Type2/Type2" , query: {title: "Type2"}}} as="Type2/Type2">Type2 가기</Link>
          <Link href={{pathname: "Type3/Type3" , query: {title: "Type3"}}} as="Type3/Type3">Type3 가기</Link>
          <Link href={{pathname: "Type4/Type4" , query: {title: "Type4"}}} as="Type4/Type4">Type4 가기</Link>
        </div>
      </main>
    </>
  )
}
