import { ReactNode } from "react";

type SubHeadingProps = {
    children: ReactNode
}


const SubHeading = ({children}: SubHeadingProps) => {
    return (
        <div>
             <p className="text-center mt-4 text-textGreen font-playWrite">
                    {children}
                </p>
        </div>
    );
};

export default SubHeading;