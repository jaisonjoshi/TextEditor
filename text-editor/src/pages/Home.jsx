import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import newDoc from "../assets/newDoc.png";
import { Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";



function Home() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    axios
      .get('https://text-editor-server.jaisonjoshi.repl.co/documents')
      .then((response) => {
        console.log(response.data);
        setDocuments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);



  return (
    <div>

      <Navbar />

      {/* Create new document section */}

      <div className="bg-[#f0f3f4] px-40 py-12">
        <h1 className="text-lg text-[#3e3e3e] mb-8">Start a new document</h1>
        <Link to={`/document/${uuidV4()}`}>
          <img
            src={newDoc}
            alt=""
            className="w-[150px] border border-[1px] border-[#d2d2d2] px-4 py-4 rounded-[10px] cursor-pointer"
          />
        </Link>
      </div>


        {/* Recent Document section */}

      <div className=" px-40 py-12 bg-[white]">
        <h1 className="text-lg text-[#3e3e3e] mb-12">Recent documents</h1>
        {loading ? (
          <div className="flex justify-center py-16">
            <ClipLoader />
          </div>
        ) : (
          <div className="flex gap-[5%] flex-wrap">
            {documents?.map((doc, i) => (
              <Link
                to={`/document/${doc.id}`}
                className="flex flex-col items-center mb-12">
                <img src={newDoc} alt=""
                  className="w-[150px] border border-[1px] border-[#d2d2d2] px-4 py-4 mb-2 rounded-[10px] cursor-pointer"
                />
                <span>Document {i + 1}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      
    </div>
  );
}

export default Home;
