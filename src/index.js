import React from "react";
import ReactDOM from "react-dom";
import pie from "./math.js"; //the name of default export does not have to match
import { doublePi, triplePi } from "./math.js"; //names of non defaults have to match
import * as pi from "./math.js"; //import entire package as object

ReactDOM.render(
  <ul>
    <li>{pie}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
    <li>{pi.default}</li>
  </ul>,
  document.getElementById("root")
);
