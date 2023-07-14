import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { ProjectType } from 'types/projectType';

import LogoIcon from 'components/logo-icon/logoIcon';

interface ProjectEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectData: ProjectType;
};

const ProjectEntryModal = ({
  isOpen,
  onClose,
  projectData
}: ProjectEntryModalProps) => {
  const {
    name, 
    date, 
    description, 
    image, 
    bgColor="#D9D9D9",
    techStack,
    links
  } = projectData

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="hidden md:block">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="max-w-[80%] p-5 bg-background rounded-lg">
              <div className="flex flex-row gap-5 h-fit bg-transparent">
                <div 
                  style={{ backgroundColor: bgColor }} 
                  className="w-1/3 h-[200px] p-2 gap-10 flex items-center justify-center rounded"
                >
                  <img alt={name + "_image"} src={image} />
                </div>
                <div className="w-2/3 md:col-span-2 flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p className="text-[20px] font-bold tracking-wider text-text">{name.toUpperCase()}</p>
                    <p className="text-[15px] font-bold text-primary">{date}</p>
                  </div>
                  
                  {
                    description.map((desc, index) => <p key={index} className="text-[15px]">{desc}</p>)
                  }
                  <div className="flex-grow flex flex-wrap gap-x-14 gap-y-1">
                    {techStack !== undefined && <div className="w-min flex flex-col justify-end">
                      <p className="text-subtext font-bold">Tech</p>
                      <div className="h-min w-min flex flex-row gap-1 ">
                        {
                          techStack.map((tech, index) => <LogoIcon key={index} name={tech}/>)
                        } 
                      </div>
                    </div>}
                    {links !== undefined && <div className="w-min flex flex-col justify-end">
                      <p className="text-subtext font-bold">Links</p>
                      <div className="h-min w-min flex flex-row gap-1 ">
                        {
                          links.map((pLink, index) => <LogoIcon key={index} name={pLink.location} link={pLink.link}/>)
                        } 
                      </div>
                    </div>}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <button className="py-1 px-2 rounded border border-primary text-primary hover:text-white hover:bg-primary transition" onClick={onClose}>Close</button>
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ProjectEntryModal;