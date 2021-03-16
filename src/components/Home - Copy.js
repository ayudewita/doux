import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";
import Star from "../images/star-full.png";
import ReactPaginate from 'react-paginate';

export default function Home() {
  // Get products

  const value = useContext(DataContext);
  const [products] = value.products;
 

  // Make product.offer unique
  const offers = products.map((product) => product.offer);

  let distinctOffers = [...new Set(offers)];

  // Add "all" to product's offer
  distinctOffers = ["all", ...distinctOffers];

  // Remove "" from array of distinctOffers
  const a = "";
  const availableOffers = distinctOffers.filter(
    (distinctOffers) => distinctOffers !== a
  );

  // Get selected offer value

  const [selectOffer, setSelectOffer] = useState("all");
  const handleChange = (event) => {
    event.preventDefault();
    setSelectOffer(event.target.value);
  };

 
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;

  // Filter product according to product's offer

  let sortedProducts = [...products];
  if (selectOffer !== "all") {
    sortedProducts = sortedProducts.filter(
      (product) => product.offer === selectOffer
    );
  }

  // Make product.category unique
  const categories = products.map((product) => product.category);
  let uniqueCategories = [...new Set(categories)];

  // Add "all" to array of categories
  uniqueCategories = ["all", ...uniqueCategories];

  // Get value and index of clicked category
  const [selectCategory, setSelectCategory] = useState("all");
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (e, index) => {
    setSelectCategory(e.target.innerHTML);
    setActiveCategory(index);
    setCurrentPage(e.target.id);
  };

  const indexOfLastProduct = currentPage * perPage;

  const indexOfFirstProduct = indexOfLastProduct - perPage;

  let currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
  const totalProducts = products.length;
  let firstProduct = indexOfFirstProduct + 1;
  let lastProduct = indexOfLastProduct - ( perPage - currentProduct.length);
 
  const totalPages= Math.ceil(totalProducts / perPage);

  // Prev page button

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  // Next page button

  function nextPage()
{
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
}

  // Filter product according to product's category

  if (selectCategory !== "all") {
    sortedProducts = sortedProducts.filter(
      (product) => product.category === selectCategory
    );
  }

  const renderProducts = currentProduct.map((products, index) => {
    return (
      <Link
        to={`/products/${products._id}`}
        className="pnl rounded-md px-4 mb-5 relative w-full sm:w-1/3"
        key={index}
      >
        <div
          style={{ backgroundImage: `url(${products.images})` }}
          className="pr-img w-full rounded-t-md z-0"
        >
          <div className="ovr rounded-t-md z-10">
            <div className="btn font-bold text-white uppercase py-1 px-6 rounded text-xs transition ease-in-out duration-150">
              View More
            </div>
          </div>
          <div className="pr-nm-ct bg-white z-20 ">
            <p className="ft-lr pr-nm text-gray-900 text-md">
              {products.title}
            </p>
            <hr className="udl" />
          </div>
        </div>
        <div className="br-clr border-gray-400 text-center rounded-b-md w-full border">
          <p className="pr-ds text-xs text-gray-700">{products.description}</p>
          <div className="flex justify-center pt-2">
            <img src={Star} className="st-w" alt="" />
            <img src={Star} className="st-w" alt="" />
            <img src={Star} className="st-w" alt="" />
            <img src={Star} className="st-w" alt="" />
            <img src={Star} className="st-w" alt="" />
          </div>
          <p className="prc">${products.price}</p>
        </div>
      </Link>
    );
  });

  let pageNumbers = [];
  for (let i = 1; i <= totalPages ; i++) {
    pageNumbers.push(i);
  }

  const [currentNumber, setCurrentNumber] = useState(1);
  const pageLimit = 3;

  // Limit page number display
  const indexOfLastNumber = currentNumber * pageLimit;

  const indexOfFirstNumber = indexOfLastNumber - pageLimit;

  let pageRange = pageNumbers.slice(indexOfFirstNumber, indexOfLastNumber);

  

  

  const renderPageNumbers = pageRange.map((number) => {
    return (
      <div
        className="-ml-px relative inline-flex items-center px-4 py-2  brd-br bg-white text-sm leading-5 font-medium focus:z-10 focus:outline-none transition ease-in-out duration-150"
        key={number}
        id={number}
        onClick={handleClick}
      >
        {number}
      </div>
    );
  });

  return (
    <div>
      <div className="bg-img">
        <div className="bg-overlay">
          {/* Home */}

          <div className="home">
            <div className="home-wrapper">
              <div className="home-container">
                <p className="line">Special Offer</p>
                <h1 className="line2">50% OFF</h1>
                <p className="line3">for second slice of cake</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}

      <div className="w-full flex justify-center py-6">
        <div className="mx-auto w-full flex md:w-4/5">
          <div className="left w-full md:w-4/5">
            <div className="top flex w-full mx-auto mb-6 px-4 text-xs text-gray-700">
              <div className="hidden md:w-1/2 md:flex items-center">
                Showing {firstProduct} - {lastProduct} of {totalProducts} results
              </div>
              <div className="w-full md:w-1/2 flex justify-end">
                <div className="w-full md:w-3/4">
                  <div className="relative">
                    <select
                      className="cursor-pointer block capitalize appearance-none w-full border border-gray-400 py-2 px-3 pr-8 rounded leading-tight focus:border-gray-400 focus:outline-none focus:bg-white"
                      id="grid-state"
                      onChange={handleChange}
                    >
                      {availableOffers.map((offer) => (
                        <option key={offer} value={offer}>
                          {offer}
                        </option>
                      ))}
                    </select>
                    <div className="dw-ar pointer-events-none absolute inset-y-0 flex items-center px-2">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="leading-loose flex flex-wrap flex-row w-full">
              {sortedProducts.map((sortedProduct) => (
                <Link
                  to={`/products/${sortedProduct._id}`}
                  className="pnl rounded-md px-4 mb-5 relative w-full sm:w-1/3"
                  key={sortedProduct._id}
                >
                  <div
                    style={{ backgroundImage: `url(${sortedProduct.images})` }}
                    className="pr-img w-full rounded-t-md z-0"
                  >
                    <div className="ovr rounded-t-md z-10">
                      <div className="btn font-bold text-white uppercase py-1 px-6 rounded text-xs transition ease-in-out duration-150">
                        View More
                      </div>
                    </div>
                    <div className="pr-nm-ct bg-white z-20 ">
                      <p className="ft-lr pr-nm text-gray-900 text-md">
                        {sortedProduct.title}
                      </p>
                      <hr className="udl" />
                    </div>
                  </div>
                  <div className="br-clr border-gray-400 text-center rounded-b-md w-full border">
                    <p className="pr-ds text-xs text-gray-700">
                      {sortedProduct.description}
                    </p>
                    <div className="flex justify-center pt-2">
                      <img src={Star} className="st-w" alt="" />
                      <img src={Star} className="st-w" alt="" />
                      <img src={Star} className="st-w" alt="" />
                      <img src={Star} className="st-w" alt="" />
                      <img src={Star} className="st-w" alt="" />
                    </div>
                    <p className="prc">${sortedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div> */}
            <div className="leading-loose flex flex-wrap flex-row w-full">
              {renderProducts}
            </div>
            <div className="page cursor-pointer">
              <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                  <div
                    onClick={prevPage}
                    className="relative inline-flex items-center px-4 py-2 border brd-br text-sm leading-5 font-medium rounded-md bg-white focus:outline-none transition ease-in-out duration-150"
                  >
                    Previous
                  </div>
                  <div
                    onClick={nextPage}
                    className="next ml-3 relative inline-flex items-center px-4 py-2 border brd-br text-sm leading-5 font-medium rounded-md bg-white focus:outline-none transition ease-in-out duration-150"
                  >
                    Next
                  </div>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
                  <div>
                    <nav className="relative z-0 inline-flex">
                      <div
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md brd-br bg-white text-sm leading-5 font-medium  focus:z-10 focus:outline-none transition ease-in-out duration-150"
                        aria-label="Previous"
                        onClick={prevPage}
                      >
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      {renderPageNumbers}
                      <div
                        className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md brd-br bg-white text-sm leading-5 font-medium  focus:z-10 focus:outline-none transition ease-in-out duration-150"
                        aria-label="Next"
                        onClick={nextPage}
                      >
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right hidden md:w-1/5 md:block">
            <div className="categories px-4 pt-6 pb-2 rounded-md w-full border border-gray-400 mb-5">
              <p className="text-gray-900 text-lg mb-4 ft-lr">Categories</p>
              <React.Fragment>
                {uniqueCategories.map((category, index) => (
                  <p
                    className={
                      category === "all"
                        ? "text-gray-700 text-sm py-2 capitalize cursor-pointer"
                        : "sub-cat text-gray-700 text-sm border-dotted border-gray-400 py-2 capitalize cursor-pointer"
                    }
                    key={index}
                    value={category}
                    onClick={(e) => {
                      handleClick(e, index);
                    }}
                    style={{ color: activeCategory === index ? "#b8a89b" : "" }}
                  >
                    {category}
                  </p>
                ))}
              </React.Fragment>
            </div>

            <div className="categories px-4 pt-6 pb-2 rounded-md w-full border border-gray-400">
              <div className="text-gray-900 text-lg mb-4 ft-lr">
                Filter by Price
              </div>
              <div className="w-full max-w-xs">
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2">
                      Minimum
                    </label>
                    <input
                      className="text-xs appearance-none w-full border border-gray-400 py-2 px-3 rounded leading-tight focus:border-gray-400 focus:outline-none focus:bg-white"
                      type="text"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm mb-2">
                      Maximum
                    </label>
                    <input
                      className="text-xs appearance-none w-full border border-gray-400 py-2 px-3 rounded leading-tight focus:border-gray-400 focus:outline-none focus:bg-white"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="btn2 mb-2 hover:bg-white font-bold border text-white uppercase py-2 px-6 rounded text-xs transition ease-in-out duration-150 focus:outline-none"
                      type="button"
                    >
                      Filter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
