/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";

const FillButton = () => {
    return (
        <div>
            <Link className="common-fill-btn radius-12 fs-15 lh-18 fw-semibold text-white d-inline-block text-decoration-none">
                <span className="d-flex align-items-center ">
                    <span>Get Started</span>
                </span>
            </Link>
        </div>
    );
};

export default FillButton;