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
      style={{ width: "16px", height: "16px", marginRight: "130px" }}
    />
  </a>
);

const AssetCard = ({ title, amount, description, image }) => (
  <div
    className="flex flex-col justify-between bg-white bg-gray-100 rounded-my p-3 shadow-md"
    style={{ 
      width: "190px", 
      height: "150px", 
      borderRadius: "10px", 
      margin: "5px",
      marginTop: "5px",
      minWidth: "100px" 
    }}
  >
    <div style={{ marginTop: "8%", marginLeft: "5%" }}>
      <h6 className="text-lg font-semibold mb-1" style={{ fontSize: "18px", lineHeight: "29px" }}>
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
    <div className="relative flex flex-col min-w-0 break-words rounded mb-6 xl:mb-0">
      <div className="flex-auto p-4">
        {/* Container with responsive flex behavior */}
        <div
          className="container flex flex-col lg:flex-row lg:justify-between gap-4"
          style={{ maxWidth: "100%", width: "100%", minHeight: "170px", height: "100%", gap: "30px" }}
        >
          {/* Portfolio Section */}
                <div className="relative flex-grow flex-1 " style={{ marginLeft: "-15px" }}>
                <h5 className="text-black font-semibold test-sm">
                  Portfolio
                </h5>
                <div className="relative flex flex-col bg-white rounded-my shadow-lg p-4 mb-8 xl:mb-0 w-full mt-2" style={{ width: "100%", minHeight: "150px" }}>
                  <div className="flex items-center w-full" style={{ height: "20px", marginLeft: "1%", marginTop: "8%" }}>
                  <p className="text-sm text-blueGray-400 whitespace-nowrap overflow-hidden text-ellipsis">
                    {walletAddress}
                  </p>
                  <div className="flex ml-auto items-center space-x-2">
                    <Copya walletAddress={walletAddress} />
                    <WalletIcon />
                  </div>
                  </div>
                  <div className="relative mt-4" style={{ width: "100%", height: "28%", marginLeft: "1%", marginTop: "10%" }}>
                  <span className="absolute top-0 left-0 text-sm">$</span>
                  <span className="font-semibold text-2xl text-blueGray-700 ml-4" style={{ marginLeft: "10px" }}>
                    {hidden ? "••••••••" : walletBalance}
                  </span>
                  <VisibilityToggle hidden={hidden} onToggle={() => setHidden(!hidden)} />
                  </div>
                </div>
                </div>
            
                {/* Assets Section */}
                <div className="relative flex-initial md:w-1/2">
                <h5 className="text-black font-semibold text-sm">Your Assets</h5>
                <a
                  href="#"
                  className="absolute text-xs text-purple-500 font-semibold"
                  style={{ right: 0, top: 0 }}
                >
                  View All
                </a>
                <div className="relative overflow-x-auto mt-2">
                  <div className="flex flex-nowrap lg:flex-row gap-4">
                  {assets.slice(0, 3).map((asset, index) => (
                    <AssetCard key={index} {...asset} />
                  ))}
                  </div>
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
