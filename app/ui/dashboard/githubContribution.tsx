'use client'
import dynamic from "next/dynamic";
// import {GitHubCalendar} from "react-github-calendar";

const GitHubCalendar = dynamic(
() => import("react-github-calendar").then((mod)=> mod.GitHubCalendar),
{ ssr: false }
);
const GithubContributions = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">GitHub Contributions</h2>
      <GitHubCalendar
        username="mohammadpalash"
        blockSize={14}
        blockMargin={5}
        fontSize={14}
      />
    </div>
  );
};

export default GithubContributions;