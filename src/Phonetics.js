import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
        Listen
      </a>

      {props.phonetic.text}
    </div>
  );
}
