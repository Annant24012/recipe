import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-6">
      <h1 className="text-5xl font-bold text-white mb-8">
        Welcome to the Recipe Website
      </h1>

      <p className="text-lg text-white mb-8 max-w-2xl text-center">
        Discover delicious recipes from around the world. Whether you're looking
        for quick meals, gourmet dishes, or something in between, we've got you
        covered!
      </p>
      <Link
        href="/recepi"
        className="bg-white text-blue-500 font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
      >
        Go to Recipes
      </Link>
    </div>
  );
}
