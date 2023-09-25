import { NavLink } from "react-router-dom";

const Card = ({ card }) => {
  const {
    id,
    Picture,
    Title,
    Category,
    Category_bg,
    Card_bg,
    Text_button_bg,
    Description,
  } = card || {};

  return (
    <div className="flex justify-center m-5">
      <NavLink to={"/CardDetails"}>
        <div
          style={{ background: Card_bg }}
          className="relative flex w-80 flex-col rounded-xl text-gray-700 shadow-md"
        >
          <div className="relative mx-2 mt-2 h-[250px] overflow-hidden rounded-xl text-gray-700">
            <img className="h-full w-full" src={Picture} />
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between w- ">
              <p
                style={{ background: Category_bg, color: Text_button_bg }}
                className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 rounded-md p-1"
              >
                {Category}
              </p>
            </div>
            <p
              style={{ color: Text_button_bg }}
              className="block font-sans text-xl leading-normal text-gray-700 antialiased font-semibold"
            >
              {Title}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
