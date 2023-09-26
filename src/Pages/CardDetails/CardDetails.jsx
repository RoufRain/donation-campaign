import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "../SingleCard/SingleCard";

const CardDetails = () => {
  const [CardDetail, setCardDetail] = useState({});

  const { id } = useParams();

  const CardDetails = useLoaderData();

  useEffect(() => {
    const findCard = CardDetails?.find((CardDetail) => CardDetail.id == id);

    setCardDetail(findCard);
  }, [id, CardDetails]);

  return (
    <div>
      <SingleCard CardDetail={CardDetail}> </SingleCard>
    </div>
  );
};

export default CardDetails;
