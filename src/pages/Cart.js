import React from "react";
import Cheesecake from "../images/cheesecake.jpg";
import Remove from "../images/remove.png";

const Cart = () => {

  // Change product's quantity

  function subtractQuantity() {
    let input = document.querySelector("#quantity");
    input.value = parseInt(input.value) - 1;
  }

  function addQuantity() {
    let input = document.querySelector("#quantity");
    input.value = parseInt(input.value) + 1;
  }

  // Change active tab to choose/input address

  function activeTab(e, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" act", "");
    }
    document.getElementById(tab).style.display = "block";
    e.currentTarget.className += " act";
  }

  return (
    <>
      {/* Cart Detail */}

      <div className="w-10/12 mx-auto py-5 tm">
        <p className="pb-1 ft-lr text-gray-900 text-sm border-b">Cart</p>
        <div className="flex pb-4 border-b mt-3">
          <div className="it-rg relative">
            <img src={Cheesecake} className="w-12" alt="h" />
            <img
              src={Remove}
              className="remove absolute cursor-pointer"
              alt="i"
            />
          </div>
          <div className="it-lf pl-3">
            <p className="ft-lr text-gray-900 text-md">Strawberry Cheesecake</p>
            <p className="text-sm py-2">$130</p>
            <div className="number-input">
              <button className="subtract" onClick={subtractQuantity}></button>
              <input
                className="focus:outline-none quantity"
                min="1"
                id="quantity"
                defaultValue="2"
                type="number"
              />
              <button className="plus" onClick={addQuantity}></button>
            </div>
            <p className="text-sm py-2">Total: $260</p>
          </div>
        </div>
        <div className="flex pb-4 border-b mt-3">
          <div className="it-rg relative">
            <img src={Cheesecake} className="w-12" alt="h" />
            <img
              src={Remove}
              className="remove absolute cursor-pointer"
              alt="i"
            />
          </div>
          <div className="it-lf pl-3">
            <p className="ft-lr text-gray-900 text-md">Strawberry Cheesecake</p>
            <p className="text-sm py-2">$130</p>
            <div className="number-input">
              <button id="subtract"></button>
              <input
                className="focus:outline-none"
                min="1"
                defaultValue="2"
                type="number"
              />
              <button className="plus"></button>
            </div>
            <p className="text-sm py-2">Total: $260</p>
          </div>
        </div>
        <button className="tr-btn mt-3 focus:outline-none hover:bg-white font-bold text-white uppercase py-1 px-6 rounded text-xs transition ease-in-out duration-150">
          Continue shopping
        </button>
        <p className="pb-1 ft-lr text-gray-900 text-sm border-b mt-12">
          Order Summary
        </p>
        <p className="text-sm py-2 flex w-full">
          <span className="w-1/2">Subtotal: </span>
          <span className="flex justify-end w-1/2">$260</span>
        </p>
        <p className="text-sm py-2">Add note (for special instruction):</p>
        <textarea className="border focus:outline-none text-xs w-full"></textarea>
        <button className="tr-btn mt-3 focus:outline-none hover:bg-white font-bold text-white uppercase py-1 px-6 rounded text-xs transition ease-in-out duration-150">
          proceed to checkout
        </button>
        <p className="pb-1 ft-lr text-gray-900 text-sm border-b mt-12">
          Shipping Estimate
        </p>
        <p className="text-sm py-2">Please choose address:</p>
        <ul className="mt-3 flex border-b w-full text-center text-xs uppercase">
          <li
            className="mr-1 w-1/2 tablinks act"
            onClick={(e) => activeTab(e, "saved")}
          >
            <button>Saved</button>
          </li>
          <li
            className="mr-1 w-1/2 tablinks"
            onClick={(e) => activeTab(e, "new")}
          >
            <button>New</button>
          </li>
        </ul>

        <div className="tabcontent block" id="saved">
          <div className="text-xs py-5 border-b">
            <p>Brad White | +87 874 736 129</p>
            <p>Jl. Pangeran Diponegoro No.48, RT.1/RW.7</p>
            <p>
              Kel. Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus
              Ibukota Jakarta 10310
            </p>
          </div>

          <div className="text-xs py-5 border-b">
            <p>Brad White | +87 874 736 129</p>
            <p>Jl. Pangeran Diponegoro No.48, RT.1/RW.7</p>
            <p>
              Kel. Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus
              Ibukota Jakarta 10310
            </p>
          </div>
        </div>

        <div className="tabcontent" id="new">
          <div className="text-xs py-5">
            <input
              type="text"
              placeholder="Name"
              className="my-3 p-2 border focus:outline-none text-xs w-full"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="my-3 p-2 border focus:outline-none text-xs w-full"
            />
            <textarea
              placeholder="Address: Street name, home number, etc."
              className="my-3 p-2 border focus:outline-none text-xs w-full"
            ></textarea>
            <input
              type="text"
              placeholder="District"
              className="my-3 p-2 border focus:outline-none text-xs w-full"
            />
            <input
              type="text"
              placeholder="City"
              className="my-3 p-2 border focus:outline-none text-xs w-full"
            />
            <input
              type="text"
              placeholder="Postal code"
              className="my-3 p-2 border focus:outline-none text-xs w-full"
            />
            <button className="w-full tr-btn mt-3 focus:outline-none hover:bg-white font-bold text-white uppercase py-1 px-6 rounded text-xs transition ease-in-out duration-150">
              save address
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
