// pages/projects.js
const projects = [
    { title: 'Project One', description: 'This is a description of project one.' },
    { title: 'Project Two', description: 'This is a description of project two.' },
    { title: 'Project Three', description: 'This is a description of project three.' },
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">My Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <div key={index} className="p-4 bg-white rounded-md shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                        <p className="mt-2 text-gray-600">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
