import BasicExample from "./card";
import "./footer.css";
import b1 from "../photo/b1.png";
import b2 from "../photo/b2.png";
import b3 from "../photo/b3.png";
import b4 from "../photo/b4.png";
import b5 from "../photo/b5.png";
import b6 from "../photo/b6.png";
import b7 from "../photo/b7.png";

export const Beauty = () => {
 
  const beauty = [
    {
      id:"beauty1",
      img: b1,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"beauty2",
      img: b2,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"beauty3",
      img: b3,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"beauty4",
      img: b4,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"beauty5",
      img: b5,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"beauty6",
      img: b6,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"beauty7",
      img: b7,
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
        {beauty.map((e) => (
          <BasicExample key={e.img} prop={e}></BasicExample>
        ))}
      </div>
    </>
  );
};
