import React, { useEffect, useRef } from "react";
import Message from "./Message.js";

const Messages = ({ person }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [person]); // Scroll to bottom whenever person changes

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const You = {
    name: "You",
    latestMessage: "Hey, give me a penalty?",
    lastMessageTime: "10:37 AM",
    icon: "https://external-preview.redd.it/VJjeNbJwVx5M3KuBsArppbiwA7EHP4zZSGnjfzwh9m8.jpg?width=1080&crop=smart&auto=webp&s=53e98287cc6f1b801e44e2adbbc7a4be85eab133",
    isOnline: true,
    isTyping: false,
  };
  return (
    <div className="px-4 flex-1 overflow-auto max-h-[550px]">
      <div>
        <Message person={person} message="give me a penalty" />
        <Message person={You} message="Gừng càng già càng cay" />
        <Message person={person} message="give me a penalty" />
        <Message person={You} message="Anh 7 phế do là phó dê" />
        <Message person={person} message="give me a penalty" />
        <Message person={You} message="7 chọ chỏ bậy rồi bỏ chạy" />
        <Message person={person} message="give me a penalty" />
        <Message person={You} message="Rita võ" />
        <Message person={person} message="give me a penalty" />
        <Message person={You} message="Nhớ về hàn quốc thân thương" />
        <Message person={person} message="give me a penalty" />
        <Message person={You} message="Quê hương Maroc vẫn vương vương buồn" />
        <Message person={person} message="give me a penalty" />
        <Message person={You} message="3 mâm xôi vàng" />
        <Message person={person} message="give me a penalty" />
        <Message person={You} message={"Ricons cay"} />
        <Message person={person} message="give me a penalty" />
        <Message
          person={You}
          message={
            <span>Chấm pen ai vẽ mà tròn Cỏ kia ai cắt mà còn hơi cao</span>
          }
        />
        <Message person={person} message="give me a penalty" />
        <Message
          person={You}
          message={
            <span>Chấm pen ai vẽ mà tròn Cỏ kia ai cắt mà còn hơi cao</span>
          }
        />
        <Message person={person} message="give me a penalty" />
      </div>

      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
