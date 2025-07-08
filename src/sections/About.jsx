import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
    const grid2Container = useRef();
    return (
        <section className="c-space section-spaceing">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/*Grid 1*/}
                <div className="flex items-end relative grid-default-color grid-1 overflow-hidden p-4 sm:p-6 lg:p-8">
                    <img
                        src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                    />

                    <div className="relative z-10 max-w-full">
                        <p className="headtext mb-2">
                            Hi, I'm Niladri Banik
                        </p>
                        <p className="subtext max-w-md text-sm sm:text-base text-neutral-100 leading-relaxed">
                            I am a software developer with an MCA background, showcasing expertise in both back-end and front-end development with hands-on experience. Additionally, I bring valuable experience as a teacher.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
                </div>
                {/*Grid 2*/}
                <div className="grid-default-color grid-2">
                    <div
                        ref={grid2Container}
                        className="flex items-center justify-center w-full h-full"
                    >
                        <p className="flex items-end text-5xl text-gray-500">
                            CODE IS CRAFT
                        </p>

                        <Card
                            style={{ rotate: "75deg", top: "30%", left: "20%" }}
                            text="c"
                            containerRef={grid2Container}
                        />

                        <Card
                            style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                            text="c++"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "45deg", top: "30%", left: "70%" }}
                            text="python"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "20deg", top: "45%", left: "0%" }}
                            text="DBMS"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "30deg", top: "70%", left: "70%" }}
                            image="assets/logos/mongoDB.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                            image="assets/logos/javascript.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "0deg", top: "5%", left: "10%" }}
                            image="assets/logos/react.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "15deg", top: "55%", left: "12%" }}
                            image="assets/logos/node.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "55deg", top: "10%", left: "30%" }}
                            image="assets/logos/word.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "35deg", top: "80%", left: "10%" }}
                            image="assets/logos/html.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "0deg", top: "65%", left: "44%" }}
                            image="assets/logos/css.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "0deg", top: "15%", left: "69%" }}
                            image="assets/logos/express.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "0deg", top: "15%", left: "50%" }}
                            image="assets/logos/java.png"
                            containerRef={grid2Container}
                        />

                    </div>
                </div>
                {/*Grid 3*/}
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Time Zone</p>
                        <p className="subtext">
                            I'm based in Mars, and open to remote work worldwide
                        </p>
                        <figure className="absolute left-[30%] top-[10%]" >
                            <Globe />
                        </figure>
                    </div>
                </div>
                {/*Grid 4*/}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            Do you want to start a project together?
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className="grid-default-color grid-5 relative">
                    <div className="z-10 w-full md:w-[50%] space-y-4 p-4">
                        <div>
                            <p className="headtext">Soft Skills</p>
                            <p className="subtext">
                                Teamwork, Leadership, Negotiation
                            </p>
                        </div>

                        <div>
                            <p className="headtext">Personality Strengths</p>
                            <p className="subtext">
                                Active Listening, Decision-Making, Management Skills
                            </p>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
