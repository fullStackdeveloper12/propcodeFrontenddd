import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  Space,
  Avatar,
  Table as AntTable,
  Form,
  Input,
  Rate,
  message,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try refreshing the page.</h1>;
    }

    return this.props.children;
  }
}

const Testimonial = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const [testimonials, setTestimonials] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(
        "https://propcodebackendadminpaneltesting.onrender.com/api/testimonials/testimonials"
      );
      setTestimonials(response.data);
    } catch (error) {
      console.error("Error fetching testimonials", error);
      message.error("Failed to fetch testimonials");
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("review", values.review);
    formData.append("mapLink", values.mapLink);
    formData.append("rating", values.rating);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      if (isEditing) {
        await axios.put(
          `https://propcodebackendadminpaneltesting.onrender.com/api/testimonials/update/${currentId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        message.success("Testimonial updated successfully!");
      } else {
        await axios.post(
          "https://propcodebackendadminpaneltesting.onrender.com/api/testimonials/add",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        message.success("Testimonial added successfully!");
      }
      fetchTestimonials();
      setIsDialogOpen(false);
      setIsEditing(false);
      setCurrentId(null);
      form.resetFields();
      setSelectedFile(null);
    } catch (error) {
      console.error("Error handling testimonial", error);
      message.error("Error handling testimonial!");
    }
  };

  
  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this testimonial?",
      onOk: async () => {
        await handleDelete(id);
      },
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://propcodebackendadminpaneltesting.onrender.com/api/testimonials/delete/${id}`
      );
      fetchTestimonials();
      message.success("Testimonial deleted successfully!");
    } catch (error) {
      console.error("Error deleting testimonial", error);
      message.error("Error deleting testimonial!");
    }
  };

  const handleEdit = (testimonial) => {
    form.setFieldsValue({
      name: testimonial.name,
      review: testimonial.review,
      mapLink: testimonial.mapLink,
      rating: testimonial.rating,
    });
    setCurrentId(testimonial._id);
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const truncateReview = (review) => {
    const words = review.split(" ");
    return words.length > 30 ? words.slice(0, 30).join(" ") + "..." : review;
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Review",
      dataIndex: "review",
      key: "review",
      render: (review) => truncateReview(review),
    },
    {
      title: "Map Link",
      dataIndex: "mapLink",
      key: "mapLink",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => <Rate disabled defaultValue={rating} />,
    },
    {
      title: "Images",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <Avatar
          src={`https://propcodebackendadminpaneltesting.onrender.com/public/uploads/${image}`}
        />
      ),
    },
    {
      title: "Manage",
      key: "action",
      render: (_, testimonial) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(testimonial)}
            type="link"
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => showDeleteConfirm(testimonial._id)}
            type="link"
          />
        </Space>
      ),
    },
  ];

  return (
    <ErrorBoundary>
      <div className="flex flex-col rounded-lg p-2 lg:mt-16">
        <div className="w-full max-w-screen-sm mt-2">
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => {
              setIsDialogOpen(true);
              setIsEditing(false);
              form.resetFields();
              setSelectedFile(null);
            }}
          >
            Add +
          </Button>
          <div className="border lg:w-[1200px] p-2 mt-2 overflow-x-auto">
            {testimonials.length === 0 ? (
              <div className="text-center py-4">No testimonials found.</div>
            ) : (
              <AntTable
                columns={columns}
                dataSource={testimonials.map((testimonial) => ({
                  ...testimonial,
                  key: testimonial._id,
                }))}
                pagination={{ pageSize: 5 }}
                style={{ width: "100%" }}
              />
            )}
          </div>
        </div>
      </div>

      <Modal
        title={isEditing ? "Edit Testimonial" : "Add Testimonial"}
        open={isDialogOpen}
        onCancel={() => setIsDialogOpen(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="review"
            label="Review"
            rules={[{ required: true, message: "Please input the review!" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="mapLink"
            label="Map Link"
            rules={[{ required: true, message: "Please input the map link!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="rating" label="Rating">
            <Rate />
          </Form.Item>
          <Form.Item label="Image">
            <Input type="file" onChange={handleFileChange} />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                {isEditing ? "Update" : "Add"}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </ErrorBoundary>
  );
};

export default Testimonial;
