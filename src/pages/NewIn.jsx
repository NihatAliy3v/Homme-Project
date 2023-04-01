// React
import { useContext, useEffect, useState } from "react";
// Contexts
import HeartContext from "../Context/heartContext";
// Components
import { Loading } from "../components/Loading";
import { HeadTitle } from "../components/HeadTitle";
import { Card } from "../components/Card";
// Icons
import { TbSearch } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
// Images
import axios from "axios";

const NewIn = () => {
  const { addHeart, removeHeart, heartData, setHeartData } =
    useContext(HeartContext);
  const [loading, setLoading] = useState(false);
  const [catalogData, setCatalogData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterId, setFilterId] = useState([]);
  const [materialsData, setMaterialsData] = useState([]);
  // Product
  useEffect(() => {
    getProducts();
    getCatalog();
    getCategory();
    getSubCategory();
    getMaterials();
  }, []);
  const getProducts = async () => {
    await axios
      .get("https://localhost:44317/api/Products/getAll")
      .then((res) => setHeartData(res.data.data))
      .then(() => setLoading(true));
  };
  const getCatalog = async () => {
    await axios
      .get("https://localhost:44317/api/Catalogs/getall")
      .then((res) => setCatalogData(res.data.data));
  };
  const getCategory = async () => {
    await axios
      .get("https://localhost:44317/api/Categories/getAll")
      .then((res) => setCategoryData(res.data.data));
  };
  const getSubCategory = async () => {
    await axios
      .get("https://localhost:44317/api/SubCategories/getall")
      .then((res) => setSubCategoryData(res.data.data));
  };
  const getMaterials = async () => {
    await axios
      .get("https://localhost:44317/api/Materials/getall")
      .then((res) => setMaterialsData(res.data.data));
  };

  useEffect(() => {
    getFilterSubCategory();
    // getFilterCategory();
    // getFilterCatalog();
  }, [filterId]);
  useEffect(() => {}, []);

  const getFilterSubCategory = () => {
    const filteredItems = filterId.map((filterItemId) =>
      heartData.filter(
        (item) => Number(item.subCategoryId) === Number(filterItemId)
      )
    );
    const filteredData = filteredItems.flat();
    setFilteredData(filteredData);
  };
  // const getFilterCategory = () => {
  //   const filteredItems = filterId.map((filterItemId) =>
  //     heartData.filter(
  //       (item) => Number(item.categoryId) === Number(filterItemId)
  //     )
  //   );
  //   const filteredData = filteredItems.flat();
  //   setFilteredData(filteredData);
  // };
  // const getFilterCatalog = () => {
  //   const filteredItems = filterId.map((filterItemId) =>
  //     heartData.filter(
  //       (item) => Number(item.catalogId) === Number(filterItemId)
  //     )
  //   );
  //   const filteredData = filteredItems.flat();
  //   setFilteredData(filteredData);
  // };

  const handleClickFirst = (e, id) => {
    const inputItem = e.target;
    inputItem.classList.toggle("active");
    // if (inputItem.checked) {
    //   setFilterId((prev) => [...prev, id]);
    // } else {
    //   setFilterId(filterId.filter((filterItemId) => filterItemId !== id));
    // }
  };

  const handleClickSecond = (e, id) => {
    const inputItem = e.target;
    inputItem.classList.toggle("active");
    // if (inputItem.checked) {
    //   setFilterId((prev) => [...prev, id]);
    // } else {
    //   setFilterId(filterId.filter((filterItemId) => filterItemId !== id));
    // }
  };

  const handleClickThird = (e, id) => {
    const inputItem = e.target;
    inputItem.classList.toggle("active");
    if (inputItem.checked) {
      setFilterId((prev) => [...prev, id]);
    } else {
      setFilterId(filterId.filter((filterItemId) => filterItemId !== id));
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!loading) {
    return <Loading />;
  } else {
    return (
      <main className="new-in">
        <HeadTitle name="New In" title={true} />
        <section className="main-wrapper">
          <div className="container">
            <div className="row">
              <section className="product-list-side">
                <ul className="filter-list">
                  <li className="filter-item">
                    <div
                      className="filter-content"
                      onClick={(e) => handleClickFirst(e)}
                    >
                      <span className="filter-title">
                        Categories {filterId.map((item) => item)}
                      </span>
                      <div className="icon-container">
                        <BiChevronDown className="icon" />
                      </div>
                    </div>
                    <ul className="firstlayer-list">
                      {catalogData.map((catalogItem) => (
                        <li
                          className="firstlayer-item"
                          key={catalogItem.catalogId}
                        >
                          <label
                            className="firstlayer-content"
                            onClick={(e) =>
                              handleClickFirst(e, catalogItem.catalogId)
                            }
                            htmlFor={catalogItem.catalogId}
                          >
                            <input
                              type="checkbox"
                              id={catalogItem.catalogId}
                              className="firstlayer-check"
                            />
                            <label
                              htmlFor={catalogItem.catalogId}
                              className="firstlayer-check-edit"
                            >
                              <BsCheck className="check-icon" />
                            </label>
                            <span className="firstlayer-title">
                              {catalogItem.catalogName}
                            </span>
                          </label>
                          <ul className="secondlayer-list">
                            {categoryData
                              .filter(
                                (categoryItem) =>
                                  categoryItem?.catalogId ===
                                  catalogItem?.catalogId
                              )
                              .map((filteredCategoryItem) => (
                                <li
                                  className="secondlayer-item"
                                  key={filteredCategoryItem.categoryId}
                                >
                                  <label
                                    className="secondlayer-content"
                                    onClick={(e) =>
                                      handleClickSecond(
                                        e,
                                        filteredCategoryItem.categoryId
                                      )
                                    }
                                    htmlFor={filteredCategoryItem.categoryId}
                                  >
                                    <input
                                      type="checkbox"
                                      id={filteredCategoryItem.categoryId}
                                      className="secondlayer-check"
                                    />
                                    <label
                                      htmlFor={filteredCategoryItem.categoryId}
                                      className="secondlayer-check-edit"
                                    >
                                      <BsCheck className="check-icon" />
                                    </label>

                                    <span className="secondlayer-title">
                                      {filteredCategoryItem?.categoryName}
                                    </span>
                                  </label>
                                  <ul className="thirdlayer-list">
                                    {subCategoryData
                                      .filter(
                                        (subCategoryItem) =>
                                          subCategoryItem.categoryId ===
                                          filteredCategoryItem.categoryId
                                      )

                                      .map((filteredSubCategoryItem) => (
                                        <li
                                          className="thirdlayer-item"
                                          key={
                                            filteredSubCategoryItem.subCategoryId
                                          }
                                        >
                                          <label
                                            className="thirdlayer-content"
                                            onClick={(e) =>
                                              handleClickThird(
                                                e,
                                                filteredSubCategoryItem.subCategoryId
                                              )
                                            }
                                            htmlFor={
                                              filteredSubCategoryItem.subCategoryId
                                            }
                                          >
                                            <input
                                              type="checkbox"
                                              id={
                                                filteredSubCategoryItem.subCategoryId
                                              }
                                              className="thirdlayer-check"
                                            />
                                            <label
                                              htmlFor={
                                                filteredSubCategoryItem.subCategoryId
                                              }
                                              className="thirdlayer-check-edit"
                                            >
                                              <BsCheck className="check-icon" />
                                            </label>
                                            <span className="thirdlayer-title">
                                              {
                                                filteredSubCategoryItem.subCategoryName
                                              }
                                            </span>
                                          </label>
                                        </li>
                                      ))}
                                  </ul>
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="filter-item">
                    <div
                      className="filter-content"
                      onClick={(e) => handleClickFirst(e)}
                    >
                      <span className="filter-title">Colors</span>
                      <div className="icon-container">
                        <BiChevronDown className="icon" />
                      </div>
                    </div>
                    <ul className="firstlayer-list">
                      <li className="firstlayer-item">
                        <div className="firstlayer-content">
                          <span
                            className="product-color"
                            style={{ backgroundColor: "red" }}
                          ></span>
                          <span className="firstlayer-title">Red</span>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="filter-item">
                    <div
                      className="filter-content"
                      onClick={(e) => handleClickFirst(e)}
                    >
                      <span className="filter-title">Materials</span>
                      <div className="icon-container">
                        <BiChevronDown className="icon" />
                      </div>
                    </div>
                    <ul className="firstlayer-list">
                      {materialsData.map((materialItem) => (
                        <li
                          className="firstlayer-item"
                          key={materialItem.materialId}
                        >
                          <label
                            className="firstlayer-content"
                            onClick={(e) =>
                              handleClickThird(e, materialItem.materialId)
                            }
                            htmlFor={materialItem.materialId}
                          >
                            <input
                              type="checkbox"
                              id={materialItem.materialId}
                              className="firstlayer-check"
                            />
                            <label
                              htmlFor={materialItem.materialId}
                              className="firstlayer-check-edit"
                            >
                              <BsCheck className="check-icon" />
                            </label>
                            <span className="firstlayer-title">
                              {materialItem.materialName}
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="filter-item">
                    <div className="filter-content active">
                      <span className="filter-title">Price</span>
                      <div className="icon-container">
                        <BiChevronDown className="icon" />
                      </div>
                    </div>
                    <ul className="firstlayer-list">
                      <li className="firstlayer-item">
                        <div className="firstlayer-content">
                          <input
                            type="number"
                            name="minPrice"
                            id="minPrice"
                            placeholder="4"
                          />
                          <span className="dash">-</span>
                          <input
                            type="number"
                            name="maxPrice"
                            id="maxPrice"
                            placeholder="750"
                          />
                          <button className="btn">
                            <TbSearch className="search-icon" />
                          </button>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>
              <section className="product-list-main">
                <div className="product-list-header">
                  <span className="products-counter">
                    {heartData.length} products
                  </span>
                </div>
                <div className="product-list">
                  {filterId.length === 0
                    ? heartData.map((item, index) => (
                        <div key={index} className="card">
                          <Card
                            product={item}
                            addHeart={() => addHeart(item?.productId)}
                            removeHeart={() => removeHeart(item?.productId)}
                            variant="add"
                          />
                        </div>
                      ))
                    : filteredData.map((item, index) => (
                        <div key={index} className="card">
                          <Card
                            product={item}
                            addHeart={() => addHeart(item?.productId)}
                            removeHeart={() => removeHeart(item?.productId)}
                            variant="add"
                          />
                        </div>
                      ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    );
  }
};

export default NewIn;
