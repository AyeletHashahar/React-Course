import Button from "./Button"

export default function SideBar( {addProject, projects, selectProject, selectedProjectID} ) {
    return (
        <aside className="w-1/3 px-8 py-6 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <div>
                <Button lable="+ Add Project" onClick={addProject} />
            </div>
            <ul className="space-y-4">
                {/* <li className="hover:bg-gray-700 p-2 rounded">Learning React</li> */}
                {projects.map((project) => {
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

                    if(project.id === selectedProjectID) {
                        cssClasses += ' bg-stone-800 text-stone-200'
                    } else {
                        cssClasses += ' text-stone-400'
                    }
                    
                    return (
                        <li key={project.id}>
                            <button onClick={() => selectProject(project.id)} className={cssClasses} >{project.title}</button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    )
}