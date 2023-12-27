import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./NavBar";
import axios from "axios";
import { useState } from "react";
import Spinner from "./spinner";
import InitialCard from "./initialCard";
import { useEffect } from "react";

function Home() {
  const [inputData, setinputData] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [Selection, setSelection] = useState("");
  
useEffect(() => {
 console.log(Selection)
}, [Selection])



  const handleInputData = (e) => {
    setinputData(e.target.value);
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await axios.post("http://localhost:3001/chat", {
        prompt: inputData,
      });
      if (result) {
        setResponse(result.data);
        setLoading(false);
        setinputData("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-bgColor h-screen flex flex-col">
      <NavBar />

      <div className="flex-grow flex justify-center items-end pb-5">
        <div className="flex flex-col gap-10 w-full items-center">
          <div className="text-textColor w-full px-3 lg:w-1/2 md:w-full flex justify-center">
            {response ? <p>{response}</p> : <InitialCard setSelection={setSelection}/>}
          </div>

          <div className="w-full px-3 lg:w-1/2 md:w-full  flex items-end  gap-3">
            <textarea
              rows="1"
              value={inputData}
              className="w-full rounded-lg bg-bgColor border border-lineColor p-3 resize-y  text-textColor max-h-40 overflow-hidden"
              placeholder="Type a message..."
              onChange={handleInputData}
            ></textarea>
            {loading ? (
              <Spinner />
            ) : (
              <div className="flex-shrink-0 h-10 flex items-center">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-textColor"
                  onClick={handleSubmit}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
