import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { MdOutlineReadMore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/allstories.css"

const Allstories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  //get all stories
  const getStories = async () => {
    setLoading(true);
    const {
      data: { stories },
    } = await axios(`${baseURL}/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    setStories(stories);
    console.log(stories);
  };

  const listOfStories = stories.map((s) => {
    const {
      _id,
      image,
      description,
      title,
      createdAt,
      tag,
      createdBy: { username },
    } = s;
    return (
      <div key={_id} className="border2 border-danger ms-3 my-2">
        <div className="  h-auto what">
          <div className=" pics1  m-1 h-50">
            <img
              src={image}
              alt=""
              width={"379px"}
              height={"296px"}
              className="px-1 py-2 "
            />
          </div>
          <p
            className={`${
              tag == "lifestyle"
                ? "lif"
                : tag == "sport"
                ? "spr"
                : tag == "nature"
                ? "nat"
                : tag == "technology"
                ? "why"
                : "oth"
            } Tags`}
          >
            {tag}
          </p>
          <div className="Title ">
            <p>{title}</p>
          </div>
          <div className="d-flex Next">
            <h6>
              <CgProfile /> <span>By</span> {username} -
            </h6>
            <p className="ps-2">{new Date(createdAt).toDateString()}</p>
          </div>
          <p className="des" id="yes">{description.slice(0, 150)}</p>

          <Link to={`/single/${_id}`} className="text-decoration-none  pb-3">
            {" "}
            <MdOutlineReadMore />
            Read More..
          </Link>
        </div>
      </div>
    );
  });

  useEffect(() => {
    getStories();
  }, []);

  return (
    <div>
      <Header />
      
      <div className="d-md-flex py-2 mx-2 wel bg-body-tertiary">
        <div className="mt-3 user container">
          <h1>
            You’ve got a story, Post<span className="text-primary">it</span>.
          </h1>
          <p className="">
            Road trip with friends. Music, attractions, adventure. Fun times,
            good memories. 🚗🎶 What kind of stories do you like?
          </p>
        </div>
      </div>
      <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        {loading ? "Loading.." : listOfStories}
        </div>
        </div>
      <Footer />
    </div>
  );
};
export default Allstories;