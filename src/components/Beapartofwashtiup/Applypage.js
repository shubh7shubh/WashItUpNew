import React, { useEffect, useReducer, useState } from "react";
import "./applypage.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useParams } from "react-router-dom";

const initialState = {
  name: "",
  mobileNumber: "",
  email: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      // Check if action.value contains only alphabetical letters
      const isAlphabetic = /^[a-zA-Z\s]+$/.test(action.value);
      if (action.value === "") {
        return { ...state, [action.field]: action.value };
      } else if (isAlphabetic) {
        return { ...state, [action.field]: action.value };
      } else {
        return state;
      }

    case "mobileNumber":
      // Check if action.value contains only numbers
      const isNumeric = /^[0-9]+$/.test(action.value);
      if (action.value === "") {
        return { ...state, [action.field]: action.value };
      } else if (isNumeric) {
        return { ...state, [action.field]: action.value };
      } else {
        return state;
      }

    case "email":
      // Check if action.value is a valid email format

      return { ...state, [action.field]: action.value };

    default:
      return "";
  }
};

const ApplyPage = () => {
  const { id } = useParams();
  const applyid = id;

  const [state, dispatch] = useReducer(reducer, initialState);
  const [percentage, setPercentage] = useState(-5);
  const [show, setShow] = useState(false);
  const [showVendor, setVendorRules] = useState(false);

  const [vendorPercentage, setVedorPercentage] = useState(0);
  const [vendorInputs, setVednorInputs] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    shopName: "",
    address: "",
    secondaryMobile: "",
    location: "",
    pincode: "",
  });

  useEffect(() => {
    if (state.name === "" && state.mobileNumber === "" && state.email === "") {
      setPercentage(-5);
    }

    if (state.name !== "" && state.mobileNumber === "") {
      setPercentage(15);
    }

    if (
      state.name !== "" &&
      state.mobileNumber !== "" &&
      state.mobileNumber > 4
    ) {
      setPercentage(23);
    }

    if (
      state.name !== "" &&
      state.mobileNumber !== "" &&
      state.mobileNumber > 9
    ) {
      setPercentage(33);
    }

    if (
      state.name !== "" &&
      state.mobileNumber !== "" &&
      state.mobileNumber.length > 9 &&
      state.email === ""
    ) {
      setPercentage(45);
    }

    if (
      state.name !== "" &&
      state.mobileNumber !== "" &&
      state.mobileNumber.length > 9 &&
      state.email !== ""
    ) {
      setPercentage(69);
    }

    if (
      state.name !== "" &&
      state.mobileNumber !== "" &&
      state.mobileNumber.length > 9 &&
      state.email !== "" &&
      state.email.endsWith("@gmail.com")
    ) {
      setPercentage(85);
      setTimeout(() => {
        setPercentage(100);
      }, 1000);
    }
  }, [state]);

  useEffect(() => {
    if (vendorInputs.name)
      if (vendorInputs.name !== "") {
        setVedorPercentage(5);
      }
    if (vendorInputs.name !== "" && vendorInputs.mobileNumber !== "") {
      setVedorPercentage(10);
    }
    if (
      vendorInputs.name !== "" &&
      vendorInputs.mobileNumber !== "" &&
      vendorInputs.mobileNumber.length > 4
    ) {
      setVedorPercentage(20);
    }
    if (
      vendorInputs.name !== "" &&
      vendorInputs.mobileNumber !== "" &&
      vendorInputs.mobileNumber.length > 4 &&
      vendorInputs.mobileNumber.length > 9
    ) {
      setVedorPercentage(25);
    }
    if (
      vendorInputs.name !== "" &&
      vendorInputs.mobileNumber !== "" &&
      vendorInputs.mobileNumber.length > 4 &&
      vendorInputs.mobileNumber.length > 9 &&
      vendorInputs.email !== ""
    ) {
      setVedorPercentage(30);
    }
    if (
      vendorInputs.name !== "" &&
      vendorInputs.mobileNumber !== "" &&
      vendorInputs.mobileNumber.length > 4 &&
      vendorInputs.mobileNumber.length > 9 &&
      vendorInputs.email !== "" &&
      vendorInputs.email.endsWith("@gmail.com")
    ) {
      setVedorPercentage(35);
    }
    if (
      vendorInputs.name !== "" &&
      vendorInputs.mobileNumber !== "" &&
      vendorInputs.mobileNumber.length > 4 &&
      vendorInputs.mobileNumber.length > 9 &&
      vendorInputs.email !== "" &&
      vendorInputs.email.endsWith("@gmail.com") &&
      vendorInputs.shopName !== ""
    ) {
      setVedorPercentage(40);
    }
    if (
      vendorInputs.name !== "" &&
      vendorInputs.mobileNumber !== "" &&
      vendorInputs.mobileNumber.length > 4 &&
      vendorInputs.mobileNumber.length > 9 &&
      vendorInputs.email !== "" &&
      vendorInputs.email.endsWith("@gmail.com") &&
      vendorInputs.shopName !== "" &&
      vendorInputs.address !== ""
    ) {
      setVedorPercentage(45);
    }
    if (
      vendorInputs.name !== "" &&
      vendorInputs.mobileNumber !== "" &&
      vendorInputs.mobileNumber.length > 4 &&
      vendorInputs.mobileNumber.length > 9 &&
      vendorInputs.email !== "" &&
      vendorInputs.email.endsWith("@gmail.com") &&
      vendorInputs.shopName !== "" &&
      vendorInputs.address !== "" &&
      vendorInputs.secondaryMobile !== ""
    ) {
      setVedorPercentage(50);
    }
    if (
      vendorInputs.name !== "" &&
      vendorInputs.mobileNumber !== "" &&
      vendorInputs.mobileNumber.length > 4 &&
      vendorInputs.mobileNumber.length > 9 &&
      vendorInputs.email !== "" &&
      vendorInputs.email.endsWith("@gmail.com") &&
      vendorInputs.shopName !== "" &&
      vendorInputs.address !== "" &&
      vendorInputs.secondaryMobile !== "" &&
      vendorInputs.secondaryMobile.length > 4
    ) {
      setVedorPercentage(60);
    }
    if (
      vendorInputs.name !== "" &&
      vendorInputs.mobileNumber !== "" &&
      vendorInputs.mobileNumber.length > 4 &&
      vendorInputs.mobileNumber.length > 9 &&
      vendorInputs.email !== "" &&
      vendorInputs.email.endsWith("@gmail.com") &&
      vendorInputs.shopName !== "" &&
      vendorInputs.address !== "" &&
      vendorInputs.secondaryMobile !== "" &&
      vendorInputs.secondaryMobile.length > 4 &&
      vendorInputs.secondaryMobile.length > 9
    ) {
      setVedorPercentage(75);
    }
    if (
      vendorInputs.name !== "" &&
      vendorInputs.mobileNumber !== "" &&
      vendorInputs.mobileNumber.length > 4 &&
      vendorInputs.mobileNumber.length > 9 &&
      vendorInputs.email !== "" &&
      vendorInputs.email.endsWith("@gmail.com") &&
      vendorInputs.shopName !== "" &&
      vendorInputs.address !== "" &&
      vendorInputs.secondaryMobile !== "" &&
      vendorInputs.secondaryMobile.length > 4 &&
      vendorInputs.secondaryMobile.length > 9 &&
      vendorInputs.location !== ""
    ) {
      setVedorPercentage(80);
    }
    if (
      vendorInputs.name !== "" &&
      vendorInputs.mobileNumber !== "" &&
      vendorInputs.mobileNumber.length > 4 &&
      vendorInputs.mobileNumber.length > 9 &&
      vendorInputs.email !== "" &&
      vendorInputs.email.endsWith("@gmail.com") &&
      vendorInputs.shopName !== "" &&
      vendorInputs.address !== "" &&
      vendorInputs.secondaryMobile !== "" &&
      vendorInputs.secondaryMobile.length > 4 &&
      vendorInputs.secondaryMobile.length > 9 &&
      vendorInputs.location !== "" &&
      vendorInputs.pincode !== ""
    ) {
      setVedorPercentage(85);
    }
    if (
      vendorInputs.name !== "" &&
      vendorInputs.mobileNumber !== "" &&
      vendorInputs.mobileNumber.length > 4 &&
      vendorInputs.mobileNumber.length > 9 &&
      vendorInputs.email !== "" &&
      vendorInputs.email.endsWith("@gmail.com") &&
      vendorInputs.shopName !== "" &&
      vendorInputs.address !== "" &&
      vendorInputs.secondaryMobile !== "" &&
      vendorInputs.secondaryMobile.length > 4 &&
      vendorInputs.secondaryMobile.length > 9 &&
      vendorInputs.location !== "" &&
      vendorInputs.pincode !== "" &&
      vendorInputs.pincode.length > 5
    ) {
      setVedorPercentage(90);
      setTimeout(() => {
        setVedorPercentage(95);
      }, 1000);
    }
  }, [vendorInputs]);

  const DriverTerms = () => {
    const [signed, setSigned] = useState(false);
    const [success, setSuccess] = useState(false);

    return (
      <>
        <div
          style={{
            position: "absolute",
            backgroundColor: "#22222290",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        ></div>
        <div className="driver-terms">
          {success ? (
            <div className="success-terms">
              <img src="/successful-animation.gif" alt="Success" />
              <h4>Your inputs are recorded</h4>
              <h1>Thank you for your interest</h1>
            </div>
          ) : (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse nisl ipsum, porta sit amet tortor sit amet,
              consectetur bibendum arcu. Nulla nec metus vel nisi pellentesque
              vulputate vel vitae enim. Cras porta, risus at facilisis
              venenatis, turpis nisl lobortis magna, at tincidunt lorem urna
              consequat eros. Fusce egestas sollicitudin ex non auctor. Mauris
              orci massa, euismod a est sit amet, tincidunt tempus dui.
              Pellentesque vitae erat nisl. Sed fringilla odio eu nunc blandit,
              eleifend tristique dui auctor. Donec tempor dui et tellus
              malesuada, consequat iaculis erat dictum. Nulla a magna id justo
              tempor rutrum. Sed porta commodo consectetur. In et justo vel elit
              ultrices sodales. Proin rhoncus, risus ac sollicitudin rhoncus,
              urna justo hendrerit ligula, a viverra ante eros id magna. Nullam
              vehicula tortor sed convallis vehicula. Sed pharetra, nisi nec
              fermentum accumsan, ipsum felis viverra mi, at commodo nunc urna
              quis neque. Quisque eu sem lobortis, accumsan turpis mattis,
              sollicitudin est. Ut posuere ullamcorper ultricies. Nam
              consectetur purus at pharetra tincidunt. Cras finibus sapien ac ex
              bibendum pulvinar. Sed nec risus nec est varius viverra. Nam
              dignissim sollicitudin venenatis. Duis tristique nunc purus, et
              vehicula tortor vehicula at. Praesent ut massa nec nulla porttitor
              cursus. Etiam ut tellus vel justo placerat gravida id eget ipsum.
              Sed ac vestibulum enim. Donec sagittis tellus orci, sed fermentum
              est semper at. Suspendisse rutrum, velit a hendrerit fermentum,
              leo neque tincidunt felis, in viverra massa turpis a dui. Quisque
              egestas sodales fringilla. Cras blandit a sem id auctor. Curabitur
              lobortis vel massa rutrum vestibulum. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Sed iaculis erat quam, a hendrerit nisl molestie ut. Suspendisse
              ut odio auctor, blandit dolor in, molestie ex. In in finibus
              sapien, eget volutpat augue. Aliquam at congue purus. Ut eget odio
              mi. Etiam suscipit fermentum ullamcorper. Aliquam sagittis, velit
              eget laoreet congue, justo quam vestibulum urna, ac luctus ligula
              massa nec tortor. Phasellus malesuada vehicula lorem nec dapibus.
              Quisque tempus mi at nisl efficitur, et posuere dui fermentum. In
              aliquet mauris id nisl tempus luctus. Fusce interdum sem nulla, ac
              facilisis nibh convallis vitae. Vestibulum varius mauris non mi
              fringilla, vitae auctor quam venenatis. Sed vestibulum urna diam,
              quis fermentum ipsum maximus ut. Curabitur a ultrices nunc.
              Phasellus convallis volutpat leo, non vulputate dui sodales vel.
              Cras fringilla ante eu sem pellentesque, ac consectetur nisl
              venenatis. Quisque bibendum dolor at sem fermentum ultrices. Donec
              at fringilla eros. Vivamus ornare mi vitae est volutpat vehicula.
              Donec vitae sapien risus. Etiam sit amet tristique mi, vel
              dignissim libero. Sed volutpat egestas nibh, et auctor ex maximus
              vitae. Etiam sapien tortor, vehicula et tincidunt eget, interdum
              non odio. Donec porta euismod lectus a porta. Phasellus non nisi
              arcu. Ut aliquet libero ac nisl maximus gravida. Suspendisse
              potenti. Aenean eros ipsum, scelerisque in pretium ac,
              pellentesque sed diam. Etiam ac pretium augue. Nam porttitor
              sollicitudin quam a scelerisque. Praesent sollicitudin libero non
              purus dictum tincidunt. Curabitur lorem ante, scelerisque eu magna
              sed, suscipit dapibus augue. Quisque congue risus dolor, ut
              placerat enim porttitor in. Aenean sit amet felis in risus
              placerat facilisis. Pellentesque a feugiat eros, ac malesuada
              elit. Sed viverra mauris vel tellus pulvinar, a posuere lorem
              fringilla. Fusce suscipit eget neque ut pretium. Morbi nec quam
              nec tellus vestibulum congue et sagittis justo. Nulla dapibus
              velit mi, ut pretium eros consectetur sit amet. Nulla tristique
              pellentesque ligula, ac auctor sapien mollis quis. Maecenas arcu
              tellus, rutrum at accumsan vel, vulputate sed ligula. Proin in est
              a sem commodo consectetur vel eget massa. Aenean cursus faucibus
              ipsum, non cursus nisi luctus ac. Mauris efficitur neque in
              venenatis maximus. Phasellus sit amet mi ligula. Nulla auctor quam
              sit amet mauris semper aliquet. Suspendisse dignissim euismod
              vehicula. Nunc lobortis pulvinar felis, id tincidunt nulla
              interdum ac. Nullam auctor, dolor vel consectetur tincidunt, lacus
              neque fringilla urna, eget maximus risus velit vitae velit. Proin
              pellentesque, lectus eget volutpat euismod, elit metus posuere
              orci, vel tempor libero dolor et dolor. Ut consectetur accumsan
              tortor, a rutrum tortor. Ut id justo eget lacus ultricies blandit
              in ut nibh. Morbi ornare eleifend maximus. Sed turpis lacus,
              ultrices at ante in, blandit interdum sem. Suspendisse consequat
              vitae nunc vel laoreet. Cras laoreet ex nec dui iaculis porttitor.
              Curabitur nisl metus, bibendum elementum orci vel, condimentum
              sagittis nunc. Fusce vitae ex lorem. Cras in ornare nulla, at
              venenatis tellus. Aenean condimentum orci bibendum nulla dapibus,
              id condimentum lectus rhoncus. Cras molestie, turpis eget
              convallis rhoncus, massa eros pulvinar nunc, gravida tincidunt
              neque mauris vitae massa. Vivamus dapibus lectus enim, ac
              consequat felis tincidunt quis. Aliquam placerat convallis justo,
              laoreet placerat elit viverra eget. Nulla in lectus blandit,
              ultricies sapien at, tincidunt ipsum. Ut non sapien condimentum,
              varius diam et, venenatis quam. Quisque at sodales justo. Morbi id
              orci ut lacus rutrum imperdiet ac vulputate justo. Nulla mollis
              felis eget nisi tempor finibus. Nullam convallis et ex et congue.
              Fusce pharetra, tortor vitae posuere sodales, nunc lectus cursus
              mi, in facilisis eros orci quis tellus. Vivamus venenatis libero
              id massa auctor dapibus. Etiam leo metus, eleifend in nunc vitae,
              sodales aliquet libero. Maecenas ligula velit, pretium aliquet
              felis eleifend, ullamcorper scelerisque nulla. Nunc at risus ac
              ipsum rutrum varius eu eu purus. Donec eget felis sagittis,
              gravida erat ac, tempus felis. Nullam et nisl tristique, bibendum
              arcu sed, molestie enim. Fusce volutpat maximus arcu vitae
              laoreet. Morbi porta diam nisl, at pharetra diam mollis vitae.
              Nullam dolor ante, lobortis eu leo et, fermentum tristique nibh.
              Aliquam erat volutpat. Proin efficitur consectetur mi eu tempus.
              Donec aliquam condimentum porttitor. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Proin eleifend orci sapien, auctor faucibus
              ligula mattis et. Sed tempus ligula metus, vitae laoreet quam
              convallis pellentesque. Morbi euismod, velit tempor tempor
              maximus, orci arcu lacinia massa, id pharetra eros magna non est.
              Aliquam tristique id arcu sed feugiat. Nunc sed mollis massa.
            </p>
          )}
          {!success && (
            <>
              <div style={{ display: "flex" }}>
                <input
                  onChange={() => {
                    setSigned(!signed);
                  }}
                  checked={signed}
                  type="checkbox"
                />
                <p>Accept Terms and Conditions</p>
              </div>
              <button
                onClick={() => {
                  if (!signed) {
                    toast.error("Please Accept our terms and conditions", {
                      autoClose: 2000,
                      pauseOnHover: true,
                      closeOnClick: true,
                      position: "top-center",
                      theme: "colored",
                    });
                  } else {
                    setSuccess(true);
                    setTimeout(() => {
                      setShow(false);
                      window.location.href = "/";
                    }, 2000);
                  }
                }}
                type="button"
              >
                Submit
              </button>
            </>
          )}
        </div>
      </>
    );
  };

  const VendorTerms = () => {
    const [signed, setSigned] = useState(false);
    const [success, setSuccess] = useState(false);

    return (
      <>
        <div
          style={{
            position: "absolute",
            backgroundColor: "#22222290",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        ></div>
        <div className="driver-terms">
          {success ? (
            <div className="success-terms">
              <img src="/successful-animation.gif" alt="Success" />
              <h4>Your inputs are recorded</h4>
              <h1>Thank you for your interest</h1>
            </div>
          ) : (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse nisl ipsum, porta sit amet tortor sit amet,
              consectetur bibendum arcu. Nulla nec metus vel nisi pellentesque
              vulputate vel vitae enim. Cras porta, risus at facilisis
              venenatis, turpis nisl lobortis magna, at tincidunt lorem urna
              consequat eros. Fusce egestas sollicitudin ex non auctor. Mauris
              orci massa, euismod a est sit amet, tincidunt tempus dui.
              Pellentesque vitae erat nisl. Sed fringilla odio eu nunc blandit,
              eleifend tristique dui auctor. Donec tempor dui et tellus
              malesuada, consequat iaculis erat dictum. Nulla a magna id justo
              tempor rutrum. Sed porta commodo consectetur. In et justo vel elit
              ultrices sodales. Proin rhoncus, risus ac sollicitudin rhoncus,
              urna justo hendrerit ligula, a viverra ante eros id magna. Nullam
              vehicula tortor sed convallis vehicula. Sed pharetra, nisi nec
              fermentum accumsan, ipsum felis viverra mi, at commodo nunc urna
              quis neque. Quisque eu sem lobortis, accumsan turpis mattis,
              sollicitudin est. Ut posuere ullamcorper ultricies. Nam
              consectetur purus at pharetra tincidunt. Cras finibus sapien ac ex
              bibendum pulvinar. Sed nec risus nec est varius viverra. Nam
              dignissim sollicitudin venenatis. Duis tristique nunc purus, et
              vehicula tortor vehicula at. Praesent ut massa nec nulla porttitor
              cursus. Etiam ut tellus vel justo placerat gravida id eget ipsum.
              Sed ac vestibulum enim. Donec sagittis tellus orci, sed fermentum
              est semper at. Suspendisse rutrum, velit a hendrerit fermentum,
              leo neque tincidunt felis, in viverra massa turpis a dui. Quisque
              egestas sodales fringilla. Cras blandit a sem id auctor. Curabitur
              lobortis vel massa rutrum vestibulum. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Sed iaculis erat quam, a hendrerit nisl molestie ut. Suspendisse
              ut odio auctor, blandit dolor in, molestie ex. In in finibus
              sapien, eget volutpat augue. Aliquam at congue purus. Ut eget odio
              mi. Etiam suscipit fermentum ullamcorper. Aliquam sagittis, velit
              eget laoreet congue, justo quam vestibulum urna, ac luctus ligula
              massa nec tortor. Phasellus malesuada vehicula lorem nec dapibus.
              Quisque tempus mi at nisl efficitur, et posuere dui fermentum. In
              aliquet mauris id nisl tempus luctus. Fusce interdum sem nulla, ac
              facilisis nibh convallis vitae. Vestibulum varius mauris non mi
              fringilla, vitae auctor quam venenatis. Sed vestibulum urna diam,
              quis fermentum ipsum maximus ut. Curabitur a ultrices nunc.
              Phasellus convallis volutpat leo, non vulputate dui sodales vel.
              Cras fringilla ante eu sem pellentesque, ac consectetur nisl
              venenatis. Quisque bibendum dolor at sem fermentum ultrices. Donec
              at fringilla eros. Vivamus ornare mi vitae est volutpat vehicula.
              Donec vitae sapien risus. Etiam sit amet tristique mi, vel
              dignissim libero. Sed volutpat egestas nibh, et auctor ex maximus
              vitae. Etiam sapien tortor, vehicula et tincidunt eget, interdum
              non odio. Donec porta euismod lectus a porta. Phasellus non nisi
              arcu. Ut aliquet libero ac nisl maximus gravida. Suspendisse
              potenti. Aenean eros ipsum, scelerisque in pretium ac,
              pellentesque sed diam. Etiam ac pretium augue. Nam porttitor
              sollicitudin quam a scelerisque. Praesent sollicitudin libero non
              purus dictum tincidunt. Curabitur lorem ante, scelerisque eu magna
              sed, suscipit dapibus augue. Quisque congue risus dolor, ut
              placerat enim porttitor in. Aenean sit amet felis in risus
              placerat facilisis. Pellentesque a feugiat eros, ac malesuada
              elit. Sed viverra mauris vel tellus pulvinar, a posuere lorem
              fringilla. Fusce suscipit eget neque ut pretium. Morbi nec quam
              nec tellus vestibulum congue et sagittis justo. Nulla dapibus
              velit mi, ut pretium eros consectetur sit amet. Nulla tristique
              pellentesque ligula, ac auctor sapien mollis quis. Maecenas arcu
              tellus, rutrum at accumsan vel, vulputate sed ligula. Proin in est
              a sem commodo consectetur vel eget massa. Aenean cursus faucibus
              ipsum, non cursus nisi luctus ac. Mauris efficitur neque in
              venenatis maximus. Phasellus sit amet mi ligula. Nulla auctor quam
              sit amet mauris semper aliquet. Suspendisse dignissim euismod
              vehicula. Nunc lobortis pulvinar felis, id tincidunt nulla
              interdum ac. Nullam auctor, dolor vel consectetur tincidunt, lacus
              neque fringilla urna, eget maximus risus velit vitae velit. Proin
              pellentesque, lectus eget volutpat euismod, elit metus posuere
              orci, vel tempor libero dolor et dolor. Ut consectetur accumsan
              tortor, a rutrum tortor. Ut id justo eget lacus ultricies blandit
              in ut nibh. Morbi ornare eleifend maximus. Sed turpis lacus,
              ultrices at ante in, blandit interdum sem. Suspendisse consequat
              vitae nunc vel laoreet. Cras laoreet ex nec dui iaculis porttitor.
              Curabitur nisl metus, bibendum elementum orci vel, condimentum
              sagittis nunc. Fusce vitae ex lorem. Cras in ornare nulla, at
              venenatis tellus. Aenean condimentum orci bibendum nulla dapibus,
              id condimentum lectus rhoncus. Cras molestie, turpis eget
              convallis rhoncus, massa eros pulvinar nunc, gravida tincidunt
              neque mauris vitae massa. Vivamus dapibus lectus enim, ac
              consequat felis tincidunt quis. Aliquam placerat convallis justo,
              laoreet placerat elit viverra eget. Nulla in lectus blandit,
              ultricies sapien at, tincidunt ipsum. Ut non sapien condimentum,
              varius diam et, venenatis quam. Quisque at sodales justo. Morbi id
              orci ut lacus rutrum imperdiet ac vulputate justo. Nulla mollis
              felis eget nisi tempor finibus. Nullam convallis et ex et congue.
              Fusce pharetra, tortor vitae posuere sodales, nunc lectus cursus
              mi, in facilisis eros orci quis tellus. Vivamus venenatis libero
              id massa auctor dapibus. Etiam leo metus, eleifend in nunc vitae,
              sodales aliquet libero. Maecenas ligula velit, pretium aliquet
              felis eleifend, ullamcorper scelerisque nulla. Nunc at risus ac
              ipsum rutrum varius eu eu purus. Donec eget felis sagittis,
              gravida erat ac, tempus felis. Nullam et nisl tristique, bibendum
              arcu sed, molestie enim. Fusce volutpat maximus arcu vitae
              laoreet. Morbi porta diam nisl, at pharetra diam mollis vitae.
              Nullam dolor ante, lobortis eu leo et, fermentum tristique nibh.
              Aliquam erat volutpat. Proin efficitur consectetur mi eu tempus.
              Donec aliquam condimentum porttitor. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Proin eleifend orci sapien, auctor faucibus
              ligula mattis et. Sed tempus ligula metus, vitae laoreet quam
              convallis pellentesque. Morbi euismod, velit tempor tempor
              maximus, orci arcu lacinia massa, id pharetra eros magna non est.
              Aliquam tristique id arcu sed feugiat. Nunc sed mollis massa.
            </p>
          )}
          {!success && (
            <>
              <div style={{ display: "flex" }}>
                <input
                  onChange={() => {
                    setSigned(!signed);
                  }}
                  checked={signed}
                  type="checkbox"
                />
                <p>Accept Terms and Conditions</p>
              </div>
              <button
                onClick={() => {
                  if (!signed) {
                    toast.error("Please Accept our terms and conditions", {
                      autoClose: 2000,
                      pauseOnHover: true,
                      closeOnClick: true,
                      position: "top-center",
                      theme: "colored",
                    });
                  } else {
                    setSuccess(true);
                    setTimeout(() => {
                      setShow(false);
                      window.location.href = "/";
                    }, 2000);
                  }
                }}
                type="button"
              >
                Submit
              </button>
            </>
          )}
        </div>
      </>
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (event.target.id) {
      case "name":
        dispatch({ type: "name", field: name, value });
        break;
      case "mobileNumber":
        dispatch({ type: "mobileNumber", field: name, value });
        break;
      case "email":
        dispatch({ type: "email", field: name, value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);
  };

  return (
    <>
      <ToastContainer />
      <div className="apply-main-con">
        {show && <DriverTerms />}
        {showVendor && <VendorTerms />}
        {applyid === "delivery" ? (
          <div className="driver-main-con">
            <div>
              <img src="/washituplogo.png" alt="Washit Up" />
            </div>

            <div>
              <h2>Drive for Us</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={state.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />

                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={state.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your mobile number"
                  required
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={state.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />

                {percentage === 100 ? (
                  <button onClick={handleSubmit} type="submit">
                    Submit
                  </button>
                ) : (
                  <button id="buttonAnimation" type="submit">
                    <img
                      style={{ left: `${percentage}%` }}
                      src="/deliveryboy.gif"
                      alt="deliveryanimation"
                    />
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        ) : (
          <div className="vendor-main-con">
            <div>
              <img src="/washituplogo.png" alt="Washit Up" />
            </div>
            <form>
              <label htmlFor="vendorName">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                id="vendorName"
                name="vendorName"
                required
                onChange={(e) => {
                  setVednorInputs((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
                value={vendorInputs.name}
              />
              <label htmlFor="vendorPrimary">Primary Mobile Number</label>
              <input
                type="number"
                placeholder="Enter Your Moblie Number"
                id="vendorPrimary"
                name="vendorPrimary"
                required
                onChange={(e) => {
                  setVednorInputs((prev) => ({
                    ...prev,
                    mobileNumber: e.target.value,
                  }));
                }}
                value={vendorInputs.mobileNumber}
              />
              <label htmlFor="vendorEmail">Email Address</label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                id="vendorEmail"
                name="vendorEmail"
                required
                onChange={(e) => {
                  setVednorInputs((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
                value={vendorInputs.email}
              />
              <label htmlFor="vendorShopName">Shop Name</label>
              <input
                type="text"
                placeholder="Enter Your Shop Name"
                id="vendorShopName"
                name="vendorShopName"
                required
                onChange={(e) => {
                  setVednorInputs((prev) => ({
                    ...prev,
                    shopName: e.target.value,
                  }));
                }}
                value={vendorInputs.shopName}
              />
              <label htmlFor="vendorAddress">Shop Address</label>
              <textarea
                type="text"
                placeholder="Enter Your Shop Address"
                id="vendorAddress"
                name="vendorAddress"
                required
                onChange={(e) => {
                  setVednorInputs((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }));
                }}
                value={vendorInputs.address}
              ></textarea>
              <label htmlFor="vendorSecondaryNumber">Secondary Number</label>
              <input
                type="number"
                placeholder="Enter Your Secondary Number"
                id="vendorSecondaryNumber"
                name="vendorSecondaryNumber"
                required
                onChange={(e) => {
                  setVednorInputs((prev) => ({
                    ...prev,
                    secondaryMobile: e.target.value,
                  }));
                }}
                value={vendorInputs.secondaryMobile}
              />
              <label htmlFor="vendorLocation">Enter Location</label>
              <input
                type="text"
                placeholder="Enter Your "
                id="vendorLocation"
                name="vendorLocation"
                required
                onChange={(e) => {
                  setVednorInputs((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }));
                }}
                value={vendorInputs.location}
              />
              <label htmlFor="vendorpincode">Enter PINCODE</label>
              <input
                type="number"
                placeholder="Enter PINCODE"
                id="vendorpincode"
                name="vendorpincode"
                required
                onChange={(e) => {
                  setVednorInputs((prev) => ({
                    ...prev,
                    pincode: e.target.value,
                  }));
                }}
                value={vendorInputs.pincode}
              />
            </form>
            <div id="loading">
              {vendorPercentage > 94 ? (
                <button
                  onClick={() => {
                    setVendorRules(true);
                  }}
                  type="submit"
                >
                  Submit
                </button>
              ) : (
                <img
                  style={{ left: `${vendorPercentage}%` }}
                  src="/washingload.gif"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ApplyPage;
