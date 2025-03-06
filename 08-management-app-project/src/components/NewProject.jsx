import { useState, useRef } from "react";
import Input from "./Input";
import Model from "./Model";

export default function NewProject({addProject, cancelProject}) {
    const model = useRef();

    const enterTitle = useRef();
    const enterDescription = useRef();
    const enterDueDate = useRef();

    function handleSave() {
        const titleValue = enterTitle.current.value.trim();
        const descriptionValue = enterDescription.current.value.trim();
        const dueDateValue = enterDueDate.current.value.trim();
    
        if (titleValue === '' || descriptionValue === '' || dueDateValue === '') {
            if (model.current) {
                model.current.open();
            }
            return;
        }

        addProject({
            title: enterTitle.current.value,
            description: enterDescription.current.value,
            dueDate: enterDueDate.current.value
        });
    }

    return (
        <>
            <Model ref={model} buttonCaption="Close">
                <h2 className='text-xl font-bold text-stone-500 mt-4 mb-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops... looks like you forgot to enter a value.</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
            </Model>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={cancelProject}>Cancel</button>
                    </li>
                    <li>
                        <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md" onClick={handleSave}>Save</button>
                    </li>
                </menu>
                <div>
                    <Input  
                        label="Title"  
                        type="text"
                        ref={enterTitle} 
                    />
                    <Input  
                        label="Description" 
                        isTextArea
                        ref={enterDescription} 
                    />
                    <Input  
                        label="Due Date" 
                        type="date"
                        ref={enterDueDate} 
                    />
                </div>
            </div>
        </>
    )
}