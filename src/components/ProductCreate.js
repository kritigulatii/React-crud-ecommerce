import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCreate() {
  const AddProduct = async (title, price, category) => {
    await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        price: price,
        category: category,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("products", response);
          navigate("/products");
        } else {
          return;
        }
      })
      .then((data) => {
        // setProducts((products) => [...products, data]);
      })
      .catch((error) => console.log(error));
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    AddProduct(
      e.target.title.value,
      e.target.price.value,
      e.target.category.value
    );
    e.target.title.value = "";
    e.target.price.value = "";
    e.target.price.value = "";
  };

  return (
    <div className="container">
      <h1>New Records Entry Form</h1>

      <form onSubmit={handleSubmit}>
        <table className="create-edit-table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="title">Title:</label>
              </td>
              <td>
                <input type="text" name="title" placeholder="Enter Title" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="category">Category:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter Category"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="description">Description:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="description"
                  placeholder="Enter Description"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="price">Price:</label>
              </td>
              <td>
                <input type="text" name="price" placeholder="Enter Price" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="form-create-back-btn">
        <button type="submit" className="formBtn">
          Submit
        </button>
        <button onClick={()=>navigate("/products")} className="formBtn">
          Back <i className='fas fa-reply' style={{fontSize:'18px'}}></i>
        </button>
        </div>
      </form>
    </div>
  );
}

export default ProductCreate;
