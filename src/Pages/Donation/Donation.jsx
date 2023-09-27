import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-5">
            {isShow
              ? donation.map((card) => (
                  <DonationCard key={card.id} card={card}></DonationCard>
                ))
              : donation
                  .slice(0, 4)
                  .map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))}
          </div>
          {donation.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-2 mt-2 text-white font-semibold bg-[#009444] block mx-auto rounded"
            >
              {isShow ? "" : "See All"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
