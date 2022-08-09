import Particles from "react-tsparticles";

    function particals() {
        
        const particlesInit = (main) => {
        console.log(main);
        };
    
        const particlesLoaded = (container) => {
        console.log(container);
        };

    return(
        <div className="particals">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 30,
                    interactivity: {
                    events: {
                        onClick: {
                        enable: false,
                        mode: "push",
                        },
                        onHover: {
                        enable: false,
                        mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                        distance: 100,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                        },
                        push: {
                        quantity: 6,
                        },
                        repulse: {
                        distance: 100,
                        duration: 0.8,
                        },
                    },
                    },
                    particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: false,
                        opacity: 0.85,
                        width: 0.5,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode:"bounce",
                        random: true,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                        enable: true,
                        area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.6,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                    },
                    detectRetina: true,
                }}
                
                />
        </div>
    );
}

export default particals;
    