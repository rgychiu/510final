import './styles/App.css';
import { 
  Layout, 
  Row,
  Col,
  Typography
} from 'antd';

import { 
  MovieList,
  SearchBar,
} from './components';

function App() {
  return (
    <Layout>
      <Row className='background' align='top' justify='center'>
        <Col className='section-panel light-bg' span={8}>
          <Row justify='center'>
            <Typography.Title level={2} className='text-white margin-top-lg'>All Movies</Typography.Title>
          </Row>

          <MovieList />
        </Col>

        <Col className='section-panel light-bg' offset={1} span={15}>
          <Row justify='center'>
            <Typography.Title level={2} className='text-white margin-top-lg'>Find Relevant Movies</Typography.Title>
          </Row>
          
          <SearchBar />
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
