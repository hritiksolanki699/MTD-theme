import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../assets/scss/pages/transactions.scss";
import "../../assets/scss/components/clientsListTable.scss";
import {
  IoCaretForwardCircleOutline,
  IoCaretBackCircleOutline,
} from "react-icons/io5";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1240 },
    items: 5,
  },
  desktop2: {
    breakpoint: { max: 1240, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet2: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const data = [
  {
    id: 1,
    month: "Jan 23",
    Purchases: "$222.00",
    Sales: "$333.00",
    VAT: "$111.00",
    label: "Completed",
  },
  {
    id: 2,
    month: "Feb 23",
    Purchases: "$222.00",
    Sales: "$333.00",
    VAT: "$111.00",
    label: "Upcoming",
  },
  {
    id: 3,
    month: "Mar 23",
    Purchases: "$222.00",
    Sales: "$333.00",
    VAT: "$111.00",
    label: "Upcoming",
  },
  {
    id: 4,
    month: "Apr 23",
    Purchases: "$222.00",
    Sales: "$333.00",
    VAT: "$111.00",
    label: "Current",
  },
  {
    id: 5,
    month: "May 23",
    Purchases: "$222.00",
    Sales: "$333.00",
    VAT: "$111.00",
    label: "Upcoming",
  },
  {
    id: 6,
    month: "Jun 23",
    Purchases: "$222.00",
    Sales: "$333.00",
    VAT: "$111.00",
    label: "Upcoming",
  },
  {
    id: 7,
    month: "July 23",
    Purchases: "$222.00",
    Sales: "$333.00",
    VAT: "$111.00",
    label: "Upcoming",
  },
  {
    id: 8,
    month: "Aug 23",
    Purchases: "$222.00",
    Sales: "$333.00",
    VAT: "$111.00",
    label: "Upcoming",
  },
  {
    id: 9,
    month: "Sept 23",
    Purchases: "$222.00",
    Sales: "$333.00",
    VAT: "$111.00",
    label: "Upcoming",
  },
  {
    id: 10,
    month: "Oct 23",
    Purchases: "$222.00",
    Sales: "$333.00",
    VAT: "$111.00",
    label: "Upcoming",
  },
  {
    id: 11,
    month: "Nov 23",
    Purchases: "$222.00",
    Sales: "$333.00",
    VAT: "$111.00",
    label: "Upcoming",
  },
  {
    id: 12,
    month: "Dec 23",
    Purchases: "$222.00",
    Sales: "$333.00",
    VAT: "$111.00",
    label: "Upcoming",
  },
];

const MonthlyTransactionList = () => {
  const customLeftArrow = (
    <div className="left-backward">
      <IoCaretBackCircleOutline />
    </div>
  );
  const customRightArrow = (
    <div className="right-forward">
      <IoCaretForwardCircleOutline />
    </div>
  );

  return (
    <Carousel
      customLeftArrow={customLeftArrow}
      customRightArrow={customRightArrow}
      responsive={responsive}
      className="mb-2"
    >
      {data.map((i) => (
        <div
          className={
            i.label === "Completed" ? "carousel-card-complete" : "carousel-card"
          }
          key={i.id}
        >
          <div className="d-flex flex-column justify-content-center mx-2 p-2">
            <div className="text-center fw-bold mb-2 month">{i.month}</div>
            <div className="text-end states">
              <div>Purchases: {i.Purchases}</div>
              <div>Sales: {i.Sales}</div>
              <div>VAT: {i.VAT}</div>
            </div>
          </div>
          <div
            className={`${
              i.label === "Current" ? "current" : "label"
            }  text-center p-2`}
          >
            {i.label}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MonthlyTransactionList;
