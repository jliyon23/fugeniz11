import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import roulette from '../images/roulette.png';


const HomePage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Intersection Observer hooks for scroll animations
    const [aboutRef, aboutInView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const [eventsRef, eventsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Handle scroll events for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Array of event cards data
    const events = [
        {
            id: 1,
            title: "Code Casino",
            description: "Bet on your coding skills in this high-stakes programming competition",
            icon: "code",
            color: "bg-red-800",
            date: "March 13, 2025",
            time: "10:00 AM"
        },
        {
            id: 2,
            title: "Royal Robotics",
            description: "Build and battle robots in this royal rumble of mechanical engineering",
            icon: "robot",
            color: "bg-black",
            date: "March 14, 2025",
            time: "2:00 PM"
        },
        {
            id: 3,
            title: "Circuit Roulette",
            description: "Spin the wheel of electronic components and create working circuits",
            icon: "microchip",
            color: "bg-green-800",
            date: "March 15, 2025",
            time: "11:00 AM"
        }
    ];




    return (
        <div className='min-h-screen'>
            {/* hero section */}
            <div className='h-screen flex justify-center items-center'>
                <div className='bg-amber-100 p-8 md:p-16 flex flex-col justify-center items-center border border-amber-950 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] shadow-amber-950 relative' >
            
                    <h1 className="text-[2.75rem] md:text-7xl font-black mb-4 tracking-wider font-serif flex flex-wrap justify-center gap-0 md:gap-1 f1">
                        {Array.from("FUGENIZ.11").map((letter, index) => (
                            <span
                                key={index}
                                className="inline-block hover:transform hover:rotate-12 hover:scale-125 transition-transform duration-300 origin-center"
                            >
                                {letter}
                            </span>
                        ))}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 italic f2">RISING ABOVE</p>
                    <div className="inline-block border-2 border-dashed border-amber-900 rounded-full py-2 px-6 mb-6 transform -rotate-3">
                        <p className="m-0 font-bold f2">MARCH 13-17, 2025</p>
                    </div>
                    <p className="text-lg mb-8 f2">INTER COLLEGE TECH FEST</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-amber-900 text-white px-8 py-3 rounded text-lg font-bold hover:bg-amber-800 transition-all border-2 border-amber-900 shadow-[5px_5px_0px_0px_rgba(26,26,26,1)] f2">
                            {"  BROCHURE "}
                        </button>
                        <button className="bg-transparent border-2 border-amber-900 text-amber-900 px-8 py-3 rounded text-lg font-bold hover:bg-amber-900 hover:text-white transition-all shadow-[5px_5px_0px_0px_rgba(120,53,15,1)] f2">
                            VIEW EVENTS
                        </button>
                    </div>
                </div>
            </div>

            {/* About section  */}
            <section ref={aboutRef} className="py-16 bg-amber-900 text-white f2">
                            <div className="container mx-auto px-4">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                                    <div className={`md:w-1/2 transition-all duration-700 ${aboutInView ? 'opacity-100' : 'opacity-0 -translate-x-12'}`}>
                                        <h2 className="text-3xl font-bold mb-6 f2">About FUGENIZ.11</h2>
                                        <p className="mb-4 leading-relaxed">FUGENIZ.11 is an annual inter-collegiate technical festival that brings together the brightest minds from across the nation. This year, we're going all-in with our retro casino-themed celebration of technology and innovation.</p>
                                        <p className="mb-6 leading-relaxed">From coding challenges to robotics competitions, from hackathons to tech talks, FUGENIZ.11 offers a platform for students to showcase their skills, learn from industry experts, and collaborate with peers.</p>
                                        <button className="bg-white text-amber-900 px-6 py-2 rounded font-bold hover:bg-amber-200 transition-all border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
                                            Learn More
                                        </button>
                                    </div>
            
                                    <div className={`md:w-1/2 relative transition-all duration-700 ${aboutInView ? 'opacity-100' : 'opacity-0 translate-x-12'}`}>
                                        <div className="border-2 border-white bg-white/10 p-8 text-white backdrop-blur-sm">
                                            <h3 className="text-xl font-bold mb-4 text-center">Event Highlights</h3>
                                            <ul className="space-y-4">
                                                {[
                                                    { num: "01", title: "24-Hour Hackathon", desc: "Build innovative solutions to real-world problems", color: "bg-red-700" },
                                                    { num: "02", title: "Robo Wars", desc: "Battle of bots in an ultimate showdown", color: "bg-black" },
                                                    { num: "03", title: "Tech Talks", desc: "Insights from industry leaders and innovators", color: "bg-green-700" },
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center mr-4 text-sm flex-shrink-0 border-2 border-dashed border-white`}>
                                                            <span>{item.num}</span>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold">{item.title}</h4>
                                                            <p className="text-sm opacity-80">{item.desc}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
            
                                        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-red-800 to-black border-4 border-amber-900 animate-spin duration-4000">
                                            <img src={roulette} alt="Logo" className="w-full h-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
        </div>
    )
}

export default HomePage