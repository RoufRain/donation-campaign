// import React from "react";
// import Chart from "react-apexcharts";

import BasicPie from "./BasicPie";

// function Statistics() {
//   return (
//     <React.Fragment>
//       <div>
//         <Chart
//           width={1300}
//           height={500}
//           series={[23, 58, 64, 85]}
//           option={{
//             lebels: ["hindi", "bangla", "english", "math"],
//           }}
//         ></Chart>
//       </div>
//     </React.Fragment>
//   );
// }
// export default

const Statistics = () => {
  return (
    <div>
      <BasicPie> </BasicPie>
    </div>
  );
};

export default Statistics;
