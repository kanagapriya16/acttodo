import React, { Component } from "react";
import Header from "./Header";
import Card from "./Card";
import Todocontainer from "./Todocontainer";

const Actdomain = () => {
  return (
    <div className="bg-black p-10">
      <div className="bg-amber-50 p-10 rounded-md ">
        <Header />
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"} />
          <Card
            bgcolor={"#FD6663"}
            title={"20 December"}
            subtitle={"14:02:34"}
          />
          <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
        </div>
        <Todocontainer />
      </div>
    </div>
  );
};

export default Actdomain;
