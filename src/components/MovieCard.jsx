function MovieCard({ title, director }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-600">Directed by {director}</p>
    </div>
  );
}

export default MovieCard;
