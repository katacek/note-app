import Head from "next/head";
import React from "react";

// import styles from "@/styles/Home.module.css";
import Notes from "@/components/notes";
import AppHeader from "../components/app-header";


export default function Home() {
  return (
    <>
      <Head>
        <title>Notes app</title>
        <meta name="description" content="Simple app for creating notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <AppHeader />
        <Notes />
        <div>
          <ul>
            <li>Check the styles: classes not used, single / double quotes</li>
            <li>Style modal, buttons, textarea ...</li>
            <li>Make the code look nice</li>
            <li>Use IndexDB instead of local storage</li>
          </ul>
        </div>
      </main>
    </>
  );
}
