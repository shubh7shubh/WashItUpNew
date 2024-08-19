import React, { useState, useEffect } from "react";

import "./App.css";
import Laundry from "./components/Laundry/laundry";
import LaundryB from "./components/LaundryB/laundryb.js";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminDashboard from "./components/Admindashboard/admin.js";
import ProtectedRoute from "./components/ProtectedRoute/protectedroute";
import Notfound from "./components/Notfound/notfound";
import VendorDashboard from "./components/VendorDashboard/vendordashboard";
import UserLogin from "./components/LaundryBody/userlogin";
import ConnectionLost from "./components/ConnectionLost/connectionlost";
import MyOrders from "./components/LaundryBody/myorders";

import ProtectedRoute2 from "./components/ProtectedRoute/protectedroute2";
import MyProfile from "./components/MyProfile/myprofile.js";
import About from "./components/About/about.js";
import AdminLogin from "./components/Admindashboard/adminlogin.js";

import ApplyPage from "./components/Beapartofwashtiup/Applypage.js";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const [connectionLostImage, setConnectionLostImage] = useState(null);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    const img = new Image();
    img.src = "./connectionlost.png";

    img.onload = () => {
      setConnectionLostImage(img.src);
    };

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  });

  useEffect(() => {
    setTimeout(() => {
      document
        .querySelector("meta[name=viewport]")
        .setAttribute(
          "content",
          "height=" +
            window.screen.height * 0.9 +
            "px, width=device-width, initial-scale=1.0"
        );
    }, 300);
  });

  useEffect(() => {
    const handleInput = function () {
      let inputValue = this.value;

      // Remove non-digit characters
      inputValue = inputValue.replace(/\D/g, "");

      // Ensure the number is positive
      inputValue = Math.max(0, parseInt(inputValue, 10));

      // Limit the length to 12
      inputValue = inputValue.toString().slice(0, 12);

      // Update the input value
      this.value = inputValue;
    };

    document.addEventListener("DOMContentLoaded", function () {
      const numberAndTelInputs = document.querySelectorAll(
        'input[type="number"], input[type="tel"]'
      );

      numberAndTelInputs.forEach((input) => {
        input.addEventListener("input", handleInput);
      });
    });

    // Cleanup the event listeners when the component unmounts
    return () => {
      const numberAndTelInputs = document.querySelectorAll(
        'input[type="number"], input[type="tel"]'
      );
      numberAndTelInputs.forEach((input) => {
        input.removeEventListener("input", handleInput);
      });
    };
  }); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // useEffect(() => {
  //   var rootElement = document.getElementById("root");

  //   var imgElement = document.createElement("img");

  //   imgElement.setAttribute("id", "root-image");
  //   imgElement.setAttribute("src", "./washingload.gif");
  //   rootElement.prepend(imgElement);

  //   document.addEventListener("mousemove", (e) => {
  //     var x = e.clientX + 15;
  //     var y = e.clientY + 15;
  //     imgElement.style.left = x + "px";
  //     imgElement.style.top = y + "px";
  //   });
  // }, []);

  return (
    <BrowserRouter>
      {isOnline ? (
        <Switch>
          <Route exact path="/" component={Laundry} />
          <Route exact path="/b" component={LaundryB} />

          <ProtectedRoute2
            exact
            path="/admindashboard"
            component={AdminDashboard}
          />
          <ProtectedRoute2
            exact
            path="/admindashboard/orders"
            component={AdminDashboard}
          />
          <ProtectedRoute2
            exact
            path="/admindashboard/services"
            component={AdminDashboard}
          />
          <ProtectedRoute2
            exact
            path="/admindashboard/customers"
            component={AdminDashboard}
          />
          <ProtectedRoute2
            exact
            path="/admindashboard/vendors"
            component={AdminDashboard}
          />
          <ProtectedRoute2
            exact
            path="/admindashboard/coupons"
            component={AdminDashboard}
          />
          <ProtectedRoute2
            exact
            path="/admindashboard/driver"
            component={AdminDashboard}
          />
          <ProtectedRoute2
            exact
            path="/admindashboard/issues"
            component={AdminDashboard}
          />

          <ProtectedRoute
            exact
            path="/vendordashboard"
            component={VendorDashboard}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/userlogin" component={UserLogin} />
          <Route exact path="/adminlogin" component={AdminLogin} />
          <Route exact path="/myorders" component={MyOrders} />
          <Route exact path="/myprofile" component={MyProfile} />
          <Route exact path="/apply/:id" component={ApplyPage} />
          <Route component={Notfound} />
        </Switch>
      ) : (
        <ConnectionLost connectionLostImage={connectionLostImage} />
      )}
    </BrowserRouter>
  );
}

export default App;
