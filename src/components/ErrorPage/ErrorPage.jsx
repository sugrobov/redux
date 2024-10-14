import { useNavigate, useRouteError } from 'react-router-dom';


function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">{error.statusText}</span>
            <div className="h-12 w-full">{error.data}</div>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => navigate(-1)}>Вернуться</button>
        </div>
    )
}

export default ErrorPage;