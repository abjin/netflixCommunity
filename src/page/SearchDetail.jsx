import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ContentBox from "../components/ContentBox";
import SearchInput from "../components/SearchInput";

import "./style/SearchDetail.css";

function SearchDetail() {
  const { input } = useParams();
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get("/search", {
        params: {
          input,
        },
      })
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
        console.log(result);
      })
      .catch((err) => {
        alert(err);
      });
  }, [input]);

  return (
    <div className="search_detail">
      <SearchInput />
      {result.length == 0 ? (
        <div className="search-noPost">게시물이 존재 하지 않습니다.</div>
      ) : (
        <div className="search_list">
          {result.map((item, idx) => {
            return <ContentBox key={idx} data={item}></ContentBox>;
          })}
        </div>
      )}
    </div>
  );
}

export default SearchDetail;
