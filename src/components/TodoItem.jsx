import React from "react";

function TodoItem(props) {
  return (
    <div
      /*onClick={props.onChecked(props.id)}*/ onClick={() => {
        props.onChecked(props.id); //sadece çağırılınca çalışır. önceki versiyonda add e bastığımız an triggerlanıyordu.
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default TodoItem;

