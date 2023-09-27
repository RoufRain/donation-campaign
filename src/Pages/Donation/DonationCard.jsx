const DonationCard = ({ card }) => {
  const {
    id,
    Picture,
    Title,
    Category,
    Category_bg,
    Card_bg,
    Text_button_bg,
    Description,
    Price,
  } = card || {};

  return (
    <div className="flex justify-center items-center">
      <div
        style={{ background: Category_bg, color: Text_button_bg }}
        className="relative flex w-full max-w-[48rem] flex-row rounded bg-white bg-clip-border text-gray-700"
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={Picture}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h5
            className="w-[75px] h[20px] text-center font-semibold rounded"
            style={{ background: Category_bg }}
          >
            {Category}
          </h5>
          <h4 className="block font-sans text-2xl font-semibold text-black leading-snug tracking-normal text-blue-gray-900 antialiased">
            {Title}
          </h4>
          <h5
            style={{ color: Text_button_bg }}
            className="text-white font-semibold rounded p-2"
          >
            ${Price}
          </h5>
          <button
            style={{ background: Text_button_bg }}
            className="text-white rounded p-2"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
