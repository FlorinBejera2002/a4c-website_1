export const About = () => {
    return (
        <>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-[100px]"
                >
                    {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                    <path
                        d="M0,0 C100,200 900,0 1200,50 L1500,120 L0,150 Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>
            <div className="container min-h-screen flex flex-col items-center justify-center relative bg-white z-10">

                <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
                <p className="mt-4 text-gray-700 max-w-2xl text-center">
                    Hello! I’m a passionate developer with experience in building web and mobile applications.
                    I specialize in creating beautiful, responsive, and functional user interfaces.
                </p>
            </div>
        </>
    );
}
