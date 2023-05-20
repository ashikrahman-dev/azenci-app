import { Col, Container, Row } from 'react-bootstrap'
import './SubPageHeader.scss'


const SubPageHeader = ({ pageName }) => {
	return (
		<div>
			<div className='page-heder-wrap position-relative'>
				<Container>
					<Row>
						<Col>
							<div className="page-hede-inner text-center">
								<h1 className='fs-56 lh-72 text-dark-1 fw-bold'>
									{ pageName }
								</h1>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default SubPageHeader;