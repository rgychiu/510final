import { 
  Layout, 
  Row,
  Col,
  Typography
} from 'antd';

import { 
  MovieList
} from './components';

function AllMovies() {
  return (
    <Layout>
        <Row className='background' align='top' justify='center'>
            <Col className='section-panel light-bg' span={16}>
                <Row justify='center'>
                    <Typography.Title level={2} className='text-white margin-top-lg'>All Movies</Typography.Title>
                </Row>

                <MovieList all={true}/>
            </Col>
        </Row>
    </Layout>
  );
}

export default AllMovies;
