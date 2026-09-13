import type {ButtonHTMLAttributes,ReactNode} from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dangerOutline" | "dangerFilled";
  onClick?: () => void;
};

export function Button({children, variant="primary", className="", ...props}: ButtonProps){

    const baseStyles = "cursor-pointer px-4 py-2 text-sm font-bold rounded-md transition-colors duration-200 focus:outline-none";
    
    const variants = {
        primary: "bg-slate-600 text-white hover:bg-slate-700 focus:ring-slate-500",
        secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-blue-500",
        dangerOutline: "bg-white text-red-600 border border-red-300 hover:bg-gray-50 focus:ring-red-500",
        dangerFilled: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
    
}