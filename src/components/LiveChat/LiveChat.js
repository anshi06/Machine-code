import HomeButton from "../HomeButton";
import VideoStream from "./VideoStream";
import ChatWindow from "./ChatWindow";

const LiveChat = () => {
    return  <div className="">
    <div className="flex bg-blue-950 justify-between items-baseline flex-col">
      <div className="mx-auto">
        <HomeButton />
      </div>
      <h1 className="text-yellow-200 mx-auto font-bold text-3xl mb-6">
        Live Chat
      </h1>
    </div>
    <div className="flex gap-4 m-6">
      <VideoStream/>
      <ChatWindow/>
    </div>
  </div>
}

export default LiveChat;