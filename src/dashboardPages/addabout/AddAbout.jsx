import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  Upload,
  message,
  Space,
  Avatar,
} from "antd";
import {
  PlusOutlined,
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const About = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [about, setAbout] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [fileList, setFileList] = useState([]);

  const fetchAbout = async () => {
    try {
      const response = await axios.get(
        "https://propcodebackendadminpaneltesting.onrender.com/api/about/abouts"
      );
      setAbout(response.data);
    } catch (error) {
      console.error("Error fetching about data", error);
      message.error("Failed to fetch about data");
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  const generateSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      if (key !== "image") {
        formData.append(key, values[key]);
      }
    });
    if (fileList.length > 0) {
      formData.append("image", fileList[0].originFileObj);
    }

    // Generate slug if not editing
    if (!isEditing) {
      formData.append("slug", generateSlug(values.name));
    }

    try {
      if (isEditing) {
        await axios.patch(
          `https://propcodebackendadminpaneltesting.onrender.com/api/about/update/${currentId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        message.success("About updated successfully");
      } else {
        await axios.post(
          "https://propcodebackendadminpaneltesting.onrender.com/api/about/add",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        message.success("About added successfully");
      }
      fetchAbout();
      setIsModalVisible(false);
      form.resetFields();
      setFileList([]);
    } catch (error) {
      console.error("Error handling about", error);
      message.error("Failed to process about data");
    }
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this item?",
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        try {
          await axios.delete(
            `https://propcodebackendadminpaneltesting.onrender.com/api/about/delete/${id}`
          );
          fetchAbout();
          message.success("Item deleted successfully");
        } catch (error) {
          console.error("Error deleting about", error);
          message.error("Failed to delete item");
        }
      },
    });
  };

  const handleEdit = (record) => {
    setCurrentId(record._id);
    setIsEditing(true);
    form.setFieldsValue(record);
    setFileList(
      record.image
        ? [
            {
              uid: "-1",
              name: "image.png",
              status: "done",
              url: `https://propcodebackendadminpaneltesting.onrender.com/public/uploads/${record.image}`,
            },
          ]
        : []
    );
    setIsModalVisible(true);
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Designation", dataIndex: "designation", key: "designation" },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <Avatar
          src={
            image
              ? `https://propcodebackendadminpaneltesting.onrender.com/public/uploads/${image}`
              : null
          }
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record._id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4">
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => {
          setIsEditing(false);
          setIsModalVisible(true);
          form.resetFields();
          setFileList([]);
        }}
        className="lg:mt-20"
      >
        Add About
      </Button>

      <Table
        columns={columns}
        dataSource={about}
        rowKey="_id"
        responsive
        scroll={{ x: true }}
      />

      <Modal
        title={isEditing ? "Edit About" : "Add About"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          {isEditing && (
            <Form.Item name="slug" label="Slug" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          )}
          <Form.Item
            name="designation"
            label="Designation"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="facebookUrl" label="Facebook URL">
            <Input />
          </Form.Item>
          <Form.Item name="instagramUrl" label="Instagram URL">
            <Input />
          </Form.Item>
          <Form.Item name="linkedinUrl" label="LinkedIn URL">
            <Input />
          </Form.Item>
          <Form.Item name="twitterUrl" label="Twitter URL">
            <Input />
          </Form.Item>
          <Form.Item label="Image">
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={({ fileList }) => setFileList(fileList)}
              beforeUpload={() => false}
              maxCount={1}
            >
              {fileList.length < 1 && (
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                {isEditing ? "Update" : "Submit"}
              </Button>
              <Button onClick={() => setIsModalVisible(false)}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default About;
