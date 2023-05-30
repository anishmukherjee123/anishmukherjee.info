import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export function Footer(): JSX.Element {
    return (
        <footer className="footer border-t py-3 bg-light">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-4 mb-0 text-muted">
                        <span className="">
                            This site was built from scratch in React!
                        </span>
                    </div>
                    <div className="col-2 mb-0 text-muted">
                        <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            href="https://github.com/anishmukherjee123/anishmukherjee.info">
                            Repo available here.
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}