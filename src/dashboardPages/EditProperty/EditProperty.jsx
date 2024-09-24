import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  message,
  Form,
  Input,
  Upload,
  Button,
  Space,
  Collapse,
  Select,
  Card,
  Row,
  Col,
} from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const { TextArea } = Input;

const EditProject = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState({
    bannerImages: [],
    projectImages: [],
    amenityImages: [],
    sitePlan: [],
    siteMap: [],
    builderlogo: [],
    brochurePdf: [],
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://propcodebackendadminpaneltesting.onrender.com/api/projects/id/${id}`
      );
      form.setFieldsValue({
        ...data,
        bhkDetails: data.bhkDetails.map((bhk) => ({
          bhktype: bhk.bhktype,
          bhksize: bhk.size,
          bhkprice: bhk.price,
          bhkimage: bhk.bhkimage
            ? [
                {
                  uid: bhk.bhkimage,
                  name: bhk.bhkimage,
                  status: "done",
                  url: `https://propcodebackendadminpaneltesting.onrender.com/uploads/${bhk.bhkimage}`,
                },
              ]
            : [],
        })),
      });
      setFileList({
        bannerImages: (data.bannerImages || []).map((img) => ({
          uid: img,
          name: img,
          status: "done",
          url: `https://propcodebackendadminpaneltesting.onrender.com/uploads/${img}`,
        })),
        projectImages: (data.projectImages || []).map((img) => ({
          uid: img,
          name: img,
          status: "done",
          url: `https://propcodebackendadminpaneltesting.onrender.com/uploads/${img}`,
        })),
        amenityImages: (data.amenityImages || []).map((img) => ({
          uid: img,
          name: img,
          status: "done",
          url: `https://propcodebackendadminpaneltesting.onrender.com/uploads/${img}`,
        })),
        sitePlan: data.sitePlan
          ? [
              {
                uid: data.sitePlan,
                name: data.sitePlan,
                status: "done",
                url: `https://propcodebackendadminpaneltesting.onrender.com/uploads/${data.sitePlan}`,
              },
            ]
          : [],
        siteMap: data.siteMap
          ? [
              {
                uid: data.siteMap,
                name: data.siteMap,
                status: "done",
                url: `https://propcodebackendadminpaneltesting.onrender.com/uploads/${data.siteMap}`,
              },
            ]
          : [],
        builderlogo: data.builderlogo
          ? [
              {
                uid: data.builderlogo,
                name: data.builderlogo,
                status: "done",
                url: `https://propcodebackendadminpaneltesting.onrender.com/uploads/${data.builderlogo}`,
              },
            ]
          : [],
        brochurePdf: data.brochurePdf
          ? [
              {
                uid: data.brochurePdf,
                name: data.brochurePdf,
                status: "done",
                url: `https://propcodebackendadminpaneltesting.onrender.com/uploads/${data.brochurePdf}`,
              },
            ]
          : [],
      });
    } catch (err) {
      console.error(err);
      message.error("Failed to fetch project data");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (
          key === "faqs" ||
          key === "bhkDetails" ||
          key === "locationAdvantages" ||
          key === "projectHighlights" ||
          key === "youtubeVideos"
        ) {
          formData.append(key, JSON.stringify(values[key]));
        } else if (
          key !== "bannerImages" &&
          key !== "projectImages" &&
          key !== "amenityImages" &&
          key !== "sitePlan" &&
          key !== "siteMap" &&
          key !== "builderlogo" &&
          key !== "brochurePdf"
        ) {
          formData.append(key, values[key]);
        }
      });

      Object.keys(fileList).forEach((key) => {
        (fileList[key] || []).forEach((file) => {
          if (file.originFileObj) {
            formData.append(key, file.originFileObj);
          } else {
            formData.append(
              `existing${key.charAt(0).toUpperCase() + key.slice(1)}`,
              file.name
            );
          }
        });
      });

      if (values.bhkDetails) {
        values.bhkDetails.forEach((bhk, index) => {
          formData.append(`bhkDetails[${index}][bhktype]`, bhk.bhktype);
          formData.append(`bhkDetails[${index}][bhksize]`, bhk.bhksize);
          formData.append(`bhkDetails[${index}][bhkprice]`, bhk.bhkprice);
          if (bhk.bhkimage && bhk.bhkimage[0]) {
            if (bhk.bhkimage[0].originFileObj) {
              formData.append(`bhkImages`, bhk.bhkimage[0].originFileObj);
            } else {
              formData.append(
                `bhkDetails[${index}][bhkimage]`,
                bhk.bhkimage[0].name
              );
            }
          }
        });
      }

      await axios.patch(
        `https://propcodebackendadminpaneltesting.onrender.com/api/projects/${id}`,
        formData
      );
      message.success("Project updated successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
      message.error("Failed to update project");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = ({ fileList }, name) => {
    setFileList((prev) => ({ ...prev, [name]: fileList }));
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
      >
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="General Information" key="1">
            <Row gutter={16}>
              {[
                "name",
                "location",
                "price",
                "buildername",
                "sizes",
                "configurations",
                "bhk",
                "pricingdetails",
                "towers",
                "possessions",
                "reraid",
                "totalprojectarea",
                "floors",
                "units",
                "maplocation",
                "metatitle",
                "metakeywords",
                "metadesc",
                "metaschema",
                "slug",
                "canonical",
                "latitude",
                "longitude",
              ].map((field) => (
                <Col span={12} key={field}>
                  <Form.Item
                    name={field}
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    rules={[
                      { required: true, message: `Please input the ${field}!` },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              ))}

              <Col span={12}>
                <Form.Item
                  name="propertyType"
                  label="Property Type"
                  rules={[
                    {
                      required: true,
                      message: "Please select the property type!",
                    },
                  ]}
                >
                  <Select>
                    <Select.Option value="residential">
                      Residential
                    </Select.Option>
                    <Select.Option value="commercial">Commercial</Select.Option>
                    <Select.Option value="plot">Plot</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="status"
                  label="Status"
                  rules={[
                    { required: true, message: "Please select the status!" },
                  ]}
                >
                  <Select>
                    <Select.Option value="ready to move">
                      Ready to Move
                    </Select.Option>
                    <Select.Option value="under construction">
                      Under Construction
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="city"
                  label="City"
                  rules={[
                    { required: true, message: "Please select the city!" },
                  ]}
                >
                  <Select>
                    <Select.Option value="gurugram">Gurugram</Select.Option>
                    <Select.Option value="delhi">Delhi</Select.Option>
                    <Select.Option value="noida">Noida</Select.Option>
                    <Select.Option value="dubai">Dubai</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="country"
                  label="Country"
                  rules={[
                    { required: true, message: "Please select the country!" },
                  ]}
                >
                  <Select>
                    <Select.Option value="india">India</Select.Option>
                    <Select.Option value="uae">UAE</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: "Please input the description!",
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
            </Row>
          </Panel>

          <Panel header="Images" key="2">
            <Row gutter={16}>
              {["bannerImages", "projectImages", "amenityImages"].map(
                (field) => (
                  <Col span={8} key={field}>
                    <Form.Item
                      label={field.charAt(0).toUpperCase() + field.slice(1)}
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                    >
                      <Upload
                        listType="picture-card"
                        fileList={fileList[field] || []}
                        onChange={(info) => handleFileChange(info, field)}
                        multiple
                      >
                        {(fileList[field] || []).length >= 8 ? null : (
                          <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                          </div>
                        )}
                      </Upload>
                    </Form.Item>
                  </Col>
                )
              )}
            </Row>
          </Panel>

          <Panel header="Additional Files" key="3">
            <Row gutter={16}>
              {["sitePlan", "siteMap", "builderlogo"].map((field) => (
                <Col span={8} key={field}>
                  <Form.Item
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                  >
                    <Upload
                      listType="picture-card"
                      fileList={fileList[field] || []}
                      onChange={(info) => handleFileChange(info, field)}
                      maxCount={1}
                    >
                      {(fileList[field] || []).length >= 1 ? null : (
                        <div>
                          <PlusOutlined />
                          <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                      )}
                    </Upload>
                  </Form.Item>
                </Col>
              ))}
              <Col span={8}>
                <Form.Item
                  label="Brochure PDF"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload
                    accept=".pdf"
                    fileList={fileList.brochurePdf || []}
                    onChange={(info) => handleFileChange(info, "brochurePdf")}
                    maxCount={1}
                  >
                    <Button icon={<PlusOutlined />}>Upload PDF</Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
          </Panel>

          {/* BHK Details */}
          {/* <Collapse>
            <Panel header="BHK Details" key="1">
              <Form.List name="bhkDetails">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((field, index) => (
                      <Card key={field.key} style={{ marginBottom: 16 }}>
                        <Form.Item
                          {...field}
                          label={`BHK Type ${index + 1}`}
                          name={[field.name, "bhktype"]}
                          fieldKey={[field.fieldKey, "bhktype"]}
                          rules={[
                            {
                              required: true,
                              message: "Please input the BHK type!",
                            },
                          ]}
                        >
                          <Input placeholder="e.g., 2BHK, 3BHK" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          label={`BHK Size ${index + 1}`}
                          name={[field.name, "bhksize"]}
                          fieldKey={[field.fieldKey, "bhksize"]}
                          rules={[
                            {
                              required: true,
                              message: "Please input the BHK size!",
                            },
                          ]}
                        >
                          <Input placeholder="e.g., 1500 sq ft" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          label={`BHK Price ${index + 1}`}
                          name={[field.name, "bhkprice"]}
                          fieldKey={[field.fieldKey, "bhkprice"]}
                          rules={[
                            {
                              required: true,
                              message: "Please input the BHK price!",
                            },
                          ]}
                        >
                          <Input placeholder="e.g., $100,000" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          label={`BHK Image ${index + 1}`}
                          name={[field.name, "bhkimage"]}
                          fieldKey={[field.fieldKey, "bhkimage"]}
                          valuePropName="fileList"
                          getValueFromEvent={normFile}
                        >
                          <Upload
                            listType="picture-card"
                            maxCount={1}
                            beforeUpload={() => false}
                          >
                            <div>
                              <PlusOutlined />
                              <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                          </Upload>
                        </Form.Item>
                        <Button
                          onClick={() => remove(field.name)}
                          icon={<MinusCircleOutlined />}
                        >
                          Remove
                        </Button>
                      </Card>
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
          </Collapse> */}

          <Panel header="FAQs" key="5">
            <Form.List name="faqs">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "question"]}
                        rules={[
                          { required: true, message: "Missing question" },
                        ]}
                      >
                        <Input placeholder="Question" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "answer"]}
                        rules={[{ required: true, message: "Missing answer" }]}
                      >
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

          <Panel header="Location Advantages" key="6">
            <Form.List name="locationAdvantages">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "advantage"]}
                        rules={[
                          { required: true, message: "Missing advantage" },
                        ]}
                      >
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

          <Panel header="Project Highlights" key="7">
            <Form.List name="projectHighlights">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "highlights"]}
                        rules={[
                          { required: true, message: "Missing highlight" },
                        ]}
                      >
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

          <Panel header="YouTube Videos" key="8">
            <Form.List name="youtubeVideos">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "video"]}
                        rules={[
                          { required: true, message: "Missing video URL" },
                        ]}
                      >
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
        </Collapse>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Update Project
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProject;
