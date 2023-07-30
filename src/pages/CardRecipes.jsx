import React, { Fragment, useEffect, useState } from "react";
import DishDetail from "../components/cardRecipe/DishDetail";
import { AuthorDetail } from "../components/Reusable_componenets/AuthorDetail";
import FoodRelatedPost from "../components/Reusable_componenets/FoodRelatedPost";
import FetchComments from "../components/Reusable_componenets/FetchComments";
import { CommentSection } from "../components/Reusable_componenets/CommentSection";
function CardRecipes() {
  const [post, setPost] = useState({});
  useEffect(() => {
    const getpost = {
      imageInfo: {
        imageUrl:
          "https://especio.themerex.net/wp-content/uploads/2018/11/image-5-copyright.jpg",
        category: "Recipe",
        title: "Bourbon Street Rib-Eye Steak With Cheese",
        date: new Date(),
        comment: Math.floor(Math.random() * 10) + 1,
        view: Math.floor(Math.random() * 1000) + 100,
      },
      shortDecs: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      ],
      detailDecs: {
        decs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "Tim Heiler",
      },
      longDecs: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. .",
      ],
      related: [
        {
          images: [
            "https://especio.themerex.net/wp-content/uploads/2018/11/image-30-copyright-1536x1128.jpg",
            "https://especio.themerex.net/wp-content/uploads/2018/11/image-29-copyright-1536x1137.jpg",
          ],
          steps: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
            "Incididunt ut labore et dolore magna aliqua enim ad minim veniam",
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          ],
          AfterStepDecs: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          ],
          extraDetail: {
            title: "The Most Attractive Dishes",
            headerTitle:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            shortDecs: [
              "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            ],
          },
        },
      ],
      faceBookLink: "/",
      twitter: "/",
      categoryType: ["meet", "souce"],
      author: {
        avatar:
          "https://secure.gravatar.com/avatar/0d218ddf4605b9b21118277c48bac03f?s=150&d=mm&r=g",
        title: "About Imogene Martin",
        decs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
      },
      categoryRelatedFood: [
        {
          image:
            "https://especio.themerex.net/wp-content/uploads/2018/11/image-7-copyright-270x258.jpg",
          title: "Lemon Crostata",
          date: new Date().toISOString(),
        },
        {
          image:
            "https://especio.themerex.net/wp-content/uploads/2018/11/image-6-copyright-270x258.jpg",
          title: "Ilomemade Belgian aille With mnipped Creanm",
          date: new Date().toISOString(),
        },
        {
          image:
            "https://especio.themerex.net/wp-content/uploads/2018/11/image-1-copyright-270x258.jpg",
          title: "Creamy Garlic Parmesan Chicken Salad",
          date: new Date().toISOString(),
        },
        {
          image:
            "https://especio.themerex.net/wp-content/uploads/2018/11/image-41-copyright-270x258.jpg",
          title: "Italian Bruscetta With Tomatoes",
          date: new Date().toISOString(),
        },
      ],
      comments: [
        {
          avatar:
            "https://secure.gravatar.com/avatar/0d218ddf4605b9b21118277c48bac03f?s=90&d=mm&r=g",
          name: "Imogene Martin",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          replys: [
            {
              avatar:
                "https://secure.gravatar.com/avatar/d5d633c36d54fc65f93245d95841dd02?s=90&d=mm&r=g",
              name: "Lavonia Newland",
              comment:
                "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architect.",
              replys: [
                {
                  avatar:
                    "https://secure.gravatar.com/avatar/de89be5140fa0ed11abfc77c3c26ee1a?s=90&d=mm&r=g",
                  name: "Mary Blake",
                  comment:
                    "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam.",
                  replys: [
                    {
                      avatar:
                        "https://secure.gravatar.com/avatar/3879784187480e757b158aacf973eea4?s=90&d=mm&r=g",
                      name: "Annette Sievers",
                      comment:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
                      replys: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          avatar:
            "https://secure.gravatar.com/avatar/0d218ddf4605b9b21118277c48bac03f?s=90&d=mm&r=g",
          name: "Imogene Martin",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          replys: [],
        },
      ],
    };
    setPost({ ...getpost });
  }, []);
  return (
    <>
      <div className="container max-w-100 mx-auto p-5 pt-0 space-y-20">
        <div className="mt-20">
          <DishDetail
            imageUrl={post?.imageInfo?.imageUrl}
            title={post?.imageInfo?.title}
            category={post?.imageInfo?.category}
            view={post?.imageInfo?.view}
            comment={post?.imageInfo?.comment}
          />
          <section className="space-y-8 text-gray-500 font-playfair text-lg md:px-10 mt-16">
            <article className="max-w-[55rem] mx-auto space-y-8">
              <div className="space-y-8">
                {post?.shortDecs?.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <blockquote className="relative linearAfter my-9 py-9 pl-9 ">
                <p>{post?.detailDecs?.decs}</p>
                <cite className="text-black font-semibold text-base">
                  {post?.detailDecs?.name}
                </cite>
              </blockquote>
              <div className="space-y-8">
                {post?.longDecs?.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              {post?.related?.map((item, index) => (
                <Fragment>
                  <ul
                    key={index}
                    className="w-[min(100%-2rem,600px)] md:w-[800px] lg:w-100    flex justify-center items-center gap-11 -translate-x-2/4 ml-[50%]"
                  >
                    {item?.images?.map((url, id) => (
                      <li key={id}>
                        <figure>
                          <img
                            className="rounded-md w-full h-full object-cover"
                            src={url}
                            alt="related image"
                          />
                        </figure>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center">
                    <ul className="space-y-3 list-disc marker:text-red-500">
                      {item?.steps?.map((step, index) => (
                        <li>
                          <p>{step}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-8">
                    {item?.AfterStepDecs?.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                  <div className="space-y-8">
                    <h2 className="mb-5 text-2xl text-black font-semibold">
                      {item?.extraDetail?.title}
                    </h2>
                    <p className="!mt-0">{item?.extraDetail?.headerTitle}</p>
                    {item?.extraDetail?.shortDecs?.map((decs, id) => (
                      <p key={id}>{decs}</p>
                    ))}
                  </div>
                </Fragment>
              ))}
              <div className="flex tems-center flex-wrap justify-between">
                <section className="flex items-center flex-wrap [&>h5]:cursor-pointer gap-2 text-sm font-semibold font-playfair">
                  {post?.categoryType?.map((categoryTypeItem, index) => (
                    <h5
                      key={index}
                      className="bg-[#f7f4ee] transition-colors text-black duration-200 hover:bg-black hover:text-white py-1 px-2 rounded-md "
                    >
                      {categoryTypeItem}
                    </h5>
                  ))}
                </section>

                <section className="flex items-center gap-2 [&>i]:header-icon">
                  <i className="fa fa-twitter text-base text-[#55ACEE] mediaIcon-translate" />
                  <i className="fa fa-facebook text-base text-[#3b59a2] mediaIcon-translate" />
                </section>

                <AuthorDetail
                  avatar={post?.author?.avatar}
                  title={post?.author?.title}
                  decs={post?.author?.decs}
                />
              </div>
            </article>
          </section>
        </div>
        <div className="bgShadow bg-[#f7f4ee] flex justify-center items-center py-16">
          <FoodRelatedPost postDetails={post?.categoryRelatedFood} />
        </div>
        <FetchComments commentDetails={post?.comments} />
        <CommentSection />
      </div>
    </>
  );
}

export default CardRecipes;
