import React, { useState, useRef, useMemo, useEffect } from "react";
import { DatePicker, Space, message } from "antd";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import JoditEditor from "jodit-react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the blog ID from URL parameters
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [input, setInput] = useState({
    name: "",
    slug: "",
    projecttitle: "",
    projecttitledesc: "",
    date: "",
    readingTime: "",
    headingOne: "",
    headingOnedesc: "",
    summary: "",
    blogimg: null,
    singleblogimg: null,
    metatitle: "",
    metadescription: "",
    metakeywords: "",
    canonical: "",
    metaschema: "",
  });

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
    }),
    []
  );

  // Fetch blog details for editing

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "projecttitle") {
      const slugifiedTitle = value
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "");
      setInput((prevInput) => ({
        ...prevInput,
        projecttitle: value,
        slug: slugifiedTitle,
      }));
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setInput((prevInput) => ({
        ...prevInput,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("slug", input.slug);
    formData.append("projecttitle", input.projecttitle);
    formData.append("projecttitledesc", input.projecttitledesc);
    formData.append("date", input.date);
    formData.append("readingTime", input.readingTime);
    formData.append("headingOne", input.headingOne);
    formData.append("headingOnedesc", content);
    formData.append("summary", input.summary);
    formData.append("blogimg", input.blogimg);
    formData.append("singleblogimg", input.singleblogimg);
    formData.append("metatitle", input.metatitle);
    formData.append("metadescription", input.metadescription);
    formData.append("metakeywords", input.metakeywords);
    formData.append("canonical", input.canonical);
    formData.append("metaschema", input.metaschema);

    try {
      await axios.post(
        "https://propcodebackendadminpaneltesting.onrender.com/api/blogs/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      message.success("Blog added successfully!");

      navigate("/allblogs");
      resetForm();
    } catch (error) {
      message.error("Failed to add blog. Please try again.");
      console.log(`Failed to Add Blog: ${error}`);
    }
  };

  const resetForm = () => {
    setInput({
      name: "",
      slug: "",
      projecttitle: "",
      projecttitledesc: "",
      date: "",
      readingTime: "",
      headingOne: "",
      headingOnedesc: "",
      summary: "",
      blogimg: null,
      singleblogimg: null,
      metatitle: "",
      metadescription: "",
      metakeywords: "",
      canonical: "",
      metaschema: "",
    });
    setContent("");
  };

  return (
    <div className="border text-center w-full sm:w-[90%] px-4 sm:px-0 mx-auto pb-5 mt-12 sm:mt-24 rounded mb-10">
      <h2 className="font-semibold text-2xl sm:text-3xl text-white rounded-t bg-blue-500 p-2">
        Add Blog
      </h2>
      <form className="text-start m-4 p-2" onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mt-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Project Title
          </label>
          <input
            type="text"
            name="projecttitle"
            value={input.projecttitle}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mt-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Blog Slug</label>
          <input
            type="text"
            name="slug"
            value={input.slug}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mt-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Project Title Description
          </label>
          <input
            type="text"
            name="projecttitledesc"
            value={input.projecttitledesc}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mt-2"
            required
          />
        </div>
        <div className="mb-4 w-52">
          <label className="block text-gray-700 font-semibold">Date</label>
          <Space direction="vertical" className="w-full mt-2">
            <DatePicker
              className="w-full"
              onChange={(date, dateString) =>
                setInput((prev) => ({ ...prev, date: dateString }))
              }
            />
          </Space>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Reading Time
          </label>
          <Select
            name="readingTime"
            onValueChange={(value) =>
              setInput((prev) => ({ ...prev, readingTime: value }))
            }
          >
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select Reading Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="5 min">5 min</SelectItem>
                <SelectItem value="10 mins">10 mins</SelectItem>
                <SelectItem value="15 mins">15 mins</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Heading One
          </label>
          <input
            type="text"
            name="headingOne"
            value={input.headingOne}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mt-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Heading One Description
          </label>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Summary</label>
          <textarea
            name="summary"
            rows={4}
            value={input.summary}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mt-2 resize-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Blog Image
          </label>
          <Input
            type="file"
            name="blogimg"
            onChange={handleFileChange}
            className="mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Single Blog Image
          </label>
          <Input
            type="file"
            name="singleblogimg"
            onChange={handleFileChange}
            className="mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Meta Title
          </label>
          <input
            type="text"
            name="metatitle"
            value={input.metatitle}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Meta Description
          </label>
          <input
            name="metadescription"
            value={input.metadescription}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Meta Keywords
          </label>
          <input
            type="text"
            name="metakeywords"
            value={input.metakeywords}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Canonical</label>
          <input
            type="text"
            name="canonical"
            value={input.canonical}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Meta Schema
          </label>
          <input
            type="text"
            name="metaschema"
            value={input.metaschema}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded mt-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-full text-white rounded py-2 px-4"
        >
          Add +
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
