import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto py-4 gap-2">
      <Card width={"w-full sm:basis-1/3"} start={"false"} para={"true"} />
      <Card
        width={"w-full sm:basis-2/3"}
        start={"true"}
        para={"false"}
        hover={"bg-violet-500"}
      />
    </div>
  );
}

export default Cards;
