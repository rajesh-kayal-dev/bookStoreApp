import React from "react";
import Cards from "../components/Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";
function Course() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white mt-16">
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4" >
        <div className="items-center text-center justify-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here!:)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            aut molestiae autem alias sapiente dicta architecto, iusto porro
            temporibus consequuntur suscipit nam maxime. Labore neque laboriosam
            hic omnis eius suscipit earum, numquam qui odio consequatur rerum
            nobis asperiores tenetur dolor quisquam ab cumque libero maiores. Id
            fugiat eligendi porro autem!
          </p>
          <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
            Back
          </button>
          </Link>
          
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Course;
