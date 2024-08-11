function Rent(){
    return(
        <div>
        <div>this is rent page</div>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4">File Upload Details</h1>
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                <input 
                    type="text" 
                    value="JohnDoe" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    readOnly 
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input 
                    type="text" 
                    value="Sample Photo" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    readOnly 
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Photo:</label>
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="Photo" 
                    className="w-full h-auto rounded" 
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
                <input 
                    type="text" 
                    value="$100" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    readOnly 
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                <input 
                    type="text" 
                    value="New York, USA" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    readOnly 
                />
            </div>

            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button"
            >
                Upload Another File
            </button>
        </div>
        </div>
    )
}

export default Rent;