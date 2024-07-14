import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "./ScrolledToTop.css";

const ScrolledToTop = () => {
  const [scrolling, setScrolling] = useState(0);
  const [active, setActive] = useState(false);

  const onScroll = () => {
    let posnow = document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (posnow * 100) / height;
    const scrollvalue = Math.round(scrolled);
    if (window.scrollY > 500) {
      setActive(true);
    } else {
      setActive(false);
    }
    setScrolling(scrollvalue);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBacttoTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <div
      className={active ? "scrollprogress progress-active" : "scrollprogress"}
      style={{
        background: `conic-gradient(#03cc65 ${scrolling}% ,#d7d7d7 ${scrolling}%)`,
      }}
      onClick={handleBacttoTop}
    >
      <div className="progressvalue">
        <IoIosArrowUp />
      </div>
    </div>
  );
};

export default ScrolledToTop;
