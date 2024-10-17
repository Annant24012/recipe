const gettingRecipes = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function page({ params }) {
  const data = await gettingRecipes(params.details);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-64 object-cover rounded-t-lg mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.name}</h1>
        <p className="text-gray-600 mb-2">
          <strong>Cuisine:</strong> {data.cuisine}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Difficulty:</strong> {data.difficulty}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Servings:</strong> {data.servings}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Calories per Serving:</strong> {data.caloriesPerServing}
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Ingredients
        </h2>
        <ul className="list-disc pl-5 mb-4">
          {data.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-600">
              {ingredient}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Instructions
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          {data.instructions.map((instruction, index) => (
            <li key={index} className="text-gray-600">
              {instruction}
            </li>
          ))}
        </ol>
        <p className="text-gray-600 mt-6">
          <strong>Prep Time:</strong> {data.prepTimeMinutes} minutes
        </p>
        <p className="text-gray-600">
          <strong>Cook Time:</strong> {data.cookTimeMinutes} minutes
        </p>
        <p className="text-gray-600">
          <strong>Rating:</strong> {data.rating} ({data.reviewCount} reviews)
        </p>
      </div>
    </div>
  );
}

export default page;
