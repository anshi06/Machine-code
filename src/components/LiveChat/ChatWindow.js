import ChatMessage from "./ChatMessage";

const ChatWindow = () => {
    return <div className="h-[600px] w-1/3 bg-gray-900 rounded-md text-white">
       <ChatMessage name="Anshi" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5aydXGxvwdau0WyWjbrxtj1GwiuQaxDyaYPjKtUH-qy70mBf58HnQ240&s" message={"Hello"}/>
    </div>
}

export default ChatWindow;