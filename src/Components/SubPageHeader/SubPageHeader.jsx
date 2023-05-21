import { Col, Container, Row } from 'react-bootstrap'
import './SubPageHeader.scss'

import LeftShape from '../../assets/img/sub-page-header-shape-1.svg'
import RightShape from '../../assets/img/sub-page-header-shape-2.svg'
import { Link } from 'react-router-dom';


const SubPageHeader = (Title) => {
	return (
		<div className='page-heder-wrap position-relative'>
			<Container className='content-container'>
				<Row>
					<Col>
						<div className="page-hede-inner text-center">
							<h1 className='fs-56 lh-72 text-dark-1 fw-bold pb-20'>
								{ Title.pageTitle }
							</h1>
							<div className="breadcrumb-wrap">
								<ul className='list-unstyled d-flex align-items-center justify-content-center fs-6 lh-26 fw-bold'>
									<li>
										<Link className='text-decoration-none text-dark-3 breadcrumb-disabled' to={ "/" }>Home</Link>
									</li>
									<li>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.93945 13.2807L10.2861 8.93404C10.7995 8.4207 10.7995 7.5807 10.2861 7.06737L5.93945 2.7207" stroke="#7A7792" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
									</li>
									<li>
										<span className='text-dark-2'>
											{ Title.pageTitle }
										</span>
									</li>
								</ul>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<div className="sub-page-shape-1 position-absolute start-0 top-0">
				<img src={ LeftShape } alt="Shape" className='img-fluid' />
			</div>
			<div className="sub-page-shape-2 position-absolute end-0 top-0">
				<img src={ RightShape } alt="Shape" className='img-fluid' />
			</div>
		</div>
	);
};

export default SubPageHeader;