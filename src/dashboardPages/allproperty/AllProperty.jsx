import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message, List, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { getProperties, deleteProperty } from "@/redux/user/propertySlice";

const AllProperty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { properties, loading } = useSelector((state) => state.property);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  const handleDelete = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this property?",
      onOk: () => {
        dispatch(deleteProperty(id)).then(() => {
          dispatch(getProperties());
        });
      },
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5 lg:mt-20">
      {properties?.length > 0 ? (
        <List
          itemLayout="vertical"
          size="large"
          pagination={{ pageSize: 3 }}
          dataSource={properties}
          renderItem={(property) => (
            <List.Item
              key={property._id}
              style={{
                border: "1px solid #e6e6e6",
                borderRadius: "10px",
                marginBottom: "16px",
                padding: "16px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexWrap: "wrap", // Allow items to wrap on small screens
              }}
            >
              <div style={{ flex: 1, marginRight: "16px" }}>
                <List.Item.Meta
                  title={<strong>{property.name}</strong>}
                  description={
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p>
                        <strong>BHK:</strong> {property.bhk}
                      </p>
                      <p>
                        <strong>Price:</strong> ${property.price}
                      </p>
                      <p>
                        <strong>Slug:</strong> {property.slug}
                      </p>
                      <p>
                        <strong>Location:</strong> {property.location}
                      </p>
                      <p>
                        <strong>Builder Name:</strong> {property.buildername}
                      </p>
                      <p>
                        <strong>Property Type:</strong> {property.propertyType}
                      </p>
                      <p>
                        <strong>Status:</strong> {property.status}
                      </p>
                      <p>
                        <strong>City:</strong> {property.city}
                      </p>
                      <p>
                        <strong>Country:</strong> {property.country}
                      </p>
                    </div>
                  }
                />
              </div>
              <img
                alt={property.name}
                src={`https://propcodebackendadminpaneltesting.onrender.com/public/uploads/${property.images[0]}`}
                style={{
                  borderRadius: "10px",
                  objectFit: "cover",
                  width: "150px",
                  height: "150px",
                  flexShrink: 0, // Prevent the image from shrinking
                }}
              />
              <div
                style={{
                  marginLeft: "16px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: "8px", // Add some space for smaller screens
                }}
              >
                <EditOutlined
                  style={{
                    fontSize: "20px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/editproperty/${property._id}`)}
                />
                <DeleteOutlined
                  style={{ fontSize: "20px", color: "red", cursor: "pointer" }}
                  onClick={() => handleDelete(property._id)}
                />
              </div>
            </List.Item>
          )}
        />
      ) : (
        <div>No properties found.</div>
      )}
    </div>
  );
};

export default AllProperty;
