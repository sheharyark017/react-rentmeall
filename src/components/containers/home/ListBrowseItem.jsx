import React from "react";
import phone from "../../../assets/images/phone.png";

import classes from "./ListBrowseItem.module.css";

const ListBrowseItem = () => {
  return (
    <>
      {/* <!-- list Item --> */}

      <div className={classes["list-browse-item"]}>
        <div className={classes["item"]}>
          <div className={classes["item-text"]}>
            <div className={classes["item-text-top"]}>
              <p>Share your stuff, earn cash</p>
            </div>
            <div className={classes["item-text-bottom"]}>
              <p>
                Pay back your purchases by lending them to people in your area
                when you're not using them.
              </p>
              <p>
                Do it all worry free with verified borrowers and lender
                protection up to £25,000 per item.
              </p>
            </div>
            <div className={classes["item-text-btn"]}>
              <a href="/">Start Earning</a>
            </div>
          </div>
          <div className={classes["item-image"]}>
            <img src={phone} alt="" />
          </div>
        </div>
      </div>

      {/* <!-- end list Item --> */}

      {/* <!-- browse Items --> */}

      <div className={`${classes["list-browse-item"]} ${classes["browse"]}`}>
        <div className={classes["item"]}>
          <div className={classes["item-image"]}>
            <img src={phone} alt="" />
          </div>
          <div className={classes["item-text"]}>
            <div className={classes["item-text-top"]}>
              <p>Get access to (almost) anything</p>
            </div>
            <div className={classes["item-text-bottom"]}>
              <p>
                Why buy the things you'll only use a few times a month? When you
                can rent them for a fraction of the price?
              </p>
              <p>More money for you. Less waste for the planet.</p>
            </div>
            <div className={classes["item-text-btn"]}>
              <a href="/">Start Browsing</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- end browse Items --> */}
    </>
  );
};

export default ListBrowseItem;
