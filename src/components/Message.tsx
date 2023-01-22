import React, { useState } from "react";

const Message = ({ userMessageData }: any) => {
  const myLogin = "ars";
  const firstName = "Arstan";
  const lastName = "asdas";
  const [messageData, setMessageData] = useState([
    {
      user: {
        id: 3,
        firstName: "Lipa",
        lastName: "Dua",
        login: "dualipa",
        phoneNumber: null,
        role: "USER",
      },
      messages: [
        {
          id: 3,
          sender: "ars",
          receiver: "dualipa",
          message: "How are you?",
          timestamp: 1674116287377,
          status: null,
          document: null,
        },
        {
          id: 6,
          sender: "ars",
          receiver: "dualipa",
          message: "Hello Adilet1234",
          timestamp: 1674118983942,
          status: null,
          document: null,
        },
      ],
    },
    {
      user: {
        id: 2,
        firstName: "Admin",
        lastName: "Adminov",
        login: "admin",
        phoneNumber: null,
        role: "USER",
      },
      messages: [
        {
          id: 1,
          sender: "ars",
          receiver: "admin",
          message: "How are you?",
          timestamp: 1674115874796,
          status: null,
          document: null,
        },
        {
          id: 2,
          sender: "admin",
          receiver: "ars",
          message: "Heloo Dua Lipa from Admin",
          timestamp: 1674115893681,
          status: null,
          document: null,
        },
        {
          id: 4,
          sender: "admin",
          receiver: "ars",
          message: "Heloo Dua Lipa from Admin",
          timestamp: 1674118882049,
          status: null,
          document: null,
        },
        {
          id: 5,
          sender: "admin",
          receiver: "ars",
          message: "Hello Adilet123",
          timestamp: 1674118925628,
          status: null,
          document: null,
        },
      ],
    },
  ]);
  return (
    <>
      {messageData.map((obj, index) => (
        <div key={index}>
          {obj.messages.map((item) => (
            <div
              className={item.sender === myLogin ? "message owner" : "message"}
              key={item.id}
            >
              <div className="messageInfo">
                <span>
                  {obj.user.firstName} {obj.user.lastName} {item.sender}
                </span>
              </div>
              <div className="messageContent">
                <p>{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Message;
