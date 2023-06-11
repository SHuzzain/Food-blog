import React, { useEffect, useState } from "react";
import { RightSideGridPosts } from "../components/home/card_menu/latestPost/rightSideGrid/RightSideGridPosts";
import { ChatBubbleLeftRightIcon, EyeIcon } from "@heroicons/react/24/solid";

const CardDetailPage = () => {
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
    UserDetail: {
      title: "About Imogene Martin",
      decs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    },
  };
  useEffect(() => {
    const response = data;
    setPostDetail({ ...response });
  }, []);
  console.log(postDetail);
  return (
    <div className="container max-w-100 mx-auto p-5 pt-0">
      <div className="grid grid-cols-3 gap-4 mt-20">
        <section className="col-span-3 lg:col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <section className="w-full h-[70vh] rounded-md overflow-hidden">
              <img
                className="max-w-full min-w-full h-full object-cover"
                src={postDetail?.images?.index}
                alt="cardPost"
              />
            </section>
            <section className="flex flex-col items-start">
              <article className="flex flex-col items-start gap-5">
                <h6 className="bg-[#f7f4ee] text-red-500 rounded p-1 px-3 text-sm font-bold capitalize">
                  {postDetail?.category}
                </h6>
                <h1 className="text-4xl font-bold font-playfair">
                  {postDetail?.title}
                </h1>
                <div className="flex items-center text-gray-400 gap-5">
                  <section className="flex items-center gap-1">
                    <small>Novermber</small>
                    <small>6, </small>
                    <small>2023</small>
                  </section>

                  <section className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <EyeIcon className="w-4 text-black" />
                      <small>{postDetail?.view}</small>
                    </div>
                    <div className="flex items-center gap-1">
                      <ChatBubbleLeftRightIcon className="w-4 text-black" />
                      <small>{postDetail?.comment}</small>
                    </div>
                  </section>
                </div>
                <div className="space-y-8 text-gray-500 font-playfair text-lg">
                  {postDetail?.shortDesc?.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                  <blockquote className="relative linearGradientLine my-9 py-9 pl-9 ">
                    <p>{postDetail?.detailDecs?.decs}</p>
                    <cite className="text-black font-semibold text-base">
                      {postDetail?.detailDecs?.name}
                    </cite>
                  </blockquote>
                  {postDetail?.shortDesc?.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </article>
            </section>
          </div>
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
                            (afterStepsDecs, index) => <p>{afterStepsDecs}</p>
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
          <div className="flex items-center justify-between">
            <section className="flex items-center flex-wrap [&>h5]:cursor-pointer gap-2 text-sm font-semibold font-playfair">
              <h5 className="bg-[#f7f4ee] hover:bg-black hover:text-white py-1 px-2 rounded-md ">
                breakfast
              </h5>
              <h5 className="bg-[#f7f4ee] py-1 px-2 rounded-md hover:bg-black hover:text-white">
                lunch
              </h5>
            </section>

            <section className="flex items-center gap-2 [&>i]:header-icon">
              <i className="fa fa-twitter text-base text-[#55ACEE] mediaIcon-translate" />
              <i className="fa fa-facebook text-base text-[#3b59a2] mediaIcon-translate" />
            </section>
          </div>
          <div>
            <article>
              <div>
                <img
                  src="https://secure.gravatar.com/avatar/0d218ddf4605b9b21118277c48bac03f?s=150&d=mm&r=g"
                  alt=""
                />
              </div>
            </article>
          </div>
        </section>
        <RightSideGridPosts />
      </div>
    </div>
  );
};

export default CardDetailPage;
