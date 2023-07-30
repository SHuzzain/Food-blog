import React, { useEffect, useState } from "react";
import { ChatBubbleLeftRightIcon, EyeIcon } from "@heroicons/react/24/solid";

import { DishDetail } from "./DishDetail";
import { CommentSection } from "../Reusable_componenets/CommentSection";
import { AuthorDetail } from "../Reusable_componenets/AuthorDetail";
import FoodRelatedPost from "../Reusable_componenets/FoodRelatedPost";

function CardDetailLeft() {
  const [postDetail, setPostDetail] = useState({});

  const data = {
    images: {
      index:
        "https://especio.themerex.net/wp-content/uploads/2018/11/image-38-copyright.jpg",
    },

    related: [
      {
        type: "video",
        root: "https://especio.themerex.net/wp-content/uploads/2018/11/image-1-copyright-1170x658.jpg",
        decs: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        steps: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
          ,
          "Incididunt ut labore et dolore magna aliqua enim ad minim veniam",
          "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        ],
        AfterStepDecs: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
      },
      {
        type: "images",
        root: "https://especio.themerex.net/wp-content/uploads/2018/11/image-11-copyright-1536x1012.jpg",
        decs: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        ],
      },
    ],

    category: "vegan",
    title: "Hawaiian Chicken Poke Bowl",
    view: 707,
    comment: 5,
    shortDesc: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
    detailDecs: {
      decs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Tim Heiler",
    },
    faceBookLink: "/",
    twitter: "/",
    author: {
      avatar:
        "https://secure.gravatar.com/avatar/0d218ddf4605b9b21118277c48bac03f?s=150&d=mm&r=g",
      title: "About Imogene Martin",
      decs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    },
    categoryType: ["breakfast", "lunch"],
    categoryRelatedFood: [
      {
        image:
          "https://especio.themerex.net/wp-content/uploads/2018/11/image-25-copyright-570x498.jpg",
        title: "Zucchini-baesil soup with chickpeas",
      },
      {
        image:
          "https://especio.themerex.net/wp-content/uploads/2018/11/image-26-copyright-570x498.jpg",
        title: "Leek Soup Pasta",
      },
    ],
  };
  useEffect(() => {
    const response = data;
    setPostDetail({ ...response });
  }, []);

  return (
    <section className="col-span-3 lg:col-span-2 flex flex-col gap-8">
      <DishDetail
        images={postDetail?.images?.index}
        category={postDetail?.category}
        comment={postDetail?.comment}
        detailDecs={postDetail?.detailDecs}
        shortDesc={postDetail?.shortDesc}
        title={postDetail?.title}
        view={postDetail?.view}
      />
      <div className="flex flex-col gap-8">
        {postDetail?.related?.map((relatedItem, index) => (
          <React.Fragment key={index}>
            {relatedItem?.type === "video" ? (
              <div className="space-y-8 text-gray-500 font-playfair text-lg">
                <section className="w-full aspect-video rounded-md overflow-hidden">
                  <img
                    className="max-w-full min-w-full h-full object-cover"
                    src={relatedItem?.root}
                    alt="cardPost"
                  />
                </section>
                <section className="space-y-8">
                  {relatedItem?.decs?.map((DecsItem, index) => (
                    <p key={index}>{DecsItem}</p>
                  ))}
                  <ol className="space-y-3 list-decimal pl-5">
                    {relatedItem?.steps?.map((stepsItem) => (
                      <li>{stepsItem}</li>
                    ))}
                  </ol>
                  {relatedItem?.AfterStepDecs?.length
                    ? relatedItem?.AfterStepDecs?.map(
                        (afterStepsDecs, index) => (
                          <p key={index}>{afterStepsDecs}</p>
                        )
                      )
                    : null}
                </section>
              </div>
            ) : (
              <div className="space-y-8 text-gray-500 font-playfair text-lg">
                <section className="w-full h-[70vh] rounded-md overflow-hidden">
                  <img
                    className="max-w-full min-w-full h-full object-cover"
                    src={relatedItem?.root}
                    alt="cardPost"
                  />
                </section>
                <section className="space-y-8">
                  {relatedItem?.decs?.map((DecsItem, index) => (
                    <p key={index}>{DecsItem}</p>
                  ))}
                </section>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex tems-center flex-wrap justify-between">
        <section className="flex items-center flex-wrap [&>h5]:cursor-pointer gap-2 text-sm font-semibold font-playfair">
          {postDetail?.categoryType?.map((categoryTypeItem, index) => (
            <h5
              key={index}
              className="bg-[#f7f4ee] transition-colors duration-200 hover:bg-black hover:text-white py-1 px-2 rounded-md "
            >
              {categoryTypeItem}
            </h5>
          ))}
        </section>

        <section className="flex items-center gap-2 [&>i]:header-icon">
          <i className="fa fa-twitter text-base text-[#55ACEE] mediaIcon-translate" />
          <i className="fa fa-facebook text-base text-[#3b59a2] mediaIcon-translate" />
        </section>
      </div>
      <AuthorDetail
        avatar={postDetail?.author?.avatar}
        title={postDetail?.author?.title}
        decs={postDetail?.author?.decs}
      />
      <hr className="border-t border-gray-400/25 my-10" />
      <FoodRelatedPost postDetails={postDetail?.categoryRelatedFood} />
      <hr className="border-t border-gray-400/25 my-10" />
      <CommentSection />
    </section>
  );
}

export default CardDetailLeft;
