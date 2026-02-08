import { useProject } from '@/context/ProjectContext';
import { useEffect } from 'react';
import { MdClose, MdPlayCircle } from 'react-icons/md';

const Popup = () => {
  const { title, description, stack, deployedLink, togglePopUp } = useProject();
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const popUpElement = document.getElementById('pop-up');
      if (popUpElement && !popUpElement.contains(event.target as Node)) {
        const closeButton = document.getElementById('close-popup');
        if (closeButton && !closeButton.contains(event.target as Node)) {
          togglePopUp();
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [togglePopUp]);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border z-50  w-[90%] max-w-3xl min-h-[50%] h-[80%] flex flex-col p-4 overflow-auto bg-white" id='pop-up'>
      <div className="flex justify-end gap-2">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="  text-sm underline flex items-center gap-[1px]">
          <MdPlayCircle className=" size-5 rounded-full" />View
        </a>
        <button onClick={togglePopUp} id='close-popup' className='flex items-center gap-[1px] text-sm'>
          <MdClose className="size-4 border rounded-full" /> Close
        </button>
      </div>
      <div className='flex items-center gap-2'>
        <span className={`block text-black font-bold uppercase`}>{title}</span>
      </div>
      <p className="py-4">{description}</p>
      <p className="text-black uppercase">{stack!.join("  |  ")}</p>
    </div>
  )
}

export default Popup