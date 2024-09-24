import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { List, Modal, message, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const AllBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://propcodebackendadminpaneltesting.onrender.com/api/blogs/blogs"
        );
        setBlogs(response.data);
      } catch (error) {
        console.log(`Error Fetching Data: ${error}`);
      }
    };
    getData();
  }, []);

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  const showDeleteConfirm = (id) => {
    setBlogToDelete(id);
    setIsModalVisible(true);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://propcodebackendadminpaneltesting.onrender.com/api/blogs/delete/${blogToDelete}`
      );
      if (response.status === 200) {
        setBlogs(blogs.filter((blog) => blog._id !== blogToDelete));
        message.success("Blog deleted successfully");
      } else {
        message.error("Failed to delete blog");
        throw new Error("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog", error);
      Modal.error({
        content: "Failed to delete blog. Please try again.",
      });
    } finally {
      setIsModalVisible(false);
      setBlogToDelete(null);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setBlogToDelete(null);
  };

  return (
    <div className="container mx-auto p-4 lg:mt-16 mt-0">
      <h2 className="text-3xl font-bold uppercase text-center my-4">
        All Blogs
      </h2>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={blogs}
        renderItem={(blog) => (
          <List.Item
            key={blog._id}
            extra={
              <img
                width={272}
                alt={blog.projecttitle}
                src={`https://propcodebackendadminpaneltesting.onrender.com/public/uploads/${blog.blogimg}`}
                style={{ borderRadius: "10px" }}
              />
            }
            style={{
              border: "1px solid #e6e6e6",
              borderRadius: "10px",
              marginBottom: "16px",
              padding: "16px",
            }}
          >
            <List.Item.Meta
              title={
                <Link
                  to={`/${blog.slug}`}
                  className="text-xl font-semibold text-blue-600 hover:underline"
                >
                  {blog.name}
                </Link>
              }
              description={
                <div>
                  <div className="text-gray-500 text-sm mb-2">
                    {blog.readingTime} | {blog.date}
                  </div>
                  <p>{truncateText(blog.headingOne, 50)}</p>
                </div>
              }
            />
            <div className="flex justify-end gap-4 items-center">
              <Link to={`/editblog/${blog._id}`}>
                <Button type="link" icon={<EditOutlined />} />
              </Link>
              <Button
                type="link"
                icon={<DeleteOutlined />}
                onClick={() => showDeleteConfirm(blog._id)}
                danger
              />
            </div>
          </List.Item>
        )}
      />
      <Modal
        title="Confirm Delete"
        open={isModalVisible}
        onOk={handleDelete}
        onCancel={handleCancel}
        okText="Yes"
        cancelText="No"
      >
        <p>Are you sure you want to delete this blog?</p>
      </Modal>
    </div>
  );
};

export default AllBlogs;
