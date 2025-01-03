import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function CreateWallet() {
  const [pin, setPin] = useState(["", "", "", ""]);

  const history = useHistory();
  const handleNext = () => {
    history.push("/admin/dashboard");
  };


const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
};

return (
    <div
        className="container mx-auto px-4 h-screen flex items-center justify-center"
        style={{ maxHeight: "100vh", overflow: "hidden" }}
    >
        <div className="relative flex flex-col w-full lg:w-6/12 px-4">
            <div className="bg-white rounded-my shadow-lg p-8" style={{ width: "420px", overflowX: "hidden" }}>
                <a
                className="relative left-90 text-black text-3xl font-bold font-weight-900"
                onClick={() => window.history.back()}
                >
                ←
                </a>
                <h2 className="text-2xl font-semibold mb-4 text-green text-aeonik">
                Wallet
                </h2>
                <p className="text-sm text-blueGray-500 mb-6 font-semibold">
                We have created your web3 Wallet, below is your wallet seed words.
                Keep it safe and make sure you're the only one that have access to it.
                </p>

                <h3 className="text-sm font-semibold mb-2 text-blueGray-500">Wallet Address</h3>
                <div className="flex items-center">
                    <div className="border border-gray-200 rounded-lg p-4 relative">
                        <p className="text-sm break-all">
                            0x734hdyehdafeaffadef083rrjfe73cefceffawe635273
                        </p>

                        <a
                            className="absolute top-2 right-2 text-blue-500"
                            onClick={() => copyToClipboard('0x734hdyehdafeaffadef083rrjfe73cefceffawe635273')}
                        >
                            <img
                                src={require("../../assets/img/copy_image_1.png")}
                                alt="Copy"
                                className="relative"
                                style={{ width: "20px", height: "20px", left: "300px", bottom: "36px" }}
                            />
                        </a>
                    </div>
                </div>
                <h3 className="text-sm font-semibold mt-4 mb-2 text-blueGray-500">Seed Words</h3>
                
                {/* Updated Grid Container with fixed columns and dynamic rows */}
                <div className="border border-gray-200 rounded-lg p-4 relative">
                    <a
                        className="absolute top-2 right-2 text-blue-500"
                        onClick={() => copyToClipboard('mail whisper gall gentle news kite mantle pillar quick zebra urn bubble')}
                    >
                        <img
                            src={require("../../assets/img/copy_image_1.png")}
                            alt="Copy"
                            className="relative"
                            style={{ width: "20px", height: "20px", left: "300px", bottom: "10px" }}
                        />
                    </a>

                    <div 
                        className="grid grid-cols-5 gap-4 auto-rows-auto" 
                        style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        }}
                    >
                        {[
                        'mail', 'whisper', 'gall', 'gentle', 'news',
                        'kite', 'mantle', 'pillar', 'quick', 'zebra',
                        'urn', 'bubble'
                        ].map((word, index) => (
                        <div 
                            key={index} 
                            className="p-2 text-center bg-gray-50 rounded"
                            style={{
                            minWidth: '60px',
                            height: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                            }}
                        >
                            <span className="text-sm text-gray-700">{word}</span>
                        </div>
                        ))}
                    </div>
                </div>

                <button
                className="w-full mt-6 bg-green text-white font-semibold p-3 rounded-my"
                onClick={handleNext}
                >
                Secure my Wallet
                </button>
            </div>
        </div>
    </div>
);
}
