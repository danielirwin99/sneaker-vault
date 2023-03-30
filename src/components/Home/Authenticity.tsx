import Link from "next/link";

const Authenticity = () => {
  return (
    <section className="flex items-center justify-center h-[60vh] mb-7 px-5 xl:px-0 container border-b border-gray-400">
      <div className=" w-full lg:w-1/2 flex flex-col items-center text-center justify-normal">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-10 ">
          Recently Purchased a Fake?
        </h1>
        <h2 className="font-semibold md:text-lg lg:text-xl">
          All our items are 100% Authentic, doubled checked by our staff members
        </h2>
        <h2 className="mt-10 font-semibold text-gray-700">
          Have any doubts?
          <br /> Feel free to{" "}
          <Link href="/contact">
            <span className="text-blue-600 hover:opacity-80">contact us</span>
          </Link>{" "}
          directly.
        </h2>
        <Link href="/contact">
          <button className="loadMore">Contact Now</button>
        </Link>
      </div>
      <div className=" w-full lg:w-1/2 ml-8">
        <figure>
          <img
            className="w-full object-contain rounded-sm"
            src="https://cdn.shopify.com/s/files/1/0226/4091/8600/articles/Smell.jpg?v=1663310825"
            alt=""
          />
        </figure>
      </div>
    </section>
  );
};

export default Authenticity;
