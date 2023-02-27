import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "../components/Input";

const CreateProduct = () => {
  const [productId, setProductId] = useState(0);
  const [review, setReview] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44317/api/Comments/getall")
      .then((res) => setData(res.data.data));
  }, []);

  const handleSubmit = async (e) => {
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
      .then((res) => setData(res.data.data));
  };

  const handleDelete = async (commentId) => {
    await axios
      .delete(`https://localhost:44317/api/Comments/delete/${commentId}`)
      .then((res) => setData(res.data.data));
    await axios
      .get("https://localhost:44317/api/Comments/getall")
      .then((res) => setData(res.data.data));
  };

  return (
    <section className="create-products">
      <div className="container">
        <div className="row">
          <form className="create-form">
            <Input
              type="text"
              name="name"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
            <Input
              type="text"
              name="surname"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <Input
              type="text"
              name="age"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              type="text"
              name="age"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              name="age"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <Input
              type="checkbox"
              name="age"
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
            />

            <button className="btn" onClick={(e) => handleSubmit(e)}>
              Click
            </button>
          </form>
        </div>
      </div>
      <div>
        {data?.map((item) => {
          return (
            <div key={item?.commentId} className="map">
              <p>{item?.fullName}</p>
              <button
                className="btn"
                onClick={() => handleDelete(item?.commentId)}
              >
                Click
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CreateProduct;
