

const Banner = () => {
    return (
        <div>
            <div
  className="hero min-h-screen  rounded-3xl mt-8"
  style={{
    backgroundImage: "url(https://i.postimg.cc/3JJ8zZFT/banner.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className=" w-10/12">
      <h1 className="mb-5  text-2xl md:text-5xl font-bold">Discover an exceptional cooking  class tailored for you!</h1>
      <p className="mb-5">
      Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding  problems to become an exceptionally well world-class Programmer.
      
      </p>
      <div className="flex gap-5 justify-center">
      <button  className=" px-5 py-2 rounded-full bg-primari text-black font-bold hover:bg-transparent hover:text-white hover:border"><a href="#our">Explore Now</a></button>
      <button className="px-5 rounded-full text-white bg-transparent border  font-bold  hover:bg-black hover:border-none">Get Started</button>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;