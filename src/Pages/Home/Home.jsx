const Home = () => {
  return (
    <div>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/src/assets/Health.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-[black] text-5xl font-bold">
                I Grow By Helping People In Need
              </h1>

              <div className="flex justify-center items-center mt-10">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="input  rounded-r-none w-full max-w-xs"
                />
                <button className="btn btn-primary rounded-l-none">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h4>show all phone</h4>
      </div>
    </div>
  );
};

export default Home;
