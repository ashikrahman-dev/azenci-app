/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import "./FillButton.scss"

const FillButton = (fillBtnLinkText) => {

    const { buttonText, buttonLink } = fillBtnLinkText;

    return (
        <div>
            <Link className="common-fill-btn radius-12 fs-15 lh-18 fw-semibold text-white d-inline-block text-decoration-none" to={ buttonLink }>
                <span className="d-flex align-items-center ">
                    <span>{ buttonText }</span>
                </span>
            </Link>
        </div>
    );
};

export default FillButton;