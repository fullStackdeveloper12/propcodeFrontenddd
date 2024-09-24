import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Button,
  message,
  Form,
  Input,
  Upload,
  Collapse,
  Card,
  Space,
  Row,
  Col,
  Select,
} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { Panel } = Collapse;
const { TextArea } = Input;
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import JoditEditor from "jodit-react";
import { useDispatch } from "react-redux";
// import { addProperty } from "@/store/slices/propertySlice";
import { addProperty } from "@/redux/user/propertySlice";

const PostProperty = () => {
  const [content, setContent] = useState("");
  const editor = useRef(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
    }),
    []
  );

  const name = Form.useWatch("name", form);

  useEffect(() => {
    if (name) {
      const slug = name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      form.setFieldsValue({ slug });
    }
  }, [name, form]);

  const onFinish = async (values) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      if (
        key === "images" ||
        key === "bannerimg" ||
        key === "builderImg" ||
        key === "amenitiesImg"
      ) {
        values[key].forEach((file) => {
          formData.append(key, file.originFileObj);
        });
      } else if (key === "pdf") {
        formData.append(key, values[key][0].originFileObj);
      } else if (key === "sitePlan" || key === "siteMap") {
        formData.append(key, values[key][0].originFileObj);
      } else if (
        key === "faq" ||
        key === "typebhk" ||
        key === "locationAdvantages" ||
        key === "highlight" ||
        key === "youtubeid"
      ) {
        formData.append(key, JSON.stringify(values[key]));
      } else {
        formData.append(key, values[key]);
      }
    });

    dispatch(addProperty(formData, navigate, form));
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <div className="container mx-auto p-8 lg:w-[100%]">
        <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="General Information" key="1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "name",
                  "location",
                  "price",
                  "sizes",
                  "configurations",
                  "bhk",
                  "pricing details",
                  "towers",
                  "possessions",
                  "rera Id",
                  "total Project Area",
                  "floors",
                  "units",
                  "Map Location",
                  "Meta Title",
                  "Meta Keywords",
                  "Meta Desc",
                  "Meta Schema",
                  "Slug",
                  "Canonical",
                  "Latitude",
                  "Longitude",
                ].map((field) => (
                  <Form.Item
                    key={field}
                    label={
                      field.charAt(0).toUpperCase() +
                      field
                        .slice(1)
                        .split(/(?=[A-Z])/)
                        .join(" ")
                    }
                    name={field.toLowerCase().replace(/\s+/g, "")}
                  >
                    <Input />
                  </Form.Item>
                ))}

                <Form.Item label="Property Type" name="propertyType">
                  <Select
                    showSearch
                    placeholder="Select Property Type"
                    optionFilterProp="label"
                    options={[
                      { value: "residential", label: "Residential" },
                      { value: "commercial", label: "Commercial" },
                      { value: "plot", label: "Plot" },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="Status" name="status">
                  <Select
                    showSearch
                    placeholder="Select Status"
                    optionFilterProp="label"
                    options={[
                      { value: "ready to move", label: "Ready to Move" },
                      {
                        value: "under construction",
                        label: "Under Construction",
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="Builder Name" name="builderName">
                  <Select
                    showSearch
                    placeholder="Select Builder Name"
                    optionFilterProp="label"
                    options={[
                      { value: "agent", label: "Agent" },
                      { value: "broker", label: "Broker" },
                      { value: "builder", label: "Builder" },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="City" name="city">
                  <Select
                    showSearch
                    placeholder="Select City"
                    optionFilterProp="label"
                    options={[
                      { value: "gurugram", label: "Gurugram" },
                      { value: "delhi", label: "Delhi" },
                      { value: "noida", label: "Noida" },
                      { value: "dubai", label: "Dubai" },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="Country" name="country">
                  <Select
                    showSearch
                    placeholder="Select Country"
                    optionFilterProp="label"
                    options={[
                      { value: "india", label: "India" },
                      { value: "uae", label: "UAE" },
                    ]}
                  />
                </Form.Item>
              </div>
            </Panel>
            <Panel header="Images" key="2">
              <div className="flex gap-10 flex-wrap">
                <Form.Item
                  name="images"
                  label="Project Images"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload listType="picture-card" multiple>
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>
                <Form.Item
                  name="bannerimg"
                  label="Banner Images"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload listType="picture-card" multiple>
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>
                <Form.Item
                  name="builderImg"
                  label="Builder Images"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload listType="picture-card" multiple>
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>
                <Form.Item
                  name="amenitiesImg"
                  label="Amenities Images"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload listType="picture-card" multiple>
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>
              </div>
            </Panel>
            <Panel header="Pdf" key="3">
              <Form.Item
                name="pdf"
                label="Brochure PDF"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload accept=".pdf" maxCount={1}>
                  <Button icon={<PlusOutlined />}>Upload PDF</Button>
                </Upload>
              </Form.Item>
            </Panel>
            <Panel header="Additional Files" key="4">
              <div className="flex gap-10 flex-wrap">
                <Form.Item
                  name="siteMap"
                  label="Site Map"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload listType="picture-card" multiple>
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>
                <Form.Item
                  name="sitePlan"
                  label="Site Plan"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload listType="picture-card" multiple>
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>
              </div>
            </Panel>
            <Panel header="BHK Details" key="5">
              <Form.List name="typebhk">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item {...restField} name={[name, "bhktype"]}>
                          <Input placeholder="BHK Type" />
                        </Form.Item>
                        <Form.Item {...restField} name={[name, "size"]}>
                          <Input placeholder="Size" />
                        </Form.Item>
                        <Form.Item {...restField} name={[name, "price"]}>
                          <Input placeholder="Price" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add BHK Detail
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Panel>
            <Panel header="FAQs" key="6">
              <Form.List name="faq">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item {...restField} name={[name, "question"]}>
                          <Input placeholder="Question" />
                        </Form.Item>
                        <Form.Item {...restField} name={[name, "answer"]}>
                          <Input placeholder="Answer" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add FAQ
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Panel>
            <Panel header="Location Advantages" key="7">
              <Form.List name="locationAdvantages">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item {...restField} name={[name, "advantage"]}>
                          <Input placeholder="Location Advantage" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add Location Advantage
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Panel>
            <Panel header="Project Highlights" key="8">
              <Form.List name="highlight">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item {...restField} name={[name, "highlights"]}>
                          <Input placeholder="Project Highlight" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add Project Highlight
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Panel>
            <Panel header="YouTube Videos" key="9">
              <Form.List name="youtubeid">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item {...restField} name={[name, "video"]}>
                          <Input placeholder="YouTube Video URL" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add YouTube Video
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Panel>
            <Panel header="Description" key="10">
              <Form.Item name="description">
                <JoditEditor
                  ref={editor}
                  config={config}
                  tabIndex={1}
                  value={content}
                  onChange={(newContent) => setContent(newContent)}
                />
              </Form.Item>
            </Panel>
          </Collapse>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="mt-4 p-5 font-semibold text-lg"
            >
              Create Project
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default PostProperty;
