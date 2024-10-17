import Link from "next/link";

const fetchApiData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.log("Error while fetching data from API or server.", error);
  }
};

const page = async () => {
  const data = await fetchApiData();
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Recipes
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data && data.recipes.length > 0 ? (
          data.recipes.map((recipe) => {
            return (
              <li
                key={recipe.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/recepi/${recipe.id}`}>
                  <div>
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">
                      {recipe.name}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      Cook Time: {recipe.cookTimeMinutes} minutes
                    </p>
                  </div>
                </Link>
              </li>
            );
          })
        ) : (
          <li className="text-center text-red-500">No recipes found.</li>
        )}
      </ul>
    </div>
  );
};

export default page;
