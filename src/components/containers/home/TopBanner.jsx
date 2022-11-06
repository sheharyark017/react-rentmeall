import React from "react";
import classes from "./TopBanner.module.css";

const TopBanner = () => {
  return (
    <>
      {/* top banner  */}
      <div className={classes["top-banner"]}>
        <div className={classes["top-text"]}>
          <p className={classes["head"]}>
            Rent <span className={classes["text-animation"]}></span> <br /> from
            people in your area
          </p>
          <p className={classes["para"]}>
            Borrow almost anything from people nearby for jobs at home, fun
            experiences or work.
          </p>
        </div>
        <form action="" className={classes["main-search-form"]}>
          <div className={classes["icon"]}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className={classes["input"]}>
            <input
              type="text"
              placeholder="drones, bikes, cameras..."
              required
            />
          </div>
          <div className={classes["button"]}>
            <button>Search</button>
          </div>
        </form>
        <p className={classes["search-bottom"]}>
          {" "}
          <span>or</span>{" "}
          <a href="/" className={classes["add-item"]}>
            List an Item +
          </a>
        </p>
      </div>

      {/* end top banner */}
    </>
  );
};

export default TopBanner;
