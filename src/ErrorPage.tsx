import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    if (isRouteErrorResponse(error)) {
        return (
            <div className=".bg-light.bg-gradient container-fluid my-3 text-center">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1>Uh oh! {error.status}</h1>
                        <p>An unexpected error has occurred:</p>
                        <p>{error.statusText}</p>
                        {error.data?.message && (
                            <p>
                                <i>{error.data.message}</i>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        );
    } else if (error instanceof Error)
    {
        return (
            <div className=".bg-light.bg-gradient container-fluid my-3 justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1>Uh oh!</h1>
                        <p>An unexpected error has occurred:</p>
                        <p>
                            <i>{error.message}</i>
                        </p>
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}