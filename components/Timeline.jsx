"use client";
import stanfordIcon from "../public/static/images/site/stanford.svg"
import Image from "next/image";
import Link from "next/link";
import parse from 'html-react-parser'

const recentWork = [
    {
        logo: "static/images/site/matlab.svg",
        alt: "MathWorks logo",
        date: "2021 - 2024",
        work: `At MathWorks, I work as a software engineer developing low latency sensor simulation framework encompassing sensors like camera, radar, lidar and ultrasonic for automated driving applications. To leverage the power of the GPU, I also develop shaders in CUDA to enable ray tracing in C++ for photo realistic scenes. I am also the primary developer and maintainer of <a href=\"https://www.mathworks.com/help/driving/ref/birdseyescope-app.html\">Bird's-Eye Scope</a>, a visualization tool for automated driving. <Image src=\"/static/images/site/rr.png\" width={500} height={500} /><Image src=\"/static/images/site/bes.png\"width={500}height={500} />
               During my initial year, I worked extensively in the domain of computer vision and deep learning. 
               I developed a <a href="https://www.mathworks.com/help/driving/ug/perception-based-parking-spot-detection-using-unreal-engine-simulation.html">vision-based parking spot detection system within a 3D simulation environment using Unreal Engine® </a>, 
               involving the Automated Driving Toolbox, Computer Vision Toolbox, Simulink, and Image Processing Toolbox. 
               The project included configuring a realistic parking lot scene, integrating and calibrating a camera sensor for semantic segmentation, 
               and implementing algorithms to construct a bird's-eye-view map of the parking lot. 
               <Image src="/static/images/site/semantic.png" width={400} height={400} alt="Residual Net detecting parking scene"/>
               I trained resNet from scratch for semantic segmentation, applied traditional geometrical computer vision techniques like the Hough Transform, RANSAC, projective transformation, etc. for parking line detection, analyzed vertices to identify empty parking spots,
               and object recognition.
               <Image src="/static/images/site/ransac.png" width={400} height={400} alt="Using Hough Transforms and RANSAC to fit lines"/>
               `,

    },
    {
        logo: "static/images/site/stanford.svg",
        alt: "Stanford logo",
        date: "2024",
        work: `Taught students how to code! \n<a href="https://codeinplace.stanford.edu">Code in place</a> is a free, human-centered, intro-to-coding course from Stanford University. It is the first half of Stanford's flagship intro to python course, CS106A. I covered 6 sections including variables, functions, object-oriented programming, graphics, etc.`
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Arizona_State_University_logo.svg",
        alt: "Arizona State University logo",
        date: "2019 - 2021",
        work: `Completed my Masters in Robotics and Autonomous Systems specializing in Artificial Intelligence from Arizona State University. Had a great time meeting such lovely and talented professors and students at ASU. Absolutely fell in love with Linear Algebra. 
        Did <a href="https://forge.engineering.asu.edu/furiproject/drone-swarms-in-search-and-rescue-operations/">research</a> on using reinforcement learning to model drone controllers. Also did a 4 month internship at <a href="https://www.mathworks.com">MathWorks</a> to design reinforcement learning based controllers for obstacle avoidance
        in self-driving cars. TA'd for CSE 220 - Programming for Computer Engineering and CSE 240 - Introduction to Programming in C++.
        `
    }
]

export default function MyTimeline() {
    return (

        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <h2>Recent Work</h2>

            {/* Mathworks */}
            {
                recentWork.map((work, idx) => {
                    return (
                        <>
                            <div key={idx} style={{ display: "flex", width: "100%", marginBottom: 40 }}>
                                <div style={{ flex: "0 0 25%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Image
                                        src={work.logo}
                                        width={200}
                                        height={200}
                                        style={{ width: "100%", height: "auto", marginTop: 0, paddingTop: 0 }}
                                        alt={work.alt}
                                    />
                                    <div style={{ marginTop: 10 }}>{work.date}</div>
                                </div>
                                <div style={{ flex: "0 0 75%", marginLeft: 20 }}>
                                    {parse(work.work)}
                                </div>

                            </div>

                        </>
                    )

                })
            }
        </div>


    )
}