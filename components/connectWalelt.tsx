"use client"; // This is a client component
import React, { useEffect, useState, useContext } from "react";
import { ethers } from "ethers";



export default function ConnectWallet() {
    const [address, setAddress] = useState("0");

    async function connect() {
        if (typeof window.ethereum == "undefined") {
            console.log("Please install MetaMask wallet!");
        }

        // await ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const addr = await signer.getAddress();
        setAddress(addr);

        // let web3 = new Web3(window.ethereum);
        // const accounts = await web3.eth.getAccounts();

        // setAddress(accounts);
    }

    useEffect(() => {
        connect();
    }, [address]);

    return (
        <div className="bit-buoy-mobile" data-v-c7418f94="">
            <div className="buoy-list">
                <div className="buoy-item" style={{ width: "10%" }} as="button" onClick={connect} >
                    <div className="btn">{address == "0" ? "Connect Wallet" : address}</div>
                </div>
            </div>
        </div>
    )
}