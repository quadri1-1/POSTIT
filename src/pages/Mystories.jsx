import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/mystories.css";
const Mystories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const getStories = async () => {
    setLoading(true);
    const {
      data: { stories },
    } = await axios(`${baseURL}/story`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    setStories(stories);
    console.log(stories);
  };
  useEffect(() => {
    getStories();
  }, []);

  const handleDelete = async (id) => {
    const { data } = await axios.delete(`${baseURL}/story/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.success) {
      window.location.reload();
    }
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="d-flex justify-content-between">
          <h1>My stories</h1>
          <button className="btn bg-black ">
            <Link className="text-decoration-none text-white" to="/create">
              Write Stroey
            </Link>
          </button>
        </div>
        <div className="dats">
          <section className="d-flex">
            <p className="fact">All</p>
            <p>Draft</p>
            <p>Published</p>
          </section>
          <hr />
        </div>
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {stories.map((s) => {
                const { _id, description, title } = s;
                return (
                  <div key={_id}>
                    <div>
                      <p className="wells">{title} </p>
                      <div className="d-flex justify-content-between">
                        <p className="desp">{description.slice(0, 200)}... </p>
                        <div>
                          <Link to={`/edit/${_id}`}>
                            <button className="edt">Edit Story</button>
                          </Link>
                          <button
                            className="dell"
                            onClick={() => handleDelete(_id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mystories;
