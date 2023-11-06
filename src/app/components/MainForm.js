"use client";
import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Title from "../Title";

const MainForm = () => {
  const onFinish = (values) => {
    // Display the input data in the console
    console.log("Form input data:", values);
  };

  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      <Title />
      <Form
        layout="vertical"
        //  style={{ maxWidth: 1000 }}
        onFinish={onFinish}
      >
        <div className="flex flex-col md:flex-row justify-start items-center gap-0 md:gap-6 w-full">
          <div className="w-full md:w-1/2">
            <Form.Item
              label="First name"
              name="firstname"
              rules={[{ required: true }]}
            >
              <Input
                className="rounded-sm py-2 "
                placeholder="Enter first name"
              />
            </Form.Item>
          </div>

          <div className="w-full md:w-1/2">
            <Form.Item
              label="Last name"
              name="lastname"
              rules={[{ required: true }]}
            >
              <Input
                className="rounded-sm py-2 "
                placeholder="Enter last name"
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-start items-center gap-0 md:gap-6 w-full">
          <div className="w-full md:w-1/2">
            <Form.Item label="Company name" name="companyname">
              <Input
                className="rounded-sm py-2 "
                placeholder="Enter company name"
              />
            </Form.Item>
          </div>

          <div className="w-full md:w-1/2">
            <Form.Item
              label="Contact email"
              name="Enter contact email"
              rules={[{ required: true }]}
            >
              <Input className="rounded-sm py-2" placeholder="mail" />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          label="About your project"
          name="project"
          rules={[{ required: true }]}
        >
          <Input className="rounded-sm py-2" placeholder="Write message" />
        </Form.Item>

        <Form.Item
          label="Upload design images"
          name="images"
          rules={[{ required: true }]}
          style={{ width: "100%" }}
        >
          <Upload {...props}>
            <Input
              className="rounded-sm py-2"
              placeholder="Select file to Upload"
            />
            <p>Maximum 5 files, supported formats .png, .jpg, and .jpeg</p>
          </Upload>
        </Form.Item>

        {/* -------------------------------------- */}

        <Form.Item label=" ">
          <button
            type=""
            htmlType="submit"
            className="bg-[#C05E51] px-12 py-3 rounded-sm text-center text-white font-semibold"
          >
            Submit
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MainForm;
