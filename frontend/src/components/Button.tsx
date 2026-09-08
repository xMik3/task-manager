import type {ButtonHTMLAttributes,ReactNode} from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick?: () => void;
};

export function Button({children,className="",...props}: ButtonProps){

    return (
        <button className={`${className}`} {...props}>
            {children}
        </button>
    );
    
}