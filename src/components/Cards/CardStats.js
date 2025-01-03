import React, { useState } from "react";
import PropTypes from "prop-types";

const Copya = ({ walletAddress }) => (
  <a
    className="text-sm text-blue-500"
    onClick={() => navigator.clipboard.writeText(walletAddress)}
  >
    <img
      src={require("../../assets/img/copy_image_1.png")}
      alt="Copy"
      className="w-4 h-4 rounded-full border-2"
      style={{ width: "20px", height: "20px", marginLeft: "20px" }}
    />
  </a>
);

const WalletIcon = () => (
  <img
    src={require("../../assets/img/just_an_icon.png")}
    alt="Icon"
    className="w-4 h-4 rounded-full border-2 border-blueGray-50 shadow"
    style={{ width: "20px", height: "20px", marginLeft: "20px" }}
  />
);

const VisibilityToggle = ({ hidden, onToggle }) => (
  <a
    className="absolute top-0 right-0 text-sm text-blue-500"
    onClick={onToggle}
  >
    <img
      src={require("../../assets/img/eye_viewing_icon.png")}
      alt={hidden ? "View Balance" : "Hide Balance"}
      className="rounded-full border-2 border-blueGray-50"
      style={{ width: "16px", height: "16px", marginRight: "230px" }}
    />
  </a>
);

const AssetCard = ({ title, amount, description, image }) => (
  <div
    className="flex flex-col justify-between bg-white bg-gray-100 rounded-lg p-3 shadow-md"
    style={{ 
      width: "190px", 
      height: "172px", 
      borderRadius: "10px", 
      margin: "5px",
      minWidth: "100px" 
    }}
  >
    <div style={{marginTop: "8%", marginLeft: "5%"}}>
      <h6 className="text-lg font-bold mb-1" style={{ fontSize: "18px", lineHeight: "29px" }}>
        {title}
      </h6>
      <p className="text-sm text-blueGray-700" style={{ fontSize: "12px", lineHeight: "16px" }}>
        ${amount}
      </p>
    </div>
    <img
      src={require("../../assets/img/north_east_arrow.png")}
      alt="Arrow"
      className="absolute w-4 h-4"
      style={{ width: "16px", height: "16px", marginLeft: "20%", marginTop: "4%" }}
    />
    <div className="flex items-center mt-4" style={{ marginBottom: "7%", marginLeft: "5%" }}>
      <img
        src={image}
        alt={title}
        className="w-12 h-12"
        style={{ borderRadius: "10px" }}
      />
      <p className="text-red-700" style={{ fontSize: "12px", lineHeight: "16px", marginLeft: "10px", color: "red" }}>
        {description}
      </p>
    </div>
  </div>
);

export default function CardStats({
  walletAddress,
  walletBalance,
  isHidden,
  statDescription,
  assets,
}) {
  const [hidden, setHidden] = useState(isHidden);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
      {/* Parent flex container for Portfolio and Assets */}
      <div className="flex lg:flex-nowrap w-full" style={{ gap: "4%" }}>
        {/* Portfolio Section */}
        <div className="w-full lg:w-1/3">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-sm font-semibold">Portfolio</h5>
          </div>
          <div
            className="relative flex flex-col bg-white rounded-my shadow-lg p-4 mb-8 xl:mb-0 w-full"
            style={{
              marginTop: "8%",
              height: "172px",
              minWidth: "376px",
              width: "100%",
            }}
          >
            {/* Portfolio Content */}
            <div
              className="flex items-center w-full"
              style={{ height: "20px", marginLeft: "1%", marginTop: "8%" }}
            >
              <p className="text-sm text-blueGray-400 whitespace-nowrap overflow-hidden text-ellipsis">
                {walletAddress}
              </p>
              <div className="flex ml-auto items-center space-x-2">
                <Copya walletAddress={walletAddress} />
                <WalletIcon />
              </div>
            </div>
            <div
              className="relative mt-4"
              style={{
                width: "100%",
                height: "28%",
                marginLeft: "1%",
                marginTop: "10%",
              }}
            >
              <span className="absolute top-0 left-0 text-sm">$</span>
              <span
                className="font-semibold text-2xl text-blueGray-700 ml-4"
                style={{ marginLeft: "10px" }}
              >
                {hidden ? "********" : walletBalance}
              </span>
              <VisibilityToggle hidden={hidden} onToggle={() => setHidden(!hidden)} />
            </div>
          </div>
        </div>
  
        {/* Assets Section */}
          <div className="w-full lg:w-2/3 ml-50">
            <div className="flex justify-between mb-3 relative">
              <h5 className="text-sm font-semibold" style={{ marginLeft: "4%" }}>
                Your Assets
              </h5>
              <div className="absolute right-0">
                <a
                  href="#"
                  className="relative text-xs text-blue-500"
                  style={{ fontWeight: "600", color: "purple", left: "150px" }}
                >
            View All
                </a>
              </div>
            </div>

            <div
              className="relative overflow-x-auto"
              style={{
                minWidth: "580px",
                width: "100%",
                height: "auto",
                borderRadius: "20px",
              // padding: "1rem",
            }}
          >
            <div className="flex flex-nowrap lg:flex-row justify-start lg:justify-end gap-4">
              {assets.map((asset, index) => (
                <AssetCard key={index} {...asset} style={{ flex: "1 0 30%" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

CardStats.defaultProps = {
  walletAddress: "0x734hdyeh............ef27fhc64hbs5e54",
  walletBalance: "1,898.45",
  isHidden: true,
  statDescription: "Since last month",
  assets: [
    {
      title: "0.1 BTC",
      amount: "4,375.22",
      description: "-0.49%",
      image: require("../../assets/img/bitcoin_icon.png"),
    },
    {
      title: "2.5 ETH",
      amount: "4,375.22",
      description: "-0.49%",
      image: require("../../assets/img/bitcoin_icon.png"),
    },
    {
      title: "0.1 BTC",
      amount: "4,375.22",
      description: "-0.49%",
      image: require("../../assets/img/bitcoin_icon.png"),
    },
  ],
};

CardStats.propTypes = {
  walletAddress: PropTypes.string,
  walletBalance: PropTypes.string,
  isHidden: PropTypes.bool,
  statDescription: PropTypes.string,
  assets: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};