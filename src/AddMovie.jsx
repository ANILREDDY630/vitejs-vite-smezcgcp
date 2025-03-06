import React from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();

  return (
    <div className="add-movie">
      <h2>Add a New Movie</h2>
      <form>
        <label>Title:</label>
        <input type="text" placeholder="Enter movie title" required />

        <label>Director:</label>
        <input type="text" placeholder="Enter director's name" required />

        <label>Genre:</label>
        <select required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
        </select>

        <label>Release Year:</label>
        <input type="number" placeholder="Enter release year" required />

        <label>Synopsis:</label>
        <textarea placeholder="Enter synopsis" required></textarea>

        <label>Poster Image URL:</label>
        <input type="url" placeholder="Enter poster image URL" required />

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
