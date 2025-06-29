const PaginationControl = ({
  setCurrentPage,
  currentPage,
  totalPages
}) => {
  const updatePage = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 300 });
  };
  return (
    <div className="flex justify-center mt-6 md:gap-2 flex-wrap items-center">
      {/* Prev Button */}
      <button
        onClick={() => updatePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-sm font-medium mr-2  md:mr-4 px-3 py-1 outline-[1px] outline-black/20 hover:outline-black dark:hover:outline-white/50 dark:outline-white/20 rounded-[4px] group relative disabled:opacity-50 text-white cursor-pointer disabled:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 inline mb-[1.5px] group-hover:-translate-x-[2px] transition-transform pointer-events-none"
        >
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
        <span className="md:inline hidden">Prev</span>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <button
          key={pageNum}
          disabled={totalPages === 1}
          onClick={() => updatePage(pageNum)}
          className={`hover:outline dark:hover:outline-white/50 -outline-offset-1 rounded-[4px] px-2 py-1 mx-1 cursor-pointer    disabled:hidden text-white ${
            currentPage === pageNum ? "bg-black" : "bg-none"
          }`}
        >
          {pageNum}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => updatePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-sm font-medium ml-2 md:ml-4 px-3 py-1 outline-[1px] outline-black/20 hover:outline-black dark:hover:outline-white/50 dark:outline-white/20 rounded-[4px] group relative disabled:opacity-50 text-white cursor-pointer disabled:hidden"
      >
        <span className="md:inline hidden">Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 inline group-hover:translate-x-[2px] transition-transform pointer-events-none"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default PaginationControl;
