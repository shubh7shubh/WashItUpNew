import LaundryNav from "../LaundryMain/index";

import LaundryBody from "../LaundryBody/index";

import { useEffect, useState } from "react";

const Laundry = () => {
  const [typeAB, setAB] = useState(false);

  useEffect(() => {
    const url = window.location.href;
    url.slice(-1) === "b" && setAB(true);
  }, []);

  /**console.log(typeAB);*/

  return (
    <>
      <LaundryNav />
      <LaundryBody typeAB={typeAB} />
    </>
  );
};

export default Laundry;
