import React from "react";
import "./modalItem.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const ModalItem = ({ modalItem, openModalItem, setOpenModalItem }) => {
  if (openModalItem)
    return (
      <div className="modalItem animeLeft">
        <div className="modalItem-header">
          <h3>{modalItem.title}</h3>
          <AiOutlineClose onClick={() => setOpenModalItem(false)} />
        </div>
        <div className="modalItem-body">
          <img src={modalItem.image} alt={modalItem.title} />
          <div className="body-desc">
            <div className="rating">
              {[...Array(+modalItem.rating.rate.toFixed(0))].map(
                (star, index) => (
                  <FaStar fill="#FFFF00" key={index} />
                )
              )}
            </div>
            <p>{modalItem.description}</p>
            <div className="body-footer">
              <p> PRICE: ${modalItem.price}</p>
              <p> COUNT: {modalItem.rating.count} un</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ModalItem;
