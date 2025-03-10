const Loader = () => {
  return (
    <div className="border-red-500 border-4 absolute">
      <div className="flex flex-row gap-2 ">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]" />
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
      </div>
    </div>
  );
};

export default Loader;
