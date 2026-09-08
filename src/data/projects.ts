import chat from "../assets/chat.svg";
import interviewer from "../assets/interviewer.svg";

export const projects = [
    {
        title: "AI-Powered Chat Application",
        desc: "A realtime Chat App built using Socket.io + Node.js in backend and React in Frontend with AI features such as message summarization, AI reply and seperate AI Chat",
        icon: chat,
        image: "https://placehold.co/1200x800/1b1d1f/ececef?text=Chat Application",
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
        title: "Movie Streaming Application",
        desc: "A full-stack movie streaming platform with adaptive bitrate playback that adjusts quality to your connection in real time. Handles auth with JWT and refresh-token rotation, rate-limits requests at the edge, and streams video straight from object storage.",
        dep: "https://netflix-end-t-oend.vercel.app/",
        image: "https://placehold.co/1200x800/1b1d1f/ececef?text=Streaming App",
        techStack: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Hls.js",
            "JWT",
            "BackBlaze B2",
        ],
        reverse: true,
    },
];
