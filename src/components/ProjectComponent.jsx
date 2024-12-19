function ProjectComponent({theProject}) {
    return (
        <div className="mt-8 border-b-2 pb-5">
                <div className="flex flex-col lg:flex-row justify-start gap-4">
                    {/* left */}
                    <div className="border-slate-500 border rounded-lg sm:max-w-[340px] sm:max-h-[180px] ">
                        <img src={theProject.imageLink} className="h-full w-full rounded-lg hover:cursor-pointer 
                        hover:opacity-50 transition-opacity duration-300"></img>
                    </div>

                    {/* right */}
                    <div className="space-y-2  lg:w-[600px]">
                        <h1 className="text-[30px] font-bold">{theProject.name}</h1>
                        <div className="flex gap-2">
                            <div className="bg-blue-950 text-white py-1 px-2 rounded-full">2024</div>
                            <a href={theProject.websiteLink} className="text-blue-700 text-lg hover:underline">Visit website &#8599;</a>
                        </div>
                        <p>{theProject.description}
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default ProjectComponent
