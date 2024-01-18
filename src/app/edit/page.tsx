"use client";

import Editor from "@monaco-editor/react";

export type CodeEditorProps = Parameters<typeof Editor>[0];

export default function CodeEditor(props: CodeEditorProps) {
	return <Editor {...props} />;
}