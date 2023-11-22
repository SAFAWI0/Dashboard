import "./Add.css"
import React, { useState } from "react";
import { Button, Modal } from "antd";
import React from "react";
import { Input } from "antd";
const { TextArea } = Input;
const Add = (id, products) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    onEdit();
    alert("Product edited successfully");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  fetch(`https://dummyjson.com/products/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      description,
      price,
    }),
  })
    .then((res) => res.json())
    .then(console.log);

  return (
    <>
      <Button className="add" onClick={showModal}>
        + New Product{" "}
      </Button>
      <Modal
        title="Add New Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <p>Title</p>
          <input
            value={products.title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex: iphone x"
            className="butt"
          ></input>
        </div>
        <div>
          <p>Description</p>
          <textarea
            value={products.description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ex: An apple mobile which is nothing like apple"
            className="des"
          ></textarea>
        </div>
        <div>
          <p> Price</p>
          <input
            value={products.price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Ex: 12,000$"
            className="butt"
          ></input>
        </div>
      </Modal>
    </>
  );
};
export default Add;
