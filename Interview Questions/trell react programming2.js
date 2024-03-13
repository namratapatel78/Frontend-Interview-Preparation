import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
// import { Link, BrowserRouter as Router } from "react-router-dom";
import "./styles.css";

const Example = () => {
  const [searchText, setSearchText] = useState("");
  const [loader, setLoader] = useState(false);
  const [list, setList] = useState("");
  const [page, setPageNo] = useState(1);
  const pageLoaded = useRef(false);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      pageLoaded.current
    ) {
      pageLoaded.current = false;
      setPageNo((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (page > 1) {
      setDataList(
        `https://openlibrary.org/search.json?limit=10&page=${page}&q=`,
        searchText
      );
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setText = (e) => {
    e.preventDefault();
    setList([]);
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (searchText) {
      setPageNo(1);
      let timer;
      timer = setTimeout(() => {
        setDataList(
          `https://openlibrary.org/search.json?limit=10&q=`,
          searchText
        );
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchText]);

  const setDataList = async (url, searchText) => {
    try {
      if (searchText) {
        setLoader(true);
        const response = await axios(url + searchText);
        setLoader(false);
        if (list.length) {
          setList((prevList) => {
            return [...prevList, ...response.data.docs];
          });
        } else {
          setList(response.data.docs);
        }
      }
      pageLoaded.current = true;
    } catch (error) {
      console.log("Error: ", error);
      pageLoaded.current = true;
    }
  };

  return (
    <div>
      <input type="text" value={searchText} onChange={setText} />
      {loader && <div>Loading</div>}
      {list &&
        list.map((data, index) => {
          return (
            <div key={index} className="card">
              <a target="_blank" href={`https://openlibrary.org${data.key}`}>
                {data.title}
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(Example);
