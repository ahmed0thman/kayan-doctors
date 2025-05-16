import React, { useState, useReducer, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import sendIcon from "../../assets/images/icons/send.svg";

const API_KEY = "AIzaSyC9bE4ZmHNO2OXwGYX4TZnKYQHYRizH-EM";

type Chat = {
  id: string;
  date: Date;
  userMessage: string;
  aiResponse: string;
};

type AiState = {
  chats: Chat[];
};

type AiAction =
  | { type: "ADD_CHAT"; payload: Chat }
  | { type: "CLEAR_CHATS" }
  | { type: "ERROR" };

const aiReducer = (state: AiState, action: AiAction): AiState => {
  switch (action.type) {
    case "ADD_CHAT":
      return { ...state, chats: [...state.chats, action.payload] };
    case "CLEAR_CHATS":
      return { ...state, chats: [] };
    default:
      return state;
  }
};

const initialChatState: AiState = {
  chats: [],
};

const AiChat = ({
  userMessage,
  response,
}: {
  userMessage: string;
  response: string;
}) => {
  return (
    <div className="chat-row">
      {userMessage && <div className="message user-message">{userMessage}</div>}
      <div className="message ai-response">
        <ReactMarkdown
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              // @ts-expect-error: inline is not in the type but is provided by react-markdown
              const isInline = props.inline;
              return !isInline && match ? (
                <SyntaxHighlighter
                  style={coy}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            p: ({ children }) => (
              <p style={{ marginBottom: ".5rem" }}>{children}</p>
            ),
          }}
        >
          {response.replace(/\n/g, "\n\n")}
        </ReactMarkdown>
      </div>
    </div>
  );
};

const Ai = () => {
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [chatState, dispatch] = useReducer(aiReducer, initialChatState);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const handleSend = async () => {
    setPending(true);

    try {
      const axios = (await import("axios")).default;
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: input }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
      console.log(reply);
      dispatch({
        type: "ADD_CHAT",
        payload: {
          id: Date.now().toString(),
          date: new Date(),
          userMessage: input,
          aiResponse: reply,
        },
      });
    } catch (error) {
      //   setResponseText("Error fetching response");
    } finally {
      setPending(false);
      setInput("");
    }
  };

  useEffect(
    function () {
      if (chatRef.current) {
        if (pending) {
          chatRef.current?.scrollTo({
            top: chatRef.current.scrollHeight,
            behavior: "smooth",
          });
        }
      }
    },
    [pending]
  );

  return (
    <section className="ai-chat">
      <div ref={chatRef} className="chat">
        {chatState.chats.length === 0 && (
          <AiChat
            userMessage=""
            response="Hi there! I'm your AI assistant. How can I help you today?"
          />
        )}
        {chatState.chats.map((chat) => (
          <AiChat
            key={chat.id}
            userMessage={chat.userMessage}
            response={chat.aiResponse}
          />
        ))}
        {pending && (
          <AiChat userMessage={input} response="Waiting for response..." />
        )}
      </div>
      <div className="ai-input">
        <textarea
          rows={1}
          className="ai-input"
          value={pending ? "" : input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={pending ? "" : "Ask something..."}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && input.trim() !== "") {
              e.preventDefault();
              handleSend();
            }
          }}
          disabled={pending}
          autoFocus
        />
        <button className="btn" onClick={handleSend} disabled={pending}>
          <img width={33} src={sendIcon} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Ai;
