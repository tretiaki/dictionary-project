import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        {props.examples.map(function (example, index) {
          return (
            <div key={index}>
              <strong>Examples: </strong>
              {example}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
