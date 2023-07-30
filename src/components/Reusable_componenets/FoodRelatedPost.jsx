import React from "react";

function FoodRelatedPost({ postDetails }) {
  return (
    <article className={`space-y-8 `}>
      <h1 className="font-playfair font-bold text-4xl">You May Also Like</h1>
      <div
        className={`grid lg:grid-cols-${postDetails?.length} max-sm:grid-cols-1 max-lg:grid-cols-2 gap-5`}
      >
        {postDetails?.map((relatedFoodItem, index) => (
          <section key={index} className="flex flex-col gap-y-7 ">
            <div className="rounded-md  overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={relatedFoodItem?.image}
                alt="cardPost"
              />
            </div>
            <div className="space-y-4 ">
              <h4 className="text-xl font-bold font-playfair">
                {relatedFoodItem?.title}
              </h4>
              <section className="flex items-center gap-1 text-gray-400">
                <small>Novermber</small>
                <small>6, </small>
                <small>2023</small>
              </section>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

export default FoodRelatedPost;
