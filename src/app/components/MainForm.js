'use client';
import { Button, Form, Input } from "antd";

const MainForm = () => {
    return (
        <Form
    layout="vertical"
    // name="wrap"
    // labelCol={{ flex: '110px' }}
    // labelAlign="left"
    // labelWrap
    // wrapperCol={{ flex: 1 }}
    // colon={false}
    // style={{ maxWidth: 500 }}
  >
     {/* <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item> */}
    <Form.Item label="Normal label" name="firstname" rules={[{ required: true }]}>
      <Input placeholder="Enter first name"/>
    </Form.Item>

    <Form.Item label="A super long label text" name="lastname" rules={[{ required: true }]}>
      <Input placeholder="Enter last name" />
    </Form.Item>

    <Form.Item label="Company Name" name="companyname" >
      <Input placeholder="company name" />
    </Form.Item>

    <Form.Item label="Email" name="email" rules={[{ required: true }]}>
      <Input placeholder="mail" />
    </Form.Item>

    <Form.Item label="About ypu project" name="project" rules={[{ required: true }]}>
      <Input placeholder="About ypu project" />
    </Form.Item>

    <Form.Item label=" ">
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    );
};

export default MainForm;