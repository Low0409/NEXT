import Head from 'next/head'
import React from 'react'
import Styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './components/header'
export default function Home() {
  let title = "Blog"


  const addkizi = () => {
    let kiziarea = document.querySelector(".kiziarea");//書き出したい場所
    let title = document.querySelector(".title").value;//書き出したい値
    let text = document.querySelector(".text").value;//書き出したい値

    kiziarea.innerHTML += `<h1 style="  padding: 1rem 2rem;
    border-left: 6px double #000;margin-left:8px;">${title}</h1><h3>${text}</h3>`;

  }

  return (
    <>
      <Head>
        <title>ブログ</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"></script>
      </Head>
      {/* コンポーネントととして */}
      <Header title={title} />
      <Header title="ブログ" />

      {/* 通常 */}
      <h1 className={Styles.title1}>{title}</h1>
      
      <Link href="posts/first-post"><a class="btn page-link rounded-pill" href="#">次 &rarr;</a>
      </Link><br />
      <div className="text-center">
        <input className="title" placeholder="記事タイトル" style={{
          fontSize: "30px",
          width: "50%",
        }}></input><br />
        <textarea className="text mt-2" placeholder="記事内容" style={{
          fontSize: "30px",
          height: "300px",
          width: "50%"
        }}></textarea><br />
        <button onClick={addkizi} className="btn btn-primary" style={{ fontSize: "30px" }}>追加</button>
        <div className="kiziarea"></div>
      </div>


    </>
  )
}