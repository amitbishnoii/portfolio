import chat from "../assets/chat.svg";
import interviewer from "../assets/interviewer.svg";

export interface Project {
    title: string;
    desc: string;
    icon: string;
    dep: string;
    image: string;
    gitRepo: string;
    techStack: string[];
    reverse?: boolean;
}

export const projects: Project[] = [
    {
        title: "AI-Powered Chat Application",
        desc: "A realtime Chat App built using Socket.io + Node.js in backend and React in Frontend with AI features such as message summarization, AI reply and seperate AI Chat",
        icon: chat,
        image: "https://placehold.co/1200x800/1b1d1f/ececef?text=Chat Application",
        dep: "https://www.example.com",
        gitRepo: "",
        techStack: ["React.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
    },
    {
        title: "AI Interviewer",
        desc: "Built an AI Interviewer that asks questions based on Role you applied for and provides real-time feedback.",
        icon: interviewer,
        image: "https://placehold.co/1200x800/1b1d1f/ececef?text=AI Interviewer",
        dep: "example.com",
        gitRepo: "https://github.com/amitbishnoii/netflix-endTOend",
        techStack: ["React.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
        reverse: true,
    },
    {
        title: "Movie Streaming Application",
        desc: "A full-stack movie streaming platform with adaptive bitrate playback that adjusts quality to your connection in real time. Handles auth with JWT and refresh-token rotation, rate-limits requests at the edge, and streams video straight from object storage.",
        dep: "https://netflix-end-t-oend.vercel.app/",
        icon: "",
        gitRepo: "https://github.com/amitbishnoii/netflix-endTOend",
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
