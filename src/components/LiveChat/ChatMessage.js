const ChatMessage = ({ name, photo, message }) => {
  return (
    <div className="m-2 flex gap-3">
      <img className="h-10 w-10 rounded-full" alt={name} src={photo} />
      <p className="p-2">
        <span className="font-bold">{name} - </span>
        <span>{message}</span>
      </p>
    </div>
  );
};
export default ChatMessage;
