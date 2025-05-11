import { CommentsData } from "../utils/constants";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="flex flex-col bg-blue-100 w-1/2 m-auto my-6 rounded-md">
      {CommentsData.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
