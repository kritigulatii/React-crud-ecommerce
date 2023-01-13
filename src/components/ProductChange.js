import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/ProductChange.css";
import Pagination from "react-js-pagination";

function ProductChange() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [currentPage, setCurrentPage] = useState(2);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const ProductGet = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    ProductGet();
  }, []);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const DeleteProduct = (id) => {
    const confirm = prompt("Are u sure to delete?  y / n");
    if (confirm === "y") {
      alert("Successfully Done");
      fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.status === 200) {
            setProducts(
              products.filter((product) => {
                return product.id !== id;
              })
            );
          } else {
            return;
          }
        })
        .catch((error) => console.log(error));
    } else {
      return;
    }
  };

  const renderTable = () => {
    return currentPosts
      .filter((product) => {
        return searchData.toLowerCase() === ""
          ? product
          : product.title.toLowerCase().includes(searchData) ||
              product.category.toLowerCase().includes(searchData);
      })
      .map((product) => {
        const setEditData = () => {
          console.log("id", product.id);
          localStorage.setItem("id", product.id);
          localStorage.setItem("title", JSON.stringify(product.title));
          localStorage.setItem("price", product.price);
          localStorage.setItem("category", product.category);
          localStorage.setItem("description", product.description);
          navigate("/edit");
        };
        return (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td>${product.price}</td>
            <td>
              <div className="action-btn">
                <button onClick={() => setEditData(product.id)}>
                  <i className="fas fa-edit" style={{ fontSize: "26px" }}></i>
                </button>

                <button onClick={() => DeleteProduct(product.id)}>
                  <i
                    className="fas fa-trash-alt"
                    style={{ fontSize: "26px" }}
                  ></i>
                </button>
              </div>
            </td>
          </tr>
        );
      });
  };

  return (
    <div className="container">
      <h1>Products List</h1>
      <div className="create-back-btn">
        <input
          className="searchInput"
          type="text"
          placeholder="Search Products"
          onChange={(e) => setSearchData(e.target.value)}
        />
        <Link to="/create">
          <button>
            Create{" "}
            <i className="fas fa-layer-group" style={{ fontSize: "18px" }}></i>
          </button>
        </Link>
      </div>

      <table className="hookstab">
        <thead>
          <tr>
            <th>ID</th>
            <th style={{ textAlign: "center" }}>Title</th>
            <th style={{ textAlign: "center" }}>Description</th>
            <th style={{ textAlign: "center" }}>Category</th>
            <th style={{ textAlign: "center" }}>Price</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <div className="productlist-loader">
        {loading && <div className="loader"></div>}
      </div>
      <div className="pagination-background">
        <Pagination
          activePage={products}
          itemsCountPerPage={postsPerPage}
          totalItemsCount={products.length}
          pageRangeDisplayed={4}
          onChange={handlePageChange}
          hideNavigation="false"
          firstPageText={<i className="fas fa-clone"></i>}
          lastPageText="Last"
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
      <Link to="/dashboard">
        <button className="back-btn">
          Back <i className="fas fa-reply" style={{ fontSize: "18px" }}></i>
        </button>
      </Link>
    </div>
  );
}

export default ProductChange;
