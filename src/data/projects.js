import chat from "../assets/chat.svg";
import interviewer from "../assets/interviewer.svg";

export const projects = [
    {
        title: "AI-Powered Chat Application",
        desc: "A realtime Chat App built using Socket.io + Node.js in backend and React in Frontend with AI features such as message summarization, AI reply and seperate AI Chat",
        icon: chat,
        dep: "https://www.example.com",
        techStack: ["React.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
    },
    {
        title: "AI Interviewer",
        desc: "Built an AI Interviewer that asks questions based on Role you applied for and provides real-time feedback.",
        icon: interviewer,
        dep: "example.com",
        techStack: ["React.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
        reverse: true,
    },
    {
        title: "SaaS Application",
        desc: "Built an end to end SaaS Application",
        dep: "example.com",
        techStack: ["React.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
    },
    {
        title: "Reddit Clone end-to-end",
        desc: "End to End Reddit clone with all features",
        dep: "example.com",
        techStack: ["React.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
        reverse: true,
    },
];
