export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-32">

      <div className="relative">

        {/* Outer Ring */}
        <div className="w-16 h-16 border-4 border-violet-600/20 rounded-full"></div>

        {/* Spinner */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-violet-500 border-r-violet-500 rounded-full animate-spin"></div>

      </div>

    </div>
  );
}