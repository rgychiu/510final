import { Layout, Menu } from 'antd'

function NavBar () {
    return (
        <Layout id="navbar">
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
                <Menu.Item key='1'>Home</Menu.Item>
                <Menu.Item key='2'>All Movies</Menu.Item>
            </Menu>
        </Layout>
    );
}

export default NavBar;