import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function ProductEdit() {
    const [title , setTitle] = useState("");
    const [price , setPrice] = useState("");
    const [category , setCategory] = useState("");
    const [description , setDescription] = useState("");
    const [id , setId] = useState("");

    
useEffect(() => {
  setTitle(localStorage.getItem('title')) ;
  setPrice(localStorage.getItem('price')) ;
  setCategory(localStorage.getItem('category')) ;
  setDescription(localStorage.getItem('description')) ;
  setId(localStorage.getItem('id')) ;
} , [])
console.log(id)
const handleSubmit = (e) =>{
  e.preventDefault();
  navigate("/products")
}

  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Edit Details</h1>

      <form onSubmit={handleSubmit}>
        <table className='create-edit-table'>
          <tbody>
            <tr>
              <td>
                <label htmlFor="title">Title:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  placeholder="Enter Title"
                />
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
                  defaultValue={category}
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
                  defaultValue={description}
                  placeholder="Enter Description"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="price">Price:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter Price"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="form-create-back-btn">
        <button type="submit" className="formBtn">
          Submit
        </button>
        <button className="formBtn">
          Back <i className='fas fa-reply' style={{fontSize:'18px'}}></i>
        </button>
        </div>
      </form>
    </div>
  )
}

export default ProductEdit