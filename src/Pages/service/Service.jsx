

const Service = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-12">Our Service</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <div className="card bg-base-100 rounded-2xl shadow-2xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/WpYcjHtK/talk.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xl font-bold">Buy a home</h2>
    <p className="text-lg">A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses.</p>
  </div>
</div>
<div className="card bg-base-100 rounded-2xl shadow-2xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/4n5cYZ5N/sell.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xl font-bold">Sell a home</h2>
    <p className="text-lg">No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
  </div>
</div>
<div className="card bg-base-100 rounded-2xl shadow-2xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/k2gbNp0w/rent.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xl font-bold">Rent a home</h2>
    <p className="text-lg">We are creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Service;