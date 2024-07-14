import { ReactNode } from "react";

type HeadingProps = {
    children: ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
    return (
        <div>
            <h1 className="text-center text-3xl font-semibold font-playWrite text-textGreen">
                {children}
            </h1>
        </div>
    );
};

export default Heading;
