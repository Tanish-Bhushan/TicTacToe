import React, { useEffect, useState } from "react";
import initial from "./initial";
import check from "./check";

const Grid = () => {
  const [grid, setgrid] = useState(initial);
  const [move, setmove] = useState("X");

  const nextmove = (id) => {
    const updated = grid.map((ele) => {
      if (ele.id === id) return { id: id, val: move };
      else return ele;
    });
    const ans = check(updated);
    if (ans) setgrid(initial);
    else setgrid(updated);
    if (move === "X") setmove("O");
    else setmove("X");
  };

  useEffect(() => {}, [grid]);

  return (
    <>
      <div className="parent">
        <div className="grid text-center">
          <h1>Tic Tac Toe</h1>
          <div className="row child">
            {grid.map((ele) => {
              return (
                <div className="col-4 box" key={ele.id}>
                  <button
                    onClick={() =>
                      ele.val === "" ? nextmove(ele.id) : alert("Occupied")
                    }
                  >
                    <h1>{ele.val}</h1>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
