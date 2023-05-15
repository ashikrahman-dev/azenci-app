/* eslint-disable react/prop-types */
import "./CommonSectionHeading.scss"


const CommonSectionHeading = ({subHeading, heading, description, subheadingColor, headingColor, descriptionColor}) => {

    return (
        <>
            <div className="section-heading-wrap">
                <div className={`sub-heading fs-14 lh-16 fw-semibold lt-09 text-uppercase ${subheadingColor}`}>
                    {subHeading}
                </div>
                <h2 className={`section-heading fs-38 lh-54 fw-bold ${headingColor}`}>
                    {heading}
                </h2>
                <p className={`fs-18 lh-28 ${descriptionColor}`}>
                    {description}
                </p>
            </div>
        </>
    );
};

export default CommonSectionHeading;