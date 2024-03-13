import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./example.css";

const Example = () => {
  console.log("render");
  const [searchText, setSearchText] = useState("");
  const [loader, setLoader] = useState(false);
  const [list, setList] = useState("");
  const [height, setHeight] = useState(700);
  const [page, setPageNo] = useState(1);

  const setText = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("fjfj");
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        debugger;
        setPageNo((prevPage) => {
          setDataList(
            `http://openlibrary.org/search.json?limit=10&page=${
              prevPage + 1
            }&q=`
          );
          return prevPage + 1;
        });
      }
    });
  }, []);

  const setDataList = (url) => {
    console.log(searchText);
    if (searchText) {
      setLoader(true);
      axios
        .get(url + searchText)
        .then((response) => {
          setLoader(false);
          if (list.length) {
            setList((prevList) => {
              // console.log(prevList, response.data.docs)
              console.log([...prevList, ...response.data.docs]);
              return [...prevList, ...response.data.docs];
            });
          } else {
            setList(response.data.docs);
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  // the+lord+of+the+rings
  useEffect(() => {
    setPageNo(1);
    let timer;
    timer = setTimeout(() => {
      setDataList(`http://openlibrary.org/search.json?limit=10&q=`);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <div>
      <input type="text" value={searchText} onChange={setText} />
      {loader && <div>Loading</div>}
      {list &&
        list.map((data) => {
          return (
            <div className="card">
              <NavLink to="/detail">{data.title}</NavLink>
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(Example);
