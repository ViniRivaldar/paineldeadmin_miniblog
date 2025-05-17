
export default function SkeletonCardPost({ count = 3 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 bg-[#E0E0E0] mb-10 p-10 animate-pulse rounded"
        >
          <div className="flex justify-center gap-10">
            <div className="w-[499px] h-[153px] bg-gray-300 rounded" />
            <div className="w-[499px] h-[153px] flex flex-col justify-center">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-300 rounded w-1/2" />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 bg-gray-300 rounded" />
          </div>
        </div>
      ))}
    </>
  );
}
