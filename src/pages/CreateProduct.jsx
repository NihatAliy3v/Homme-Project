// Axios
import axios from "axios";
// React
import { useEffect, useState } from "react";
// Components
import { Input } from "../components/Input";

const CreateProduct = () => {
  // Comments
  const [productId, setProductId] = useState(0);
  const [review, setReview] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState(false);
  const [dataComment, setDataComment] = useState([]);

  // Catalog
  const [catalogName, setCatalogName] = useState("");
  const [dataCatalog, setDataCatalog] = useState([]);
  const [catalogId, setCatalogId] = useState(0);

  // Category
  const [categoryName, setCategoryName] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44317/api/Comments/getall")
      .then((res) => setDataComment(res.data.data));
  }, []);
  useEffect(() => {
    axios
      .get("https://localhost:44317/api/Catalogs/getall")
      .then((res) => setDataCatalog(res.data.data));
  }, []);
  useEffect(() => {
    axios
      .get("https://localhost:44317/api/Categories/getall")
      .then((res) => setDataCategory(res.data.data));
  }, []);

  // Add Comment
  const commentSubmit = async (e) => {
    e.preventDefault();
    const body = {
      productId,
      review,
      fullName,
      email,
      rating,
      status,
    };
    await axios.post("https://localhost:44317/api/Comments/post", body);
    await axios
      .get("https://localhost:44317/api/Comments/getall")
      .then((res) => setDataComment(res.data.data));
    console.log(dataComment);
  };
  // Delete Comment
  const commentDelete = async (commentId) => {
    await axios
      .delete(`https://localhost:44317/api/Comments/delete/${commentId}`)
      .then((res) => setDataComment(res.data.data));
    await axios
      .get("https://localhost:44317/api/Comments/getall")
      .then((res) => setDataComment(res.data.data));
    console.log(dataComment);
  };
  // add Catalog
  const catalogSubmit = async (e) => {
    e.preventDefault();
    const body = {
      catalogName,
    };
    await axios.post("https://localhost:44317/api/Catalogs/add", body);
    await axios
      .get("https://localhost:44317/api/Catalogs/getall")
      .then((res) => setDataCatalog(res.data.data));
    console.log(dataCatalog && dataCatalog);
  };
  // Delete Catalog
  const catalogDelete = async (catalogId) => {
    await axios
      .delete(`https://localhost:44317/api/Catalogs/delete/${catalogId}`)
      .then((res) => setDataCatalog(res.data.data));
    await axios
      .get("https://localhost:44317/api/Catalogs/getall")
      .then((res) => setDataCatalog(res.data.data));
    console.log(dataCatalog);
  };
  // add Category
  const categorySubmit = async (e) => {
    e.preventDefault();
    const body = {
      catalogId,
      categoryName,
    };
    await axios.post("https://localhost:44317/api/Categories/add", body);
    await axios
      .get("https://localhost:44317/api/Categories/getall")
      .then((res) => setDataCategory(res.data.data));
    console.log(dataCategory);
    console.log(catalogId);
  };
  // Delete Category
  const categoryDelete = async (categoryId) => {
    await axios
      .delete(`https://localhost:44317/api/Categories/delete/${categoryId}`)
      .then((res) => setDataCategory(res.data.data));
    await axios
      .get("https://localhost:44317/api/Categories/getall")
      .then((res) => setDataCategory(res.data.data));
    console.log(dataCategory);
  };
  return (
    <section className="create-products">
      <div className="container">
        <div className="row">
          <div className="comment-add">
            <h1>Comment</h1>
            <form className="create-form">
              <Input
                type="text"
                name="productId"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                placeholder="productId"
              />
              <Input
                type="text"
                name="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="review"
              />
              <Input
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="fullName"
              />
              <Input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
              />
              <Input
                type="text"
                name="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="rating"
              />
              <Input
                type="checkbox"
                name="status"
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
                placeholder="status"
              />

              <button className="btn" onClick={(e) => commentSubmit(e)}>
                Click
              </button>
            </form>
            <div className="comment-get">
              {dataComment?.map((item, index) => {
                return (
                  <div key={index} className="map">
                    <p>{item?.fullName}</p>
                    <button
                      className="btn"
                      onClick={() => commentDelete(item?.commentId)}
                    >
                      Click
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <hr />
          <div className="catalog">
            <h1>Catalog</h1>
            <Input
              type="text"
              name="catalogName"
              value={catalogName}
              onChange={(e) => setCatalogName(e.target.value)}
              placeholder="catalogName"
            />
            <button onClick={(e) => catalogSubmit(e)}>Catalog add</button>

            {dataCatalog?.map((item, index) => {
              return (
                <div key={index} className="map">
                  <p>{item?.catalogName}</p>
                  <button
                    className="btn"
                    onClick={() => catalogDelete(item?.catalogId)}
                  >
                    Click
                  </button>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="category">
            <h1>Category</h1>
            <Input
              type="text"
              name="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="categoryName"
            />
            <select
              value={catalogId}
              onChange={(e) => setCatalogId(e.target.value)}
            >
              {dataCatalog?.map((item, index) => (
                <option
                  key={index}
                  onChange={(e) => setCatalogId(item?.catalogId)}
                  value={item?.catalogId}
                >
                  {item?.catalogName}
                </option>
              ))}
            </select>
            <button onClick={(e) => categorySubmit(e)}>Category add</button>

            {dataCategory?.map((item, index) => {
              return (
                <div key={index} className="map">
                  <p>{item?.categoryName}</p>
                  <button
                    className="btn"
                    onClick={() => categoryDelete(item?.categoryId)}
                  >
                    Click
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateProduct;
