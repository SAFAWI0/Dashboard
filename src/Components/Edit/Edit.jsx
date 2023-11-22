import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
const { TextArea } = Input;
import { DollarOutlined, EditOutlined } from "@ant-design/icons";
function Edit({ id, onEdit, products }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const showEditing = () => {
    setIsModalOpen(true);
  };

  const handleOK = () => {
    setIsModalOpen(false);

    onEdit();
    alert("Product edited successfully");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const updateProduct = () => {
    setIsLoading(true);

    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        price,
      }),
    })
      .then((res) => res.json())

      .then((data) => {
        setProducts(res);
        console.log(data);

        handleOK();
      })
      .catch((error) => {
        console.error("Error editing product:", error);
      });
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={showEditing}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <EditOutlined />
      </Button>
      <Modal
        title="Edit Product"
        open={isModalOpen}
        onOk={updateProduct}
        onCancel={handleCancel}
      >
        <p>Product Name </p>
        <Input
          placeholder="Ex: iPhone X"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <p>Description </p>
        <TextArea
          rows={3}
          placeholder="Ex: An Apple mobile phone with..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <p>Price </p>
        <Input
          addonAfter={<DollarOutlined />}
          placeholder="Ex: 1000$"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Modal>
    </div>
  );
}

export default Edit;
