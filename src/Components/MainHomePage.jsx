import React, { useState } from "react";
import "./MainHomePage.css";
import firstleft from "../images/firstleft.webp";
import ourvalues1 from "../images/outvalues1.svg";
import ourvalues2 from "../images/outvalues2.svg";
import ourvalues3 from "../images/outvalues3.png";
import { useNavigate } from "react-router-dom";

export const MainHomePage = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const handleFeedbackFormSubmit = (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

  return (
    <div>
      <div className="firstsection">
        <div className="left">
          <img src={firstleft} alt="" width={"100%"}/>
        </div>
        <div className="right">
          <span>New Launch</span>
          <p>Vitamin K + Retinal 01% Eye Cream</p>
          <p>
            Introducing Our Exclusive Eyecare Range, with Eye Cream:
            <br /> Formulated to reduce Dark Circles, Puffiness & Fine Lines.
          </p>
          <button
            onClick={() => {
              navigate("/collections");
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
      <div className="secondsection">
        <p>Shop by concerns</p>
        <p>Find right products & routines for your skin needs</p>
        <div className="secondsectionimagediv">
          <div className="concerncard">
            <button
              onClick={() => {
                navigate("/collections/skin");
              }}
            >
              Pigmentation
            </button>
          </div>
          <div className="concerncard">
            <button
              onClick={() => {
                navigate("/collections/skin");
              }}
            >
              Acne
            </button>
          </div>
          <div className="concerncard">
            <button
              onClick={() => {
                navigate("/collections/skin");
              }}
            >
              Dullness
            </button>
          </div>
          <div className="concerncard">
            <button
              onClick={() => {
                navigate("/collections/skin");
              }}
            >
              Fine Lines
            </button>
          </div>
        </div>
      </div>
      <div className="thirdsection">
        <p>
          Not sure which are the right products for you?
          <br />
          Try Our Routine Recommender
        </p>
        <p>
          Build your personalized skincare routine with our Advanced Skin
          Analyzer Tool. Accurate results, takes less than 2 mins
        </p>
        <button>Build Your Routine</button>
      </div>
      <div className="fourthsection">
        <p>Our Values</p>
        <div className="valuecontainer">
          <div className="valuesdiv">
            <img src={ourvalues1} alt="" />
            <p>Transparency</p>
            <p>
              No hidden ingredients, no opacity. Full disclosure of ingredients
              used & their concentration
            </p>
          </div>
          <div className="valuesdiv">
            <img src={ourvalues2} alt="" />
            <p>Efficacy</p>
            <p>Each product is launched on back of proven science only</p>
          </div>
          <div className="valuesdiv">
            <img src={ourvalues3} alt="" />
            <p>Affordable</p>
            <p>Skincare, accessible to all</p>
          </div>
        </div>
      </div>
      <div className="fifthsection">
        <div className="feedbackcontainer">
          <div className="feedback">
            <p>
              My life saviour i.e. I can say my skin saviour. I started seeing
              the effect after 2 months and now it's doing wonders. People say
              my skin glows
            </p>
            <p>Shreya Bishayee</p>
          </div>
          <div className="feedback">
            <p>
              Very much pocket friendly, suitable for absolute sensitive skin
              and visible results.. so glad to have come across this amazing
              brand
            </p>
            <p>Sujata Sajid</p>
          </div>
          <div className="feedback">
            <p>
              The one and only skincare product that actually worked on my
              skin!! Very effective, shows improvement, budget friendly, gentle
              on skin
            </p>
            <p>Varshini Ravindran</p>
          </div>
        </div>
        <button
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          Give Feedback
        </button>
        <div className={`rightpanel ${isOpen ? "open" : "close"}`}>
          <div className="feedbackpaneldiv">
            <button
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <form
              action=""
              onSubmit={handleFeedbackFormSubmit}
              className="feedbackform"
            >
              <input type="text" placeholder="Name" />
              <textarea
                name=""
                id=""
                cols="7"
                rows="5"
                placeholder="Message"
              ></textarea>
              <input type="email" name="" id="" placeholder="Email" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
