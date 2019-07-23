import React from "react";
import { IMAGE_URL } from "../../../config";

const Actor = props => {
  return (
    <div className="actor">
      <img
        src={
          props.actor.profile_path
            ? `${IMAGE_URL}w154${props.actor.profile_path}`
            : './images/no_image_found.jpg'
        }
        alt="actor"
      />
      <div className="actor-name">{props.actor.name}</div>
      <div className="actor-character"> ({props.actor.character})</div>
    </div>
  );
};

export default Actor;
