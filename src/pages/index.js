import Head from "next/head";
import React from "react";

import Notes from "../components/notes";
import AppHeader from "../components/app-header";

// FEEDBACK
// Libs:
// Using Dexie was cheating a little :D It's cool that it makes everything easier, 
// but the library is absolutely massive considering that index DB is pretty straightforward to use and is not that complicated.

// React:
// The modal is good solution, maybe if you try to implement it yourself again, try to do it in a portal. 
// It's not important here, but reusable modals are usually better with portals so that they can be shown from anywhere in the app.

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
          <h3>Ideas what to improve</h3>
          <ul>
            <li>Use library for better styles: buttons, modals, alert</li>
            <li>Handle errors: for devs and for user</li>
            <li>Play with styling: colorful notes, lines, ..</li>
            <li>Improve functionality: retrieve notes notes from db in the original order, update notes, drag and drop notes, group notes, ..</li>
            <li>Write tests...</li>
          </ul>
        </div>
      </main>
    </>
  );
}
