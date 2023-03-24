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
  const [categoryName, setCategoryName] = useState("");
  const [dataCategory, setDataCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(0);

  // Color
  const [colorName, setColorName] = useState("");
  const [colorHexCode, setColorHexCode] = useState("");
  const [colorData, setColorData] = useState([]);
  const [colorId, setColorId] = useState(0);
  // Material
  const [materialName, setMaterialName] = useState("");
  const [materialData, setMaterialData] = useState([]);
  const [materialId, setMaterialId] = useState(0);
  // SubCategory
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState(0);
  // Product
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState(0);
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [unistInStock, setUnistInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [productData, setProductData] = useState([]);
  // ProductImage
  const [imageProduct, setImageProduct] = useState([]);
  const [imageProductData, setImageProductData] = useState([]);

  // withoutImage
  const [withoutImageProductData, setWithoutImageProductData] = useState([]);

  useEffect(() => {
    getComments();
    getCatalogs();
    getCategories();
    getColors();
    getMaterials();
    getSubCategories();
    getProducts();
    getImageProducts();
    getWithoutImageProducts();
    console.log(dataCategory);
  }, []);

  const getComments = async () => {
    await axios
      .get("https://localhost:44317/api/Comments/getall")
      .then((res) => setDataComment(res.data.data));
  };
  const getCatalogs = async () => {
    axios
      .get("https://localhost:44317/api/Catalogs/getall")
      .then((res) => setDataCatalog(res.data.data));
  };
  const getCategories = async () => {
    axios
      .get("https://localhost:44317/api/Categories/getall")
      .then((res) => setDataCategory(res.data.data));
  };
  const getColors = async () => {
    await axios
      .get("https://localhost:44317/api/Colors/getall")
      .then((res) => setColorData(res.data.data));
  };
  const getMaterials = async () => {
    await axios
      .get("https://localhost:44317/api/Materials/getall")
      .then((res) => setMaterialData(res.data.data));
  };
  const getSubCategories = async () => {
    await axios
      .get("https://localhost:44317/api/SubCategories/getall")
      .then((res) => setSubCategoryData(res.data.data));
  };
  const getProducts = async () => {
    await axios
      .get("https://localhost:44317/api/Products/getAll")
      .then((res) => setProductData(res.data.data));
  };
  const getImageProducts = async () => {
    await axios
      .get("https://localhost:44317/api/ProductImages/getAll")
      .then((res) => setImageProductData(res.data.data));
  };
  const getWithoutImageProducts = async () => {
    await axios
      .get("https://localhost:44317/api/Products/getAllWithoutImages")
      .then((res) => setWithoutImageProductData(res.data.data));
  };

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
    getComments();
    console.log(dataComment);
  };
  // Delete Comment
  const commentDelete = async (commentId) => {
    await axios
      .delete(`https://localhost:44317/api/Comments/delete/${commentId}`)
      .then((res) => setDataComment(res.data.data));
    getComments();
    console.log(dataComment);
  };
  // add Catalog
  const catalogSubmit = async (e) => {
    e.preventDefault();
    const body = {
      catalogName,
    };
    await axios.post("https://localhost:44317/api/Catalogs/add", body);
    getCatalogs();
    console.log(dataCatalog);
  };
  // Delete Catalog
  const catalogDelete = async (catalogId) => {
    await axios
      .delete(`https://localhost:44317/api/Catalogs/delete/${catalogId}`)
      .then((res) => setDataCatalog(res.data.data));
    getCatalogs();
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
    getCategories();
    console.log(dataCategory);
  };
  // Delete Category
  const categoryDelete = async (categoryId) => {
    await axios
      .delete(`https://localhost:44317/api/Categories/delete/${categoryId}`)
      .then((res) => setDataCategory(res.data.data));
    getCategories();
    console.log(dataCategory);
  };
  // add Color
  const colorSubmit = async (e) => {
    e.preventDefault();
    const body = {
      colorName,
      colorHexCode,
    };
    await axios.post("https://localhost:44317/api/Colors/add", body);
    getColors();
    console.log(colorData);
  };
  // Delete Color
  const colorDelete = async (colorId) => {
    await axios
      .delete(`https://localhost:44317/api/Colors/delete/${colorId}`)
      .then((res) => setColorData(res.data.data));
    getColors();
    console.log(colorData);
  };
  // add Material
  const materialSubmit = async (e) => {
    e.preventDefault();
    const body = {
      materialName,
    };
    await axios.post("https://localhost:44317/api/Materials/add", body);
    getMaterials();
    console.log(materialData);
  };
  // Delete Material
  const materialDelete = async (materialId) => {
    await axios
      .delete(`https://localhost:44317/api/Materials/delete/${materialId}`)
      .then((res) => setMaterialData(res.data.data));
    getMaterials();
    console.log(materialData);
  };
  // add subCateory
  const subCategorySubmit = async (e) => {
    e.preventDefault();
    const body = {
      categoryId,
      subCategoryName,
    };
    await axios.post("https://localhost:44317/api/SubCategories/add", body);
    getSubCategories();
    console.log(subCategoryData);
  };
  // Delete Color
  const subCategoryDelete = async (subCategoryId) => {
    await axios
      .delete(
        `https://localhost:44317/api/SubCategories/delete/${subCategoryId}`
      )
      .then((res) => setSubCategoryData(res.data.data));
    getSubCategories();
    console.log(subCategoryData);
  };
  // add Product
  const productSubmit = async (e) => {
    e.preventDefault();
    const body = {
      catalogId,
      categoryId,
      subCategoryId,
      materialId,
      colorId,
      productName,
      productCode,
      price,
      size,
      unistInStock,
      description,
    };
    await axios.post("https://localhost:44317/api/Products/add", body);
    getProducts();
    getWithoutImageProducts();
    console.log(productData);
  };
  // Delete Product
  const productDelete = async (productId) => {
    await axios
      .delete(`https://localhost:44317/api/Products/delete/${productId}`)
      .then((res) => setProductData(res.data.data));
    getProducts();
    console.log(productData);
  };
  // add ProductImage
  const productImageSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("file", imageProduct[0]);

    await axios.post("https://localhost:44317/api/ProductImages/add", formData);
    getImageProducts();
    console.log(productData);
  };
  // Delete ProductImage
  const productImageDelete = async (productImageId) => {
    const body = {
      productImageId,
    };
    await axios
      .delete(`https://localhost:44317/api/ProductImages/delete`, body)
      .then((res) => setImageProductData(res.data.data));
    getImageProducts();
    console.log(productData);
  };
  const filteredCategory = dataCategory?.filter(
    (item) => Number(item.catalogId) === Number(catalogId)
  );
  const filteredSubCategory = subCategoryData?.filter(
    (item) => Number(item.categoryId) === Number(categoryId)
  );
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
                Add Comment
              </button>
              <br />
              <br />
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
                      Delete
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
            <br />
            <br />

            {dataCatalog?.map((item, index) => {
              return (
                <div key={index} className="map">
                  <p>{item?.catalogName}</p>
                  <button
                    className="btn"
                    onClick={() => catalogDelete(item?.catalogId)}
                  >
                    Delete
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
            <br />
            <br />

            {dataCategory?.map((item, index) => {
              return (
                <div key={index} className="map">
                  <p>{item?.categoryName}</p>
                  <button
                    className="btn"
                    onClick={() => categoryDelete(item?.categoryId)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="color">
            <h1>Color</h1>
            <Input
              type="text"
              name="colorName"
              value={colorName}
              onChange={(e) => setColorName(e.target.value)}
              placeholder="colorName"
            />
            <Input
              type="text"
              name="colorHexCode"
              value={colorHexCode}
              onChange={(e) => setColorHexCode(e.target.value)}
              placeholder="colorHexCode"
            />

            <button onClick={(e) => colorSubmit(e)}>Color add</button>
            <br />
            <br />

            {colorData?.map((item, index) => {
              return (
                <div key={index} className="map">
                  <p>{item?.colorName}</p>
                  <button
                    className="btn"
                    onClick={() => colorDelete(item?.colorId)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="material">
            <h1>Materials</h1>
            <Input
              type="text"
              name="MaterialName"
              value={materialName}
              onChange={(e) => setMaterialName(e.target.value)}
              placeholder="materialName"
            />

            <button onClick={(e) => materialSubmit(e)}>Material add</button>
            <br />
            <br />

            {materialData?.map((item, index) => {
              return (
                <div key={index} className="map">
                  <p>{item?.materialName}</p>
                  <button
                    className="btn"
                    onClick={() => materialDelete(item?.materialId)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="subCategory">
            <h1>SubCategory</h1>
            <Input
              type="text"
              name="subCategoryName"
              value={subCategoryName}
              onChange={(e) => setSubCategoryName(e.target.value)}
              placeholder="SubCategoryName"
            />
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              {dataCategory?.map((item, index) => (
                <option key={index} value={item?.categoryId}>
                  {item?.categoryName}
                </option>
              ))}
            </select>
            <button onClick={(e) => subCategorySubmit(e)}>
              SubCategory add
            </button>
            <br />
            <br />

            {subCategoryData?.map((item, index) => {
              return (
                <div key={index} className="map">
                  <p>{item?.subCategoryName}</p>
                  <button
                    className="btn"
                    onClick={() => subCategoryDelete(item?.subCategoryId)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="productCreate">
            <h1>Product</h1>
            <Input
              type="text"
              name="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="productName"
            />
            <Input
              type="text"
              name="productCode"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              placeholder="productCode"
            />
            <Input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="price"
            />
            <Input
              type="text"
              name="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder="size"
            />
            <Input
              type="number"
              name="unistInStock"
              value={unistInStock}
              onChange={(e) => setUnistInStock(e.target.value)}
              placeholder="unistInStock"
            />
            <Input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="description"
            />
            <select
              value={catalogId}
              onChange={(e) => setCatalogId(e.target.value)}
            >
              {dataCatalog?.map((item, index) => (
                <option key={index} value={item?.catalogId}>
                  {item?.catalogName}
                </option>
              ))}
            </select>

            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              {filteredCategory?.map((item, index) => (
                <option key={index} value={item?.categoryId}>
                  {item?.categoryName}
                </option>
              ))}
            </select>
            <select
              value={subCategoryId}
              onChange={(e) => setSubCategoryId(e.target.value)}
            >
              {filteredSubCategory?.map((item, index) => (
                <option key={index} value={item?.subCategoryId}>
                  {item?.subCategoryName}
                </option>
              ))}
            </select>
            <select
              value={colorId}
              onChange={(e) => setColorId(e.target.value)}
            >
              {colorData?.map((item, index) => (
                <option key={index} value={item?.colorId}>
                  {item?.colorName}
                </option>
              ))}
            </select>
            <select
              value={materialId}
              onChange={(e) => setMaterialId(e.target.value)}
            >
              {materialData?.map((item, index) => (
                <option key={index} value={item?.materialId}>
                  {item?.materialName}
                </option>
              ))}
            </select>
            <button onClick={(e) => productSubmit(e)}>Product add</button>
            <br />
            <br />

            {productData?.map((item, index) => {
              return (
                <div key={index} className="map">
                  <p>{item?.productName}</p>

                  {item?.imagesPath[0].imagePath}

                  <button
                    className="btn"
                    onClick={() => productDelete(item?.productId)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="imageCreate">
            <h1>imageCreate</h1>
            <Input
              type="file"
              name="productImage"
              onChange={(e) => setImageProduct(e.target.files)}
              placeholder="productImage"
            />

            <select
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            >
              {withoutImageProductData?.map((item, index) => (
                <option key={index} value={item?.productId}>
                  {item?.productName}
                </option>
              ))}
            </select>

            <button onClick={(e) => productImageSubmit(e)}>Product add</button>
            <br />
            <br />

            {productData?.map((item, index) => {
              return (
                <div key={index} className="map">
                  <img
                    src={`https://localhost:44317/${item?.imagesPath[0].imagePath.replace(
                      "wwwroot",
                      ""
                    )}`}
                    alt=""
                  />
                  {/* wwwroot\ */}

                  <button
                    className="btn"
                    onClick={() => productImageDelete(item?.imageProductId)}
                  >
                    Delete
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
