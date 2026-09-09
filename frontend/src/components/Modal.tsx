import type {ReactNode} from "react";

type ModalProps = {
  title: string;
  children: ReactNode;
};

export function Modal({ title, children }: ModalProps) {
  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      
      <div className="bg-white rounded-2xl shadow-sm w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">

        <div className="flex items-center pb-6">
          <h2 className="text-lg font-semibold text-slate-700">{title}</h2>
        </div>

        <div className="">
          {children}
        </div>
        
      </div>

    </div>
  );
}