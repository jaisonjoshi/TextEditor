import React, { useCallback, useState, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Navbar from "../components/Navbar";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
const isEqual = require("lodash/isEqual");



function TextEditor() {

  const [saving, setSaving] = useState(false);
  const { id } = useParams();
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();


  //   Creating the autosaving indicator text in the toolbar

  useEffect(() => {
    const toolbar = document.getElementsByClassName("ql-toolbar")[0];
    const saveStatus = document.createElement("p");
    saveStatus.classList.add("save-status");
    saveStatus.innerHTML = "hello";
    toolbar.appendChild(saveStatus);

    return () => {
      toolbar.removeChild(saveStatus);
    };
  }, []);




  // Chnaging the autosave indication based on saving instances

  useEffect(() => {
    const saveStatus = document.querySelector(".save-status");
    if (saving) {
      saveStatus.innerHTML = "Saving...";
    } else {
      saveStatus.innerHTML = "All changes are saved";
    }
  }, [saving]);




  // Loading the document once a text editor is opened

  useEffect(() => {
    if (socket == null || quill == null) return;

    socket.once("load-document", (document) => {
      quill.setContents(document);
      quill.enable();
    });

    socket.emit("get-document", id);
  }, [socket, quill, id]);



  //Autosaving the changes made by the user periodically only if there is some changes

  useEffect(() => {
    if (socket == null || quill == null) return;

    let previousContents = quill.getContents();
    console.log(previousContents);
    const interval = setInterval(() => {
      const currentContents = quill.getContents();
      console.log(currentContents);
      const areEqual = isEqual(previousContents, currentContents);
      if (!areEqual) {
        setSaving(true);
        socket.emit("save-document", currentContents);
        socket.on("saved", () => {
          setSaving(false);
        });
      }

      previousContents = currentContents;
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [socket, quill]);




  //Establishing connection using socket.io
  useEffect(() => {
    const soc = io("http://localhost:5000");
    console.log("connecting to server");
    setSocket(soc);

    return () => {
      soc.disconnect();
    };
  }, []);





  //Creating an instance of Quill

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const quillObj = new Quill(editor, { theme: "snow" });
    quillObj.disable();
    setQuill(quillObj);
  }, []);



  
  return (
    <div>
      <Navbar />
      <div className="editor-container" ref={wrapperRef}></div>
    </div>
  );
}

export default TextEditor;
