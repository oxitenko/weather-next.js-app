import spinner from "../public/spinner.gif";
import Image from "next/image";

const Spinner = () => {
    return (
        <div>
            <Image src={spinner} alt="Loading..." className="m-auto block"/>
        </div>
    );
};

export default Spinner;