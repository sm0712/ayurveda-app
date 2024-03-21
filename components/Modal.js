import { FiX } from "react-icons/fi";
export default function Modal({isVisible, OnClose, children}) {
  if(!isVisible) return null;  
  const handleClose=(e)=>{
    if(e.target.id==='wrapper')OnClose();
  }
  return (
   
    
      <div id="wrapper" onClick={handleClose} className="inset-0 fixed bg-black opacity-95 backdrop-blur flex justify-center items-center">
        <div className="w-[50%] flex flex-col">
          <button className="place-self-end">
            <FiX onClick={()=>OnClose()}className="text-gray-100 text-3xl cursor-pointer" />
          </button>
          <div className="bg-white rounded p-5">{children}</div>
        </div>
      </div>
    
  );
}
