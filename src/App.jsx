import React, { useEffect } from "react";
import "./App.css";
import { ArrayUtils, Box, Button } from "@adityawarrier/react-lib";

export const App = () => {
  useEffect(() => {
    const arr = [1, 1, 1, 2, 3, 3, 4, 5, 5, 5, 5, 5, 6, 6, 7, 8, 9, 9, 10];
    console.log(ArrayUtils.removeDuplicates(arr));
  }, []);

  return (
    <>
      <div className={"container"}>
        <p>React App with Webpack & Babel</p>
        <Button
          title="Padddu!"
          onClick={() => {
            console.log("Am Paddu Rani");
          }}
        />
        <Box size={400} color="red" />
      </div>
    </>
  );
};
