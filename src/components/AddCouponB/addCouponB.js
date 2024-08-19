import { useEffect, useState, useRef } from "react";

import Cookies from "js-cookie";

import "./addCouponB.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Banners from "../Banners/banners.js";

import ReCAPTCHA from "react-google-recaptcha";

import { TailSpin, ThreeDots } from "react-loader-spinner";

const AddCouponB = (props) => {
  const { typeOfWashing, items, dataTobeSent, success } = props;

  /**console.log(typeOfWashing);
  console.log(items);
  console.log(dataTobeSent);
  console.log(success);*/

  const [siteRecapKey, setSiteRecapKey] = useState(
    `${process.env.REACT_APP_SITE_KEY}`
  );

  const recapRef = useRef("");

  const [total, setTotal] = useState(dataTobeSent.total);
  {
    /**state to store total of all the items*/
  }

  const [discount, setDiscount] = useState(0);
  {
    /**state to store discount*/
  }

  const [couponCode, setCouponCode] = useState("");
  {
    /**state to store the coupon code */
  }

  const [loadCelebration, setCelebration] = useState(false);

  const [loadbutton, setLoadButton] = useState(false);

  const [loadapply, setApply] = useState(false);

  {
    /**Function used to book the laundry by passing the itemsSelected, typeofWash,userForm */
  }
  const setToWashing = async () => {
    try {
      const userId = Cookies.get("jwt_userToken");

      setLoadButton(true);

      const token = await recapRef.current.executeAsync();

      let totalAmount = total - discount;
      const url = `${
        process.env.REACT_APP_ROOT_URL
      }/api/user/bookOrder/${Cookies.get("jwt_userId")}`;

      const options = {
        method: "POST",

        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${userId}`,
        },

        body: JSON.stringify({
          ...dataTobeSent,
          totalAmount,
          token,
          service: typeOfWashing,
        }),
      };

      const response = await fetch(url, options);
      if (response.ok) {
        success();
      }
    } catch (error) {
      toast.error(`${error}`, {
        autoClose: 2000,
        pauseOnHover: true,
        closeOnClick: true,
        position: "top-center",
        theme: "colored",
      });
    }
  };

  {
    /**Function used to apply the coupon and get the discount of the coupon and update the state of the discount */
  }
  const applyCoupon = async () => {
    try {
      const userId = Cookies.get("jwt_userToken");

      setApply(true);
      const url = `${process.env.REACT_APP_ROOT_URL}/api/user/applyCoupon`;

      const reqConfigure = {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userId}`,
        },

        body: JSON.stringify({
          couponCode: couponCode.toUpperCase(),
          amount: total,
          mobileNumber: parseInt(dataTobeSent.mobileNumber),
        }),
      };

      const respone = await fetch(url, reqConfigure);

      const data = await respone.json();

      if (respone.ok) {
        setCelebration(true);
        setApply(false);
        toast.success("Coupon Applied", {
          position: "top-center",
          autoClose: 2000,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
        });
        setDiscount(data.data.discount);
        setTimeout(() => {
          setCelebration(false);
        }, 2000);
      } else {
        setApply(false);
        toast.error(`${data.message}`, {
          position: "top-center",
          autoClose: 2000,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error(`${error}`, {
        autoClose: 2000,
        pauseOnHover: true,
        closeOnClick: true,
        position: "top-center",
        theme: "colored",
      });
    }
  };

  {
    /**useEffect used to get the total price of all the items selected by the user before mounting */
  }

  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);

  useEffect(() => {
    // Check if the component has not scrolled into view yet
    if (!hasScrolledIntoView) {
      // Scroll into view
      const homeElement = document.getElementById("home2");
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: "smooth" });
        // Update state to indicate that scrolling has been performed
        setHasScrolledIntoView(true);
      }
    }
  }, [hasScrolledIntoView]);

  /**  for safari browser  zoom**/
  // Get all input and textarea elements
  var inputFields = document.querySelectorAll("input, textarea");

  // Add an event listener to each input field
  inputFields.forEach(function (inputField) {
    inputField.addEventListener("focus", function () {
      // Set the zoom level to 1
      document.body.style.zoom = 1;
    });
  });

  /**For safari browser zoom */

  return (
    <>
      <div style={{ position: "absolute", top: 0 }} id="home2"></div>
      <ReCAPTCHA ref={recapRef} size="invisible" sitekey={siteRecapKey} />

      <div className="login-book-service-coupon-B">
        <Banners />
        <div className="login-book-B">
          <div className="login-coupons-C">
            <h5>Booking Summary</h5>
            <div>
              <p>Name :</p>
              <input readOnly type="text" value={dataTobeSent.name} />
            </div>
            <div>
              <p>Mobile Number :</p>
              <input readOnly type="text" value={dataTobeSent.mobileNumber} />
            </div>
            <div>
              <p>Selected Date :</p>
              <input readOnly type="text" value={dataTobeSent.date} />
            </div>

            <div>
              <p>Selected Time :</p>
              <input readOnly type="text" value={dataTobeSent.time} />
            </div>
            <div>
              <p>Selected Location :</p>
              <input readOnly type="text" value={dataTobeSent.location} />
            </div>

            <div>
              <p>Selcted Do / Flat No & LandMark :</p>
              <input
                readOnly
                type="text"
                value={dataTobeSent.address.landmark}
              />
            </div>
          </div>
          <div className="login-coupons">
            {/**Used to load the celebrate animation for 3s after applying coupon*/}
            {loadCelebration && (
              <img
                className="celebration"
                src="/celebration.gif"
                alt="Celebration"
              />
            )}
            {/**Discount box used to show that the discount is available or not */}{" "}
            {discount === 0 ? (
              total > 0 ? (
                <div className="apply-coupon-box-D">
                  <ToastContainer />
                  <input
                    className="apply-coupon-input1"
                    type="text"
                    placeholder="Enter Coupon"
                    style={{ textTransform: "uppercase" }}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      // Use a regular expression to match only alphanumeric characters
                      const validInput = inputValue.replace(
                        /[^a-zA-Z0-9]/g,
                        ""
                      );
                      setCouponCode(validInput.toUpperCase());
                    }}
                    value={couponCode}
                  />
                  {loadapply ? (
                    <button
                      onClick={applyCoupon}
                      className="apply-coupon-button"
                      type="button"
                    >
                      <ThreeDots color="#6759ff" height={18} width={18} />
                    </button>
                  ) : (
                    <button
                      onClick={applyCoupon}
                      className="apply-coupon-button"
                      type="button"
                    >
                      Apply
                    </button>
                  )}
                </div>
              ) : (
                <div className="apply-coupon-box-D">
                  <ToastContainer />
                  <div className="applied-box2-D">No Coupon available</div>
                </div>
              )
            ) : (
              <div className="apply-coupon-box-D">
                <ToastContainer />
                <div className="applied-box-D"> COUPON APPLIED</div>
                <img
                  className="coupon-applied-D"
                  src="/coupon.gif"
                  alt="couponApplied"
                />
              </div>
            )}
            {/**box used to show all the items selected but user for laundry along with count and price of each item */}
            <div className="apply-coupon-box2-B">
              <div className="items-con-coupon-B">
                <p>Product</p>
                <p>Unit Price</p>
                <p>Price</p>
              </div>
              {items.map((each) => (
                <div className="items-con-coupon-B">
                  <p>
                    <img src={each.image} alt={each.name} />
                    {each.name}
                  </p>
                  <p>
                    {each.count} x {each.price}
                  </p>
                  <p>₹ {each.price * each.count}</p>
                </div>
              ))}
            </div>
            <div className="apply-coupon-box-B">
              {/**Total price before discount and after discount */}
              {discount === 0 ? (
                <>
                  <p className="font-total-B">Total ₹ {total}</p>
                </>
              ) : (
                <>
                  <p className="font-total-B">Sub Total &nbsp;₹ {total}</p>
                  <p className="font-total-B">
                    Total &nbsp;₹ {total - discount}
                  </p>
                </>
              )}
            </div>
            {/**Button used to book the laundry hits the setToWashing Function*/}
            {loadbutton ? (
              <button className="apply-coupon-button2-B" type="button">
                <TailSpin color="#ffffff" height={20} width={20} />
              </button>
            ) : (
              <button
                onClick={setToWashing}
                className="apply-coupon-button2-B"
                type="button"
              >
                Book
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCouponB;
