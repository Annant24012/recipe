import "./loading.css";
export default function Loading() {
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
        <h1 className="text-xl font-semibold text-gray-700">Loading...</h1>
      </div>
    </main>
  );
}
