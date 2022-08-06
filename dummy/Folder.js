import React from "react";
import shortid from "shortid";

import SubFolder from "./SubFolder";

const Folder = ({ data }) => {
  return (
    <div>
      {data.map((val, ind, arr) => {
        return (
          <div key={shortid.generate()}>
            <SubFolder val={val} />
          </div>
        );
      })}
    </div>
  );
};

export default Folder;
