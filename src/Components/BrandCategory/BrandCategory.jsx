import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bcard from "./Bcard";

const BrandCategory = () => {
  const [categorys, setCategorys] = useState(null);
  
  console.log(categorys);
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <>
      <section className="text-gray-600 body-font max-w-5xl mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-2 xl:grid-cols-6 gap-5">
            {categorys?.map((category) => (
              <Bcard key={category.id} category={category}></Bcard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandCategory;
