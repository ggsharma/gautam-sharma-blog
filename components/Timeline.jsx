"use client";
import stanfordIcon from "../public/static/images/site/stanford.svg";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

const recentWork = [
  {
    logo: "static/images/site/matlab.svg",
    alt: "MathWorks logo",
    date: "2021 - Present",
    work: `At MathWorks, I work as a Senior Software Engineer developing cutting-edge sensor simulation frameworks for automated driving applications. My primary focus is on <b>edge diffraction ray tracing on GPUs</b> - creating ultra-fast <i>CUDA</i> algorithms that simulate how electromagnetic waves bend around objects for realistic radar and lidar simulations.
<br>
<br>

<h3>Ray Tracing & GPU Computing</h3>
I've developed a revolutionary edge diffraction algorithm that runs entirely on CUDA GPUs, achieving sub-3ms latency for real-time sensor simulation. This breakthrough enables photorealistic scenes with physically accurate wave propagation, crucial for testing autonomous vehicles in complex urban environments.
<br>
<br>

 <Image src="/static/images/site/ray-tracing.png" width={500} height={500} alt="Edge diffraction ray tracing visualization" />
 <Image src="/static/images/site/rt-1.png" width={500} height={500} alt="Real-time GPU ray tracing performance metrics" />

 More info on my work can be found here : <a href="https://www.mathworks.com/help/comm/ug/accelerate-ray-tracing-analysis-using-gpu.html" alt="Raytracing on GPU work">Raytracing on GPU work </a>

<h3>High-Performance Networking</h3>
I've also built a groundbreaking networking library that enables seamless data transfer between MATLAB and C++ processes, reducing cross-language communication latency by 75%. Using Protocol Buffers, gRPC, and ZeroMQ, this system handles massive datasets at 96 FPS for real-time applications.
<br>
<br>
<h3>Bird's-Eye Scope Leadership</h3>
As the primary developer and maintainer of <a href="https://www.mathworks.com/help/driving/ref/birdseyescope-app.html">Bird's-Eye Scope</a>, I've transformed this visualization tool into a comprehensive platform for automated driving development, supporting 100,000+ lines of C/C++ code with 3D graphics using Unreal Engine 5.

<Image src="/static/images/site/bes.png" width={600} height={400} alt="Bird's-Eye Scope interface showing 3D autonomous driving visualization" />
<br>
<br>
<h3>Early Computer Vision Work</h3>

During my initial years, I developed a complete <a href="https://www.mathworks.com/help/driving/ug/perception-based-parking-spot-detection-using-unreal-engine-simulation.html">vision-based parking spot detection system</a> using Unreal Engine simulation. This involved training ResNet from scratch for semantic segmentation and implementing classical computer vision techniques like Hough Transforms and RANSAC for precise parking line detection.

<Image src="/static/images/site/semantic.png" width={500} height={400} alt="ResNet semantic segmentation detecting parking spots in realistic 3D environment" />`,
  },
  {
    logo: "static/images/site/stanford.svg",
    alt: "Stanford logo",
    date: "2024",
    work: `Taught students how to code! \n<a href="https://codeinplace.stanford.edu">Code in place</a> is a free, human-centered, intro-to-coding course from Stanford University. It is the first half of Stanford's flagship intro to python course, CS106A. I covered 6 sections including variables, functions, object-oriented programming, graphics, etc.`,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Arizona_State_University_logo.svg",
    alt: "Arizona State University logo",
    date: "2019 - 2021",
    work: `Completed my Masters in Robotics and Autonomous Systems specializing in Artificial Intelligence from Arizona State University. Had a great time meeting such lovely and talented professors and students at ASU. Absolutely fell in love with Linear Algebra. 
        Did <a href="https://forge.engineering.asu.edu/furiproject/drone-swarms-in-search-and-rescue-operations/">research</a> on using reinforcement learning to model drone controllers. Also did a 4 month internship at <a href="https://www.mathworks.com">MathWorks</a> to design reinforcement learning based controllers for obstacle avoidance
        in self-driving cars. TA'd for CSE 220 - Programming for Computer Engineering and CSE 240 - Introduction to Programming in C++.
        `,
  },
];

export default function MyTimeline() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <h2>Recent Work</h2>

      {/* Mathworks */}
      {recentWork.map((work, idx) => {
        return (
          <div
            key={idx}
            style={{ display: "flex", width: "100%", marginBottom: 40 }}
          >
            <div
              style={{
                flex: "0 0 25%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src={work.logo}
                width={200}
                height={200}
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: 0,
                  paddingTop: 0,
                }}
                alt={work.alt}
              />
              <div style={{ marginTop: 10 }}>{work.date}</div>
            </div>
            <div style={{ flex: "0 0 75%", marginLeft: 20 }}>
              {parse(work.work)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
