import { useState } from "react";
import {
  BsArrowLeft,
  BsSearch,
  BsThreeDotsVertical,
  BsEmojiSmile,
  BsPaperclip,
  BsMic,
  BsSend,
  BsChevronLeft,
} from "react-icons/bs";

const ChatApp = () => {
  const [message, setMessage] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [chats, setChats] = useState({});
  const [showChat, setShowChat] = useState(false);

  // Groups (3)
  const groups = [
    { name: "React Developers", time: "2 hours", avatar: "RD" },
    { name: "Team Project", time: "1 day", avatar: "TP" },
    { name: "UI Designers", time: "3 hours", avatar: "UD" },
  ];

  // Chats (4)
  const contacts = [
    { name: "Wajid Bhai", time: "10 hours", avatar: "WB" },
    { name: "Saqib Bhai", time: "9 hours", avatar: "SB" },
    { name: "Hussain Bhai", time: "5 hours", avatar: "HB" },
    { name: "Zain", time: "12 hours", avatar: "Z" },
  ];

  const members = [
    "Jane Cooper",
    "Wade Warren",
    "Brooklyn Simmons",
    "Jenny Wilson",
    "Devon Lane",
    "Marvin McKinney",
  ];

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setShowChat(true);
    if (!chats[contact.name]) {
      setChats((prev) => ({
        ...prev,
        [contact.name]: [
          {
            from: "them",
            text: `Hey! This is ${contact.name}. How are you?`,
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      }));
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim() || !selectedContact) return;

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const updatedMessages = [
      ...(chats[selectedContact.name] || []),
      { from: "me", text: message, time },
    ];

    setChats((prev) => ({ ...prev, [selectedContact.name]: updatedMessages }));
    setMessage("");

    setTimeout(async () => {
      const reply = await getRandomReply();
      const botMessages = [
        ...updatedMessages,
        {
          from: "them",
          text: reply,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ];
      setChats((prev) => ({ ...prev, [selectedContact.name]: botMessages }));
    }, 500);
  };

  const getRandomReply = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      return data.content;
    } catch {
      const randomReplies = [
        "Haha, that’s interesting!",
        "Tell me more!",
        "Really? I didn’t know that.",
        "Sounds cool 😎",
        "Wow, that’s awesome!",
        "Hmm, good question 🤔",
      ];
      return randomReplies[Math.floor(Math.random() * randomReplies.length)];
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b bg-white">
        <div className="flex items-center gap-2">
          <BsChevronLeft className="text-xl" />
          <h5 className="text-lg font-semibold">ChatBox</h5>
        </div>
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg">
          New Chat
        </button>
        <button className="md:hidden bg-blue-600 text-white px-3 py-1 text-sm rounded-lg">
          New Chat
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`${
            showChat ? "hidden md:flex" : "flex"
          } flex-col w-full md:w-1/4 border-r bg-white`}
        >
          {/* Search */}
          <div className="p-3 flex items-center bg-gray-100 rounded-lg mx-3 mt-3">
            <BsSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter Name to Search"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Groups Section */}
          <div className="mt-4 px-4">
            <h2 className="text-gray-700 text-sm font-semibold mb-2">Groups</h2>
            <div className="border-t border-gray-200" />
          </div>

          <div className="overflow-y-auto mt-2">
            {groups.map((g, i) => (
              <div
                key={i}
                onClick={() => handleContactClick(g)}
                className={`flex items-center justify-between p-3 cursor-pointer hover:bg-blue-50 ${
                  selectedContact?.name === g.name ? "bg-blue-100" : ""
                } border-b border-gray-200`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full font-semibold">
                    {g.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{g.name}</div>
                    <div className="text-xs text-gray-500">Group chat...</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">{g.time}</div>
              </div>
            ))}
          </div>

          {/* Chats Section */}
          <div className="mt-4 px-4">
            <h2 className="text-gray-700 text-sm font-semibold mb-2">Chats</h2>
            <div className="border-t border-gray-200" />
          </div>

          <div className="overflow-y-auto mt-2">
            {contacts.map((c, i) => (
              <div
                key={i}
                onClick={() => handleContactClick(c)}
                className={`flex items-center justify-between p-3 cursor-pointer hover:bg-blue-50 ${
                  selectedContact?.name === c.name ? "bg-blue-100" : ""
                } border-b border-gray-200`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full font-semibold">
                    {c.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-gray-500">Chat preview...</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">{c.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div
          className={`${
            showChat ? "flex" : "hidden md:flex"
          } flex-col w-full md:w-3/4 bg-gray-100`}
        >
          {!selectedContact ? (
            <div className="flex flex-1 justify-center items-center">
              <h4 className="text-gray-400">
                Select a contact to start chatting
              </h4>
            </div>
          ) : (
            <>
              {/* Chat Header */}
              <div className="flex justify-between items-center p-4 bg-white border-b">
                <div className="flex items-center gap-3">
                  <button
                    className="md:hidden text-xl"
                    onClick={() => setShowChat(false)}
                  >
                    <BsArrowLeft />
                  </button>
                  <h5 className="font-semibold">{selectedContact.name}</h5>
                </div>

                <div className="flex items-center gap-3">
                  <select className="border rounded-md px-2 py-1 text-sm">
                    <option>Add members...</option>
                    {members.map((m, i) => (
                      <option key={i}>{m}</option>
                    ))}
                  </select>

                  <div className="relative">
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                      <BsThreeDotsVertical />
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {(chats[selectedContact.name] || []).map((m, i) => (
                  <div
                    key={i}
                    className={`flex items-end gap-2 ${
                      m.from === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {m.from !== "me" && (
                      <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-xs font-semibold">
                        {selectedContact.avatar}
                      </div>
                    )}
                    <div
                      className={`max-w-xs p-2 rounded-lg text-sm ${
                        m.from === "me"
                          ? "bg-blue-500 text-white"
                          : "bg-white border"
                      }`}
                    >
                      <div>{m.text}</div>
                      <div className="text-[10px] text-gray-400 mt-1 text-right">
                        {m.time}
                      </div>
                    </div>
                    {m.from === "me" && (
                      <div className="w-8 h-8 bg-gray-400 text-white flex items-center justify-center rounded-full text-xs font-semibold">
                        ME
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form
                onSubmit={sendMessage}
                className="p-3 bg-white border-t flex items-center gap-2"
              >
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-500 text-lg"
                >
                  <BsEmojiSmile />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-500 text-lg"
                >
                  <BsPaperclip />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-500 text-lg"
                >
                  <BsMic />
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                >
                  <BsSend />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
