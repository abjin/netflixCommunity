import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SearchDetail() {
  const { input } = useParams();
  const [Input, setInput] = useState("");

  useEffect(() => {
    setInput(input);
    axios
      .get("/search", {
        params: {
          input,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [input]);

  return (
    <div className="search_detail">
      {Input},{input}
    </div>
  );
}

export default SearchDetail;
