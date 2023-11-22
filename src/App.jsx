import "./App.css";
import Container from "./Components/Container/container";
import Header from "./Components/Header/header";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import Edit from "./Components/Edit/Edit";
import Add from "./Components/Add/Add";
export const App = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      let resp = await fetch("https://dummyjson.com/products");
      let data = await resp.json();
      setProducts(data.products);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handeldelet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://dummyjson.com/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(console.log);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const show = products.map((el, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{el.title}</td>
      <td>{el.description}</td>
      <td>{el.price}$</td>
      <td>
        <MdDelete className="delete" onClick={() => handeldelet(el.id)} />
        <FaEdit className="edit" />
      </td>
    </tr>
  ));

  return (
    <div className="line">
      <Container>
        <Header />
        <Edit />
        <Add />
        <div className="margin">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{show}</tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};
