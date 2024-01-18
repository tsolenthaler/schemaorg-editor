'use client'

import MonacoEditor from "@monaco-editor/react";

import useStyles from './useStyles';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MonacoEditor
          height="100vh" // By default, it fully fits with its parent
		  width="100%"
          theme="dark"
          language="json"
          value='{
			"some": "json"
		}'
          //onChange={(value, ev) => {}}
        />
    </main>
  );
}