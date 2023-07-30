import React, { useEffect, useState } from "react";
import { CommentSection } from "./CommentSection";

const CommentField = ({ reply, Position }) => {
  const [replayOpen, setReplayOpen] = useState(false);
  return (
    <>
      <section
        style={{ marginLeft: !Position ? "" : Position * 40 }}
        className={`space-y-4`}
      >
        <article className="flex gap-8 items-start">
          <div className="w-28 rounded-md overflow-hidden h-20">
            <img
              className="w-full h-full object-cover"
              src={reply?.avatar}
              alt="avatar"
            />
          </div>
          <div className="space-y-3 w-full">
            <section className="flex items-center gap-y-2 flex-wrap justify-between">
              <h4 className="text-black text-xl font-semibold">
                {reply?.name}
              </h4>
              <ul className="font-sans flex  items-center text-xs text-[#6e6e6e] gap-1">
                <li>November</li>
                <li>24,</li>
                <li>2023</li>
              </ul>
            </section>
            <section className="text-[#6e6e6e]">
              <p>{reply?.comment}</p>
            </section>

            <button
              onClick={() => setReplayOpen(!replayOpen)}
              className="text-black font-semibold text-sm"
            >
              Reply
            </button>
          </div>
        </article>
        {replayOpen && (
          <CommentSection
            title={"Reply to Annette Sievers"}
            toggle={setReplayOpen}
            open={replayOpen}
          />
        )}
      </section>
      {reply?.replys?.length > 0 &&
        reply?.replys?.map((nestedReply, index) => (
          <CommentField
            key={index}
            Position={index + 1 + (!Position ? 0 : Position)}
            reply={nestedReply}
          />
        ))}
    </>
  );
};

function FetchComments({ commentDetails }) {
  const [commentCount, setCommentCount] = useState(null);
  function countComments(comments) {
    let count = 0;

    function traverse(comments) {
      for (const comment of comments) {
        count++;
        if (comment.replys && comment.replys.length > 0) {
          traverse(comment.replys);
        }
      }
    }

    traverse(comments);
    return count;
  }

  useEffect(() => {
    try {
      const totalComment = countComments(commentDetails);
      setCommentCount(totalComment);
    } catch (error) {
      console.log(error);
    }
  }, [commentDetails]);

  return (
    <div className="font-playfair max-sm:!mt-0">
      <h1 className="text-3xl font-semibold my-8">{commentCount} Comments</h1>
      <div className="space-y-8">
        {commentDetails?.map((item, index) => (
          <CommentField reply={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default FetchComments;
