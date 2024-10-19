import React, { useEffect, useState } from "react";
import NiceAvatar, { genConfig } from "react-nice-avatar";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { postAvatar } from "../Redux/Action/avatar/avatarAction";
import { useDispatch } from "react-redux";
import { getLocalStorageItem } from "../Utils/helper";
import { useNavigate } from "react-router-dom";

export const AvatarEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [config, setConfig] = useState({
    sex: "man",
    faceColor: "#F9C9B6",
    earSize: "small",
    hairStyle: "normal",
    hairColor: "#000000",
    hatStyle: "none",
    hatColor: "#000000",
    eyeStyle: "circle",
    glassesStyle: "none",
    noseStyle: "short",
    mouthStyle: "smile",
    shirtStyle: "hoody",
    shirtColor: "#000000",
    bgColor: "#d1c4e9",
    isGradient: false,
  });

  useEffect(() => {
    const configFromLS = localStorage.getItem("avatarDetails");
    if (configFromLS) {
      try {
        const parsedConfig = JSON.parse(configFromLS);
        setConfig((prevConfig) => ({
          ...prevConfig,
          ...parsedConfig, // Merge with the previous config to maintain defaults
        }));
      } catch (error) {
        console.warn("Invalid JSON data in localStorage:", error);
      }
    }
  }, []);

  const handleChange = (property, value) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      [property]: value,
    }));
  };

  const handleSaveAvatar = (e) => {
    e.preventDefault();

    dispatch(
      postAvatar({
        config,
        callback: (data) => {
          if (data?.meta?.code === 200) {
            setConfig(data?.data);
            // navigate('/account')
          }
        },
      })
    );
  };

  return (
    <>
      <div className="editavatar">
        <div className="avatar-container">
          <div className="avatar">
            <NiceAvatar
              style={{ width: "500px", height: "500px" }}
              {...config}
            />
          </div>
          <div className="controls">
            <label>
              Gender:
              <select
                value={config.sex}
                onChange={(e) => handleChange("sex", e.target.value)}
              >
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
            </label>

            <label>
              Face Color:
              <input
                type="color"
                value={config.faceColor}
                onChange={(e) => handleChange("faceColor", e.target.value)}
              />
            </label>

            <label>
              Ear Size:
              <select
                value={config.earSize}
                onChange={(e) => handleChange("earSize", e.target.value)}
              >
                <option value="small">Small</option>
                <option value="big">Big</option>
              </select>
            </label>

            <label>
              Hair Style:
              <select
                value={config.hairStyle}
                onChange={(e) => handleChange("hairStyle", e.target.value)}
              >
                <option value="normal">Normal</option>
                <option value="mohawk">Mohawk</option>
                <option value="womanShort">Woman Short</option>
              </select>
            </label>

            <label>
              Hair Color:
              <input
                type="color"
                value={config.hairColor}
                onChange={(e) => handleChange("hairColor", e.target.value)}
              />
            </label>

            <label>
              Hat Style:
              <select
                value={config.hatStyle}
                onChange={(e) => handleChange("hatStyle", e.target.value)}
              >
                <option value="none">None</option>
                <option value="beanie">Beanie</option>
                <option value="turban">Turban</option>
              </select>
            </label>

            <label>
              Hat Color:
              <input
                type="color"
                value={config.hatColor}
                onChange={(e) => handleChange("hatColor", e.target.value)}
              />
            </label>

            <label>
              Eye Style:
              <select
                value={config.eyeStyle}
                onChange={(e) => handleChange("eyeStyle", e.target.value)}
              >
                <option value="circle">Circle</option>
                <option value="oval">Oval</option>
                <option value="smile">Smile</option>
              </select>
            </label>

            <label>
              Glasses Style:
              <select
                value={config.glassesStyle}
                onChange={(e) => handleChange("glassesStyle", e.target.value)}
              >
                <option value="none">None</option>
                <option value="round">Round</option>
                <option value="square">Square</option>
              </select>
            </label>

            <label>
              Nose Style:
              <select
                value={config.noseStyle}
                onChange={(e) => handleChange("noseStyle", e.target.value)}
              >
                <option value="short">Short</option>
                <option value="long">Long</option>
                <option value="round">Round</option>
              </select>
            </label>

            <label>
              Mouth Style:
              <select
                value={config.mouthStyle}
                onChange={(e) => handleChange("mouthStyle", e.target.value)}
              >
                <option value="smile">Smile</option>
                <option value="laugh">Laugh</option>
                <option value="peace">Peace</option>
              </select>
            </label>

            <label>
              Shirt Style:
              <select
                value={config.shirtStyle}
                onChange={(e) => handleChange("shirtStyle", e.target.value)}
              >
                <option value="hoody">Hoody</option>
                <option value="short">Short Sleeve</option>
                <option value="polo">Polo</option>
              </select>
            </label>

            <label>
              Shirt Color:
              <input
                type="color"
                value={config.shirtColor}
                onChange={(e) => handleChange("shirtColor", e.target.value)}
              />
            </label>

            <label>
              Background Color:
              <input
                type="color"
                value={config.bgColor}
                onChange={(e) => handleChange("bgColor", e.target.value)}
              />
            </label>

            <label>
              Gradient Background:
              <input
                type="checkbox"
                checked={config.isGradient}
                onChange={(e) => handleChange("isGradient", e.target.checked)}
              />
            </label>
            <button className="avatarSaveButton" onClick={handleSaveAvatar}>
            Save
          </button>
          </div>

        </div>
      </div>
    </>
  );
};
