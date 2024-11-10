import BasicExample from "./card";
import "./footer.css";
import k1 from "../photo/k1.png";
import k2 from "../photo/k2.png";
import k3 from "../photo/k3.png";
import k4 from "../photo/k4.png";
import k5 from "../photo/k5.png";
import k6 from "../photo/k6.png";
import k7 from "../photo/k7.png";

export const Kids = () => {
 
  const kids = [
    {
      id:"kid1",
      img: k1,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"kid2",
      img: k2,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"kid3",
      img: k3,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"kid4",
      img: k4,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"kid5",
      img: k5,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"kid6",
      img: k6,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"kid7",
      img: k7,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
  ];
  return (
    <>
      <div className="fakeheader"></div>
      <div className="flex">
        {kids.map((e) => (
          <BasicExample key={e.img} prop={e}></BasicExample>
        ))}
      </div>
    </>
  );
};
