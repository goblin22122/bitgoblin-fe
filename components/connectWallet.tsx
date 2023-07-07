"use client"; // This is a client component
import React, { useEffect, useState, useContext } from "react";
import Image from 'next/image';
import { ethers } from "ethers";


async function connect() {
    if (typeof (window as any).ethereum == "undefined") {
        alert("Please install MetaMask wallet!");
    }
    //@ts-ignore
    await ethereum.request({ method: "eth_requestAccounts" })
    const _provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const chainInfo = await _provider.getNetwork();
    const _signer = await _provider.getSigner();
    const addr = await _signer.getAddress();


    // approve(_signer);
}