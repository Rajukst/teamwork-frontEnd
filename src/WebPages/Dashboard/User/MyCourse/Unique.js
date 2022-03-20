import React from "react";
import { useParams } from "react-router-dom";

const Unique = () => {
  const { uniqueId } = useParams();
  const [uniqueCourse, setUnique] = useState({});
  useEffect(() => {
    fetch(
      `https://guarded-citadel-56514.herokuapp.com/place-order/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <h1>This is unique{uniqueId._id}</h1>
    </div>
  );
};

export default Unique;
