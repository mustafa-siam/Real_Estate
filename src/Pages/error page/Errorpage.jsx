import { BsEmojiAngry } from "react-icons/bs";
const Errorpage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-8 h-screen">
            <p className="text-6xl"><BsEmojiAngry /></p>
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-lg space-x-1.5">opps! Page not found</p>
        </div>
    );
};

export default Errorpage;