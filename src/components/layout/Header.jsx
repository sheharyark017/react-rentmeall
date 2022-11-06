import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <div className={classes["inner-header"]}>
          <div className={classes["logo"]}>
            <p>RentMeAll</p>
          </div>
          <div className={classes["navlinks"]}>
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Item Listings</a>
                </li>
                <li>
                  <a href="/" className={classes["add-item"]}>
                    List an Item +
                  </a>
                </li>
              </ul>
            </nav>
            <div className={classes["account-dropdown"]}>
              <div className={classes["dropdown-image"]}>
                <img src="images/avatar.webp" alt="" />
              </div>
              <div className={classes["dropdown-links"]}>
                <ul>
                  <li>
                    <a href="/">Profile</a>
                  </li>
                  <li>
                    <a href="/">My Items</a>
                  </li>
                  <li>
                    <a href="/">My Rentals</a>
                  </li>
                  <div className={classes["phone-nav"]}>
                    <ul>
                      <li>
                        <a href="/">Item Listings</a>
                      </li>
                      <li>
                        <a href="/">List an Item</a>
                      </li>
                    </ul>
                  </div>
                  <form className={classes["signout-form"]} action="">
                    <li>
                      <button className={classes["signout-btn"]}>
                        Signout
                      </button>
                    </li>
                  </form>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
