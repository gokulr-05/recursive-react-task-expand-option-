import { useState } from "react";
import Folder from "./Folder";
import "./subFolder.css";
let SubFolder = ({ val }) => {
  let [expandFolder, setExpandFolder] = useState(false);

  return (
    <div>
      <p
        onClick={() => {
          setExpandFolder((prev) => {
            return !prev;
          });
        }}
      >
        {val.isFolder === true &&
          (!expandFolder ? (
            <i className="fa-solid fa-caret-right fs-5"></i>
          ) : (
            <i className="fa-solid fa-caret-down"></i>
          ))}
        <span className="ps-1">{val.name}</span>
      </p>
      <div className="pad-left">
        {val.isFolder && expandFolder && <Folder data={val.items} />}
      </div>
    </div>
  );
};

export default SubFolder;
