import React, { useState, useEffect } from 'react';
import { Layout, Menu, Table, Form, Input, Button, Upload, message, DatePicker, Row, Col, Breadcrumb, Card } from 'antd';
import { UploadOutlined, UserOutlined, MoneyCollectOutlined, CalendarOutlined, SettingOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../styles/AdminPanel.css'; 

const { Header, Content, Sider } = Layout;
const { TextArea } = Input;

const AdminPanel = () => {
  const [donations, setDonations] = useState([]);
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('donations');
  const [form] = Form.useForm();

  const handleEventSubmit = (values) => {
    const { title, description, date, image } = values;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date', date.format('YYYY-MM-DD'));
    formData.append('image', image.file.originFileObj);

    axios.post('/api/events', formData)
      .then(response => {
        message.success('Event posted successfully');
        setEvents([...events, response.data]);
        form.resetFields();
      })
      .catch(error => message.error('Failed to post event'));
  };

  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
  };

  const donationColumns = [
    { title: 'Donor Name', dataIndex: 'donorName', key: 'donorName' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
  ];

  const userColumns = [
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
  ];

  const eventColumns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={256} className="site-layout-background">
        <Menu mode="inline" selectedKeys={[selectedMenu]} onClick={handleMenuClick}>
          <Menu.Item key="donations" icon={<MoneyCollectOutlined />}>Donations</Menu.Item>
          <Menu.Item key="users" icon={<UserOutlined />}>Users</Menu.Item>
          <Menu.Item key="events" icon={<CalendarOutlined />}>Events</Menu.Item>
          <Menu.Item key="settings" icon={<SettingOutlined />}>Settings</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-header">
          <Breadcrumb style={{ padding: '16px' }}>
            <Breadcrumb.Item>Admin Panel</Breadcrumb.Item>
            <Breadcrumb.Item>{selectedMenu.charAt(0).toUpperCase() + selectedMenu.slice(1)}</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: '16px', padding: '24px', background: '#fff' }}>
          {selectedMenu === 'donations' && (
            <Card title="Donation Details" className="card">
              <Table
                dataSource={donations}
                columns={donationColumns}
                rowKey="id"
                pagination={{ pageSize: 5 }}
                className="table"
              />
            </Card>
          )}
          {selectedMenu === 'users' && (
            <Card title="User Management" className="card">
              <Table
                dataSource={users}
                columns={userColumns}
                rowKey="id"
                pagination={{ pageSize: 5 }}
                className="table"
              />
            </Card>
          )}
          {selectedMenu === 'events' && (
            <Card title="Post New Event" className="card">
              <Form
                form={form}
                onFinish={handleEventSubmit}
                layout="vertical"
                style={{ maxWidth: '800px', margin: '0 auto' }}
              >
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="title"
                      label="Event Title"
                      rules={[{ required: true, message: 'Please enter event title' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="description"
                      label="Event Description"
                      rules={[{ required: true, message: 'Please enter event description' }]}
                    >
                      <TextArea rows={4} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="date"
                      label="Event Date"
                      rules={[{ required: true, message: 'Please select event date' }]}
                    >
                      <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="image"
                      label="Event Image"
                      rules={[{ required: true, message: 'Please upload an image' }]}
                    >
                      <Upload beforeUpload={() => false} maxCount={1}>
                        <Button icon={<UploadOutlined />} style={{ width: '100%' }}>
                          Upload Image
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    Post Event
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          )}
          {selectedMenu === 'settings' && (
            <Card title="Site Settings" className="card">
              <p>Settings functionality to be implemented.</p>
            </Card>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPanel;
