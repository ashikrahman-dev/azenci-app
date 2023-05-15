import { Link } from "react-router-dom";
import "./MinimalButton.scss"

const MinimalButton = ( minimalBtnLinkText ) => {

    const { buttonLink, buttonText } = minimalBtnLinkText;

    return (
        <div>
            <Link className="common-minimal-btn radius-12 fs-15 lh-18 fw-semibold text-main d-inline-block text-decoration-none" to={ buttonLink }>
                <span className="d-flex align-items-center ">
                    <span>{ buttonText }</span>
                </span>
            </Link>
        </div>
    );
};

export default MinimalButton;