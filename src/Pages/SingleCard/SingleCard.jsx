import swal from "sweetalert";

const CardDetail = ({ CardDetail }) => {
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
  } = CardDetail || {};

  const handleAddToDonation = () => {
    const addedDonationArray = [];
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (!donationItems) {
      addedDonationArray.push(CardDetail);
      localStorage.setItem("donation", JSON.stringify(addedDonationArray));
      swal("Successfully Donated!", "You clicked the button!", "success");
    } else {
      const isExits = donationItems.find((CardDetail) => CardDetail.id == id);

      if (!isExits) {
        addedDonationArray.push(...donationItems, CardDetail);
        localStorage.setItem("donation", JSON.stringify(addedDonationArray));
        swal("Successfully Donated!", "You clicked the button!", "success");
      } else {
        swal("Already Donated!", "You clicked the button!", "error");
      }
    }
  };

  return (
    <div>
      <div className="  ">
        <div className="relative m-0    bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div className="">
            <img
              className=" w-[1320px] h-[700px]"
              src={Picture}
              alt="ui/ux review check"
            />
          </div>
          <div className=" absolute inset-x-0 bottom-0 h-28 p-7 bg-[#0B0B0B80]">
            <button
              onClick={handleAddToDonation}
              style={{ background: Text_button_bg }}
              className=" p-3 top-8 text-white rounded"
            >
              Donate ${Price}
            </button>
          </div>
        </div>
        <div className="mt-10">
          <h4 className="block font-sans text-2xl font-semibold text-black leading-snug tracking-normal text-blue-gray-900 antialiased">
            {Title}
          </h4>
          <p className="mt-3 block font-sans text-sm font-normal leading-relaxed text-gray-700 antialiased">
            {Description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
