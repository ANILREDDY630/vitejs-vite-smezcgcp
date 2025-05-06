import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Dashboard() {
  const navigate = useNavigate();

  const handleAddMovie = () => {
    navigate("/add-movie");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Movie Dashboard</h1>
        <button
          onClick={handleAddMovie}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Movie
        </button>
      </div>

      {/* Sample Movie List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MovieCard title="Inception" director="Christopher Nolan" />
        <MovieCard title="The Matrix" director="Wachowski Sisters" />
      </div>
    </div>
  );
}

export default Dashboard;
