const Comment = ({ comment }) => {
  const { imgUrl, text, userName, replies } = comment;
  return (
    <div className="">
      <div className="flex p-3 gap-2 border border-l-4 border-r-0 border-y-0 border-lime-400">
        <img alt="User image" src={imgUrl} className="w-12 h-12 rounded-full" />
        <h2 className="font-bold">{userName}</h2>
        <p className="bg-purple-200 p-3 font-serif">{text}</p>
      </div>
      {replies && replies.length > 0 ? (
        <div className="flex flex-col">
          <h1 className="font-bold p-2 text-center text-sm bg-yellow-50 w-1/5 m-auto rounded-lg">{replies.length == 1 ? replies.length + " reply" : replies.length + " replies"}</h1>
          <div className="flex flex-col ml-6">
            {replies.map((reply) => (
              <Comment comment={reply} />
            ))}{" "}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Comment;
