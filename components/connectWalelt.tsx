"use client"; // This is a client component
import React, { useEffect, useState, useContext } from "react";




export default function ConnectWallet() {
    const [address, setAddress] = useState("0");

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            console.log("Injected Web3 Wallet is installed!");
        }

        const accounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
    }

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