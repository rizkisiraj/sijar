import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], preload: false, });

const ComingSoon = () => {
    return (
        <div className={`text-white mt-8 w-full text-center flex flex-col justify-center ${poppins.className}`}>
                <h1 className="text-4xl mb-4 font-semibold">Coming Soon</h1>
                <p>This page is still on progress. You might visit this page tomorrow or so on.</p>
        </div>
    )
}

export default ComingSoon;