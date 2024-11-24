"use client";
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState, useEffect } from "react";

export default function Home() {
  const [value, setValue] = useState<string>("code");

  const onSelectionChange = (newValue, event) => {
    console.log("select-change", newValue);
    console.log("select-change-event", event);
  };

  const onCursorChange = (newValue, event) => {
    console.log("cursor-change", newValue);
    console.log("cursor-change-event", event);
  };

  // Render editor
  return (
    <AceEditor
      placeholder="Hello World!"
      mode="javascript"
      theme="monokai"
      name="ace2"
      onLoad={() => console.log("Loaded")}
      onChange={(newValue) => setValue(newValue)}
      onSelectionChange={onSelectionChange}
      onCursorChange={onCursorChange}
      value={value}
      highlightActiveLine
      setOptions={{
        useWorker: false,
        enableBasicAutocompletion: true,
        enableMobileMenu: false,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}
