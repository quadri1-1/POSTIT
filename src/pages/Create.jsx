import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import "../styles/create.css"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom";
// tag, description, title, image
//nature, lifestyle, sport, technology, others
const Create = () => {
  const { baseURL } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("token");
  const redirect = useNavigate()
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("tag", tag);
    formdata.append("description", description);
    formdata.append("image", image);
    const { data } = await axios.post(`${baseURL}/story`, formdata, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
      { title, tag, description, image }
    );
    if (data.success) {
      redirect("/allstories");
    } else {
      
    }
  };

  return (
    <div >
      <Header />
      <div className="container">
      <h2 className="hs">Create Story</h2>
      <form className="oh" encType="multipart/form-data" onSubmit={handleCreate}>
        <div className="tit">
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
        </div>
        <div className="tit">
          <select
            name=""
            id="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option value="">Select Tags</option>
            <option value="nature">Nature</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="sport">Sport</option>
            <option value="technology">Technology</option>
            <option value="others">Other Tag</option>
          </select>
        </div>
        <div className="can">
          <label className="tits" htmlFor="image">Upload Image</label>
          <input
            accept="image/*"
            type="file"
            placeholder="selce image"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="tit">
          <textarea
            name=""
            id="description"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="write your story......."
          ></textarea>
          </div>
          <div className="writ">
            <button className="wri" type="submit">{loading ? "creating..." : "Write story"}</button>
            </div>
        </form>
        </div>
    </div>
  );
};

export default Create;
