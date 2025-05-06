function AddMovieForm({ onSubmit, onCancel }) {
    return (
      <form onSubmit={onSubmit} className="space-y-4">
        <input type="text" placeholder="Title" required className="w-full border px-3 py-2" />
        <input type="text" placeholder="Director" required className="w-full border px-3 py-2" />
        <select required className="w-full border px-3 py-2">
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <input type="number" placeholder="Release Year" required className="w-full border px-3 py-2" />
        <textarea placeholder="Synopsis" required className="w-full border px-3 py-2" rows={4}></textarea>
        <input type="url" placeholder="Poster Image URL" required className="w-full border px-3 py-2" />
  
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </form>
    );
  }
  
  export default AddMovieForm;
  