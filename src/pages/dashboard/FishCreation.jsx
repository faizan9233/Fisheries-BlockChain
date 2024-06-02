import React, { useState } from 'react';

function FishCreation() {
  const [formData, setFormData] = useState({
    producer: '',
    species: '',
    timestamp: '',
    location: '',
    quality: '',
    handlers: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here (e.g., send it to an API or log it)
    console.log(formData);
  };

  return (
    <div className="w-[90%] mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Fish Creation</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Producer:
              <input
                type="text"
                name="producer"
                value={formData.producer}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Species:
              <input
                type="text"
                name="species"
                value={formData.species}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Timestamp:
              <input
                type="datetime-local"
                name="timestamp"
                value={formData.timestamp}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Quality:
              <input
                type="text"
                name="quality"
                value={formData.quality}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Handlers:
              <input
                type="text"
                name="handlers"
                value={formData.handlers}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FishCreation;
