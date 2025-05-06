import { useNavigate } from "react-router-dom";
import AddMovieForm from "../components/AddMovieForm";

function AddMovie() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Movie submitted (hypothetically)!");
    navigate("/");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Movie</h2>
      <AddMovieForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}

export default AddMovie;
