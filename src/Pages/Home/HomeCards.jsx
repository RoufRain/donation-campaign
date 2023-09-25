/* eslint-disable react/prop-types */
import Card from "./Card";

const HomeCards = ({ cards }) => {
  console.log(cards);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cards?.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
