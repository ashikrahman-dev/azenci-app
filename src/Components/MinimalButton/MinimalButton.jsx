import { Link } from "react-router-dom";

const MinimalButton = () => {
    return (
        <div>
            <Link className="common-minimal-btn radius-12 fs-15 lh-18 fw-semibold text-main d-inline-block text-decoration-none">
                <span className="d-flex align-items-center ">
                    <span>See Portfolio</span>
                </span>
            </Link>
        </div>
    );
};

export default MinimalButton;