import React from "react";
import plywood from "../../assets/Rectangle 6879.png";
import nut from "../../assets/Rectangle 6871.png";
import mica from "../../assets/Rectangle 6880.png";

const data=[
    {img:plywood,title:"Plywood And Doors",bgcolor:"bg-yellow-700"},
    {img:mica,title:"Plywood And Doors",bgcolor:"bg-blue-700"},
    {img:nut,title:"Plywood And Doors",bgcolor:"bg-fuchsia-600"},
]

const Products = () => {
  return (
    <div className="h-customheight w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold">Our Product Category</h1>
      <div className="h-3/4 w-3/4 flex  justify-between items-center gap-5">
      {data.map((item,index)=>(
        
        <div
          className="h-80  w-96 border-gray-300 border-solid border-2 flex flex-col justify-center items-center gap-5  shadow-lg hover:-translate-y-2 transition"
        >
          <div className={`${item.bgcolor} w-72 h-40 p-2 flex justify-center items-center`}>
            <img src={item.img} alt="" className="w-48" />
          </div>
          <h1 className="font-semibold text-xl">{item.title}</h1>
          <button className='p-2 pl-4 pr-4 bg-blue-700 text-sm cursor-pointer rounded-sm hover:bg-blue-800 text-white ' >See More</button>
        </div>
      
      ))}
      </div>
    </div>
  );
};
export default Products;