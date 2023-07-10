"use client"; // This is a client component
import { AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Center, Divider, Flex, FormControl, FormErrorMessage, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Skeleton, Progress, Text, useDisclosure, Wrap, background, } from "@chakra-ui/react";
import React, { useEffect, useState, useContext } from "react";
import { useRef } from 'react';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';



import { ethers, BigNumber } from "ethers";

import StakingComponent from '@/components/staking';
import USDT_artifacts from '@/abi/BEP20.json';
import staking_artifacts from '@/abi/Staking.json';

// const USDCAddress = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
// const USDTAdress = "0x55d398326f99059fF775485246999027B3197955";

const USDTAdress = "0x6D936bd62aF1437C63dB22349Ab9bC4A4701c5D7";
const StakingAddress = "0x635A94FDBbb4DC268dc3A073Eb18e08C9fDC7DAf";


const query_provider = new ethers.providers.JsonRpcProvider("https://testnet-rpc.coinex.net/");
const USDT_query_instance = new ethers.Contract(USDTAdress, USDT_artifacts, query_provider);
const staking_query_instance = new ethers.Contract(StakingAddress, staking_artifacts, query_provider);


export default function App() {
    const [address, setAddress] = useState("0");
    const [allowance, setAllowance] = useState(0);
    const [balance, setBalance] = useState(0);
    const [connectStatus, setConnectStatus] = useState("0");
    const searchParams = useSearchParams();
    const [ref, setRef] = useState(searchParams.get('ref'));

    const [balance0, setBalance0] = useState(0);
    const [balance1, setBalance1] = useState(0);
    const [balance2, setBalance2] = useState(0);
    const [balance3, setBalance3] = useState(0);
    const [balance4, setBalance4] = useState(0);

    const [reward0, setReward0] = useState(0);
    const [reward1, setReward1] = useState(0);
    const [reward2, setReward2] = useState(0);
    const [reward3, setReward3] = useState(0);
    const [reward4, setReward4] = useState(0);

    const [remainTime0, setremainTime0] = useState(0);
    const [remainTime1, setremainTime1] = useState(0);
    const [remainTime2, setremainTime2] = useState(0);
    const [remainTime3, setremainTime3] = useState(0);
    const [remainTime4, setremainTime4] = useState(0);


    const [input0, setInput0] = useState(0);
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [input3, setInput3] = useState(0);
    const [input4, setInput4] = useState(0);

    const [commission, setCommission] = useState(0);
    const [staking_instance, set_staking_instance] = useState(0);





    // async function changeNetwork() {
    //     window.ethereum.request({
    //         method: "wallet_addEthereumChain",
    //         params: [{
    //             chainId: "0x38",
    //             rpcUrls: ["https://rpc.ankr.com/bsc/"],
    //             chainName: "Binance Smart Chain Mainnet",
    //             nativeCurrency: {
    //                 name: "BNB",
    //                 symbol: "BNB",
    //                 decimals: 18
    //             },
    //             blockExplorerUrls: ["https://bscscan.com/"]
    //         }]
    //     });
    // }

    async function changeNetwork() {
        window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
                chainId: "0x35",
                rpcUrls: ["https://testnet-rpc.coinex.net/"],
                chainName: "Coinex testnet",
                nativeCurrency: {
                    name: "CETT",
                    symbol: "cett",
                    decimals: 18
                },
                blockExplorerUrls: ["https://testnet.coinex.net/"]
            }]
        });
    }


    async function checkRef() {
        // console.log(ref_query)
        if (ref == null) await setRef("0xe924D3860C3EADb4C11Eb52A3D8D5798E13C080e");
        console.log(ref);
        // return "0xe924D3860C3EADb4C11Eb52A3D8D5798E13C080e";
    }


    async function approve(signer: any) {
        const _provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract_instance = new ethers.Contract(USDTAdress, USDT_artifacts, signer);
        // await contract_instance.increaseAllowance("0xCCbbbfA08E06136EEfCD887c7eF8381cf3c04F51", "1000000000000000000000000000");
        await contract_instance.increaseAllowance(StakingAddress, "1000000000000000000000000000");
    }

    async function connect() {
        if (typeof (window as any).ethereum == "undefined") {
            alert("Please install MetaMask wallet!");
        }
        //@ts-ignore
        await ethereum.request({ method: "eth_requestAccounts" })
        const _provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const chainInfo = await _provider.getNetwork();
        if (chainInfo["chainId"] != 53) {
            await changeNetwork();
        }
        const _signer = await _provider.getSigner();
        const addr = await _signer.getAddress();

        setAddress(addr);
        // approve(_signer);
    }


    async function queryAllowance() {
        if (address == "0") return;
        const allowance = await USDT_query_instance.allowance(address, StakingAddress);
        setAllowance(allowance);
    }

    async function queryBalance() {
        if (address == "0") return;
        const balance = await staking_query_instance.queryBalance(address);
        setBalance0(balance[0].div(BigNumber.from("10000000000000000")).toNumber() / 100);
        setBalance1(balance[1].div(BigNumber.from("10000000000000000")).toNumber() / 100);
        setBalance2(balance[2].div(BigNumber.from("10000000000000000")).toNumber() / 100);
        setBalance3(balance[3].div(BigNumber.from("10000000000000000")).toNumber() / 100);
        setBalance4(balance[4].div(BigNumber.from("10000000000000000")).toNumber() / 100);
    }
    async function queryReward() {
        if (address == "0") return;
        const reward = await staking_query_instance.queryReward(address);
        setReward0(reward[0].div(BigNumber.from("0xde0b6b3a7640000")).toString());
        setReward1(reward[1].div(BigNumber.from("0xde0b6b3a7640000")).toString());
        setReward2(reward[2].div(BigNumber.from("0xde0b6b3a7640000")).toString());
        setReward3(reward[3].div(BigNumber.from("0xde0b6b3a7640000")).toString());
        setReward4(reward[4].div(BigNumber.from("0xde0b6b3a7640000")).toString());
    }

    async function queryRemainTime() {
        if (address == "0") return;
        const remainTime = await staking_query_instance.queryRemain(address);
        setremainTime0(remainTime[0].toNumber());
        setremainTime1(remainTime[1].toNumber());
        setremainTime2(remainTime[2].toNumber());
        setremainTime3(remainTime[3].toNumber());
        setremainTime4(remainTime[4].toNumber());
    }

    async function deposit(id: any, amount: number) {
        const _provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const _signer = await _provider.getSigner();
        const staking_instance = new ethers.Contract(StakingAddress, staking_artifacts, _signer);
        const contract_instance = new ethers.Contract(USDTAdress, USDT_artifacts, _signer);

        if (address == ref) setRef("0xe924D3860C3EADb4C11Eb52A3D8D5798E13C080e");


        setInput0(0);
        setInput0(1);
        setInput0(2);
        setInput0(3);
        setInput0(4);

        if (allowance == 0) {
            await contract_instance.increaseAllowance(StakingAddress, "1000000000000000000000000000");
            await queryAllowance();
        } else {
            await staking_instance.stake(BigNumber.from((amount * 10000).toFixed(0)).mul(BigNumber.from("0x5AF3107A4000")), id, ref);
        }


        // await queryBalance();
    }

    async function claimReward(id: any) {
        const _provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const _signer = await _provider.getSigner();
        const staking_instance = new ethers.Contract(StakingAddress, staking_artifacts, _signer);

        await staking_instance.claimReward(id);
        await queryReward();
    }

    async function Withdrawal(id: any) {
        const _provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const _signer = await _provider.getSigner();
        const staking_instance = new ethers.Contract(StakingAddress, staking_artifacts, _signer);

        await staking_instance.unstake(id);
        await queryBalance();
    }
    useEffect(() => {
        checkRef();
        connect();
        queryAllowance();
        // queryBalance();
        // queryReward();
        // queryRemainTime();
    }, [address]);

    useEffect(() => {
        const refetch = setInterval(() => {
            queryAllowance();
            queryBalance();
            queryReward();
            queryRemainTime();
            // console.log(ref);
        }, 2000);
        return () => clearInterval(refetch);
    })

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div id="app" data-v-app="">
                <div className="bit-layouts" id="basic-layout" data-v-c7418f94="">
                    <div className="bit-container" data-v-c7418f94="">
                        <div className="bit-header" data-v-c7418f94="">
                            <div className="header-logo" data-v-c7418f94=""><a aria-current="page"
                                href={"/?ref=" + ref} className="router-link-active router-link-exact-active"
                                data-v-c7418f94=""><img src="logo.svg" style={{ width: "79px", height: "89px" }} /></a></div>
                            <div className="bit-menu" data-v-c7418f94="">
                                <div className="arco-menu arco-menu-light arco-menu-horizontal pc-menu">
                                    <div className="arco-menu-inner">
                                        <div className="arco-menu-overflow-wrap">
                                            <div className="arco-menu-pop arco-menu-pop-header arco-menu-overflow-sub-menu-mirror"
                                                aria-haspopup="true">
                                                <span>...</span><span className="arco-menu-icon-suffix"><svg viewBox="0 0 48 48"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"
                                                    className="arco-icon arco-icon-down" strokeWidth="4" strokeLinecap="butt"
                                                    strokeLinejoin="miter">
                                                    <path d="M39.6 17.443 24.043 33 8.487 17.443"></path>
                                                </svg></span>
                                            </div>
                                            <div className="arco-menu-item">
                                                <a aria-current="page"
                                                    href={"/?ref=" + ref}
                                                    className="router-link-active router-link-exact-active" style={{ fontWeight: "bold", color: "#1CA713" }}>Home</a></div>
                                            <div className="arco-menu-item">
                                                <a href={"/staking?ref=" + ref}
                                                    className="" style={{ fontWeight: "bold", color: "#1CA713" }}>Dapp
                                                </a>
                                            </div>
                                            <div className="arco-menu-item">
                                                <a href={"/commission?ref=" + ref}>
                                                    <div className="arco-space arco-space-horizontal arco-space-align-center">
                                                        <div className="arco-space-item" style={{ fontWeight: "bold", color: "#1CA713" }}>Commission</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat" data-v-c7418f94="">
                                <div className="arco-space arco-space-horizontal arco-space-align-center" data-v-c7418f94="">
                                    <div className="arco-space-item" style={{ marginRight: "8px" }}>
                                        <div data-v-c7418f94="" style={{ display: "flex", gap: "10px", width: "49px", height: " 49px", cursor: "pointer" }}><a
                                            target="_blank" href="https://t.me/BitGoblinOfficialCommunity"
                                            data-v-c7418f94="">
                                            <img src="data:image/png;base64,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"
                                                data-v-c7418f94="" /></a></div>
                                    </div>
                                    <div className="arco-space-item" style={{ marginRight: "8px" }}>
                                        <div data-v-c7418f94="" style={{ display: "flex", gap: "10px", width: "49px", height: "49px", cursor: "pointer" }}><a
                                            target="_blank" href="https://twitter.com/bitgoblin18" data-v-c7418f94=""><img
                                                src="data:image/png;base64,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"
                                                data-v-c7418f94="" /></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bit-buoy-mobile" data-v-c7418f94="">
                                <div className="buoy-list">
                                    <div className="buoy-item" style={{ width: "0%", paddingLeft: "0px" }} role="button" onClick={connect} >
                                        <div className="btn">{address == "0" ? "Connect Wallet" : address.substring(0, 6) + "..." + address.slice(-4)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bit-main" data-v-c7418f94="" style={{ marginBottom: "100px" }}>
                                <div className="bit-home" data-v-c7418f94="">
                                    <div className="bit-started">
                                        <div className="title"><span>High yield stablecoin staking pools</span></div>
                                        <div className="title-des"><span>Making your daily profit with</span><span style={{ color: "#85FD01" }}> BitGoblin.io</span></div>
                                        <div className="content">
                                            <div className="list">
                                                <div className="item " style={{ height: "380px" }}>
                                                    <Box>
                                                        <Box border="0.2em solid 090580" borderRadius={8} overflow="hidden">
                                                            <Box>
                                                                <Center bg='#46458C' h='100px' color='white'>
                                                                    <Image
                                                                        src="usdt.svg"
                                                                        alt="USDT"
                                                                        width={50}
                                                                        height={50}
                                                                    />
                                                                    <Text fontSize='20px' as='b' marginLeft="5px" color="#E8A9A9"> 7 Days Pool</Text>
                                                                </Center>
                                                            </Box>
                                                            <Box>

                                                            </Box>
                                                        </Box>
                                                        <Flex
                                                            display={{
                                                                md: "flex",
                                                                base: "block",
                                                            }}
                                                            justifyContent={"center"}
                                                            gap={15}

                                                        >
                                                            <Box>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="15px"
                                                                >

                                                                    <Box><Text fontSize='20px' as='b' color="#76FD01">Est.APR: 2.8%</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b' color="#76FD01">~0.4%/day</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Lock Time</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>7 days</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Your Position</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{balance0} USDT</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Your Reward</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{reward0} USDT</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Withdrawal available in</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{(remainTime0 / 3600).toFixed(2)} hours</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                    fontSize="20px"
                                                                >
                                                                    <Box><Input

                                                                        placeholder="0.0"
                                                                        type="number"
                                                                        borderRadius={10}
                                                                        width={200}
                                                                        fontWeight="bold"
                                                                        onChange={(event) => { setInput0(Number(event.target.value)) }}
                                                                    ></Input></Box>
                                                                    <Box><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { deposit(7, input0) }}
                                                                    >
                                                                        {allowance == 0 ? "Approve" : "Deposit"}</Button>
                                                                    </Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                    marginBottom="5px"
                                                                    paddingBottom="5px"
                                                                    fontSize="20px"
                                                                >
                                                                    <Box hidden={reward0 == 0}><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { claimReward(7) }}
                                                                    >
                                                                        Claim Reward</Button>
                                                                    </Box>

                                                                    <Box hidden={(remainTime0 != 0) || (balance0 == 0)}><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { Withdrawal(7) }}
                                                                    >
                                                                        Withdrawal</Button>
                                                                    </Box>
                                                                </Flex>
                                                            </Box>
                                                        </Flex>
                                                    </Box>
                                                </div>
                                                <div className="item " style={{ height: "380px" }}>
                                                    <Box>
                                                        <Box border="0.2em solid 090580" borderRadius={8} overflow="hidden">
                                                            <Box>
                                                                <Center bg='#46458C' h='100px' color='white'>
                                                                    <Image
                                                                        src="usdt.svg"
                                                                        alt="USDT"
                                                                        width={50}
                                                                        height={50}
                                                                    />
                                                                    <Text fontSize='20px' as='b' marginLeft="5px" color="#E8A9A9"> 30 Days Pool</Text>
                                                                </Center>
                                                            </Box>
                                                            <Box>

                                                            </Box>
                                                        </Box>
                                                        <Flex
                                                            display={{
                                                                md: "flex",
                                                                base: "block",
                                                            }}
                                                            justifyContent={"center"}
                                                            gap={15}

                                                        >
                                                            <Box>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="15px"
                                                                >

                                                                    <Box><Text fontSize='20px' as='b' color="#76FD01">Est.APR: 18%</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b' color="#76FD01">~0.6%/day</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Lock Time</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>30 days</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Your Position</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{balance1} USDT</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Your Reward</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{reward1} USDT</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Withdrawal available in</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{(remainTime1 / 3600).toFixed(2)} hours</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                    fontSize="20px"
                                                                >
                                                                    <Box><Input
                                                                        placeholder="0.0"
                                                                        type="number"
                                                                        borderRadius={10}
                                                                        width={200}
                                                                        fontWeight="bold"
                                                                        onChange={(event) => { setInput1(Number(event.target.value)) }}
                                                                    ></Input></Box>
                                                                    <Box><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { deposit(30, input1) }}
                                                                    >
                                                                        {allowance == 0 ? "Approve" : "Deposit"}</Button>
                                                                    </Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                    marginBottom="5px"
                                                                    paddingBottom="5px"
                                                                    fontSize="20px"
                                                                >
                                                                    <Box hidden={reward1 == 0}><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { claimReward(30) }}
                                                                    >
                                                                        Claim Reward</Button>
                                                                    </Box>

                                                                    <Box hidden={(remainTime1 != 0) || (balance1 == 0)}><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { Withdrawal(30) }}
                                                                    >
                                                                        Withdrawal</Button>
                                                                    </Box>
                                                                </Flex>
                                                            </Box>
                                                        </Flex>
                                                    </Box>
                                                </div>
                                                <div className="item " style={{ height: "380px" }}>
                                                    <Box>
                                                        <Box border="0.2em solid 090580" borderRadius={8} overflow="hidden">
                                                            <Box>
                                                                <Center bg='#46458C' h='100px' color='white'>
                                                                    <Image
                                                                        src="usdt.svg"
                                                                        alt="USDT"
                                                                        width={50}
                                                                        height={50}
                                                                    />
                                                                    <Text fontSize='20px' as='b' marginLeft="5px" color="#E8A9A9"> 90 Days Pool</Text>
                                                                </Center>
                                                            </Box>
                                                            <Box>

                                                            </Box>
                                                        </Box>
                                                        <Flex
                                                            display={{
                                                                md: "flex",
                                                                base: "block",
                                                            }}
                                                            justifyContent={"center"}
                                                            gap={15}

                                                        >
                                                            <Box>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="15px"
                                                                >

                                                                    <Box><Text fontSize='20px' as='b' color="#76FD01">Est.APR: 63%</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b' color="#76FD01">~0.7%/day</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Lock Time</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>90 days</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Your Position</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{balance2} USDT</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Your Reward</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{reward2} USDT</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Withdrawal available in</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{(remainTime2 / 3600).toFixed(2)}  hours</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                    fontSize="20px"
                                                                >
                                                                    <Box><Input
                                                                        placeholder="0.0"
                                                                        type="number"
                                                                        borderRadius={10}
                                                                        width={200}
                                                                        fontWeight="bold"
                                                                        onChange={(event) => { setInput2(Number(event.target.value)) }}
                                                                    ></Input></Box>
                                                                    <Box><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { deposit(90, input2) }}
                                                                    >
                                                                        {allowance == 0 ? "Approve" : "Deposit"}</Button>
                                                                    </Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                    marginBottom="5px"
                                                                    paddingBottom="5px"
                                                                    fontSize="20px"
                                                                >
                                                                    <Box hidden={reward2 == 0}><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { claimReward(90) }}
                                                                    >
                                                                        Claim Reward</Button>
                                                                    </Box>

                                                                    <Box hidden={(remainTime2 != 0) || (balance2 == 0)}><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { Withdrawal(90) }}
                                                                    >
                                                                        Withdrawal</Button>
                                                                    </Box>
                                                                </Flex>
                                                            </Box>
                                                        </Flex>
                                                    </Box>
                                                </div>
                                                <div className="item " style={{ height: "380px" }}>
                                                    <Box>
                                                        <Box border="0.2em solid 090580" borderRadius={8} overflow="hidden">
                                                            <Box>
                                                                <Center bg='#46458C' h='100px' color='white'>
                                                                    <Image
                                                                        src="usdt.svg"
                                                                        alt="USDT"
                                                                        width={50}
                                                                        height={50}
                                                                    />
                                                                    <Text fontSize='20px' as='b' marginLeft="5px" color="#E8A9A9"> 180 Days Pool</Text>
                                                                </Center>
                                                            </Box>
                                                            <Box>

                                                            </Box>
                                                        </Box>
                                                        <Flex
                                                            display={{
                                                                md: "flex",
                                                                base: "block",
                                                            }}
                                                            justifyContent={"center"}
                                                            gap={15}

                                                        >
                                                            <Box>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="15px"
                                                                >

                                                                    <Box><Text fontSize='20px' as='b' color="#76FD01">Est.APR: 144%</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b' color="#76FD01">~0.8%/day</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Lock Time</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>180 days</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Your Position</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{balance3} USDT</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Your Reward</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{reward3} USDT</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Withdrawal available in</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{(remainTime3 / 3600).toFixed(2)}  hours</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                    fontSize="20px"
                                                                >
                                                                    <Box><Input
                                                                        placeholder="0.0"
                                                                        type="number"
                                                                        borderRadius={10}
                                                                        width={200}
                                                                        fontWeight="bold"
                                                                        onChange={(event) => { setInput3(Number(event.target.value)) }}
                                                                    ></Input></Box>
                                                                    <Box><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { deposit(180, input3) }}
                                                                    >
                                                                        {allowance == 0 ? "Approve" : "Deposit"}</Button>
                                                                    </Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                    marginBottom="5px"
                                                                    paddingBottom="5px"
                                                                    fontSize="20px"
                                                                >
                                                                    <Box hidden={reward3 == 0}><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { claimReward(180) }}
                                                                    >
                                                                        Claim Reward</Button>
                                                                    </Box>

                                                                    <Box hidden={(remainTime3 != 0) || (balance3 == 0)}><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { Withdrawal(180) }}
                                                                    >
                                                                        Withdrawal</Button>
                                                                    </Box>
                                                                </Flex>
                                                            </Box>
                                                        </Flex>
                                                    </Box>
                                                </div>
                                                <div className="item " style={{ height: "380px" }}>
                                                    <Box>
                                                        <Box border="0.2em solid 090580" borderRadius={8} overflow="hidden">
                                                            <Box>
                                                                <Center bg='#46458C' h='100px' color='white'>
                                                                    <Image
                                                                        src="usdt.svg"
                                                                        alt="USDT"
                                                                        width={50}
                                                                        height={50}
                                                                    />
                                                                    <Text fontSize='20px' as='b' marginLeft="5px" color="#E8A9A9"> 360 Days Pool</Text>
                                                                </Center>
                                                            </Box>
                                                            <Box>

                                                            </Box>
                                                        </Box>
                                                        <Flex
                                                            display={{
                                                                md: "flex",
                                                                base: "block",
                                                            }}
                                                            justifyContent={"center"}
                                                            gap={15}

                                                        >
                                                            <Box>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="15px"
                                                                >

                                                                    <Box><Text fontSize='20px' as='b' color="#76FD01">Est.APR: 360%</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b' color="#76FD01">~1%/day</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Lock Time</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>360 days</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Your Position</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{balance4} USDT</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Your Reward</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{reward4} USDT</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                >
                                                                    <Box><Text fontSize='20px' as='b'>Withdrawal available in</Text></Box>
                                                                    <Box><Text fontSize='20px' as='b'>{(remainTime4 / 3600).toFixed(2)}  hours</Text></Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                    fontSize="20px"
                                                                >
                                                                    <Box><Input
                                                                        placeholder="0.0"
                                                                        type="number"
                                                                        borderRadius={10}
                                                                        width={200}
                                                                        fontWeight="bold"
                                                                        onChange={(event) => { setInput4(Number(event.target.value)) }}
                                                                    ></Input></Box>
                                                                    <Box><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { deposit(360, input4) }}
                                                                    >
                                                                        {allowance == 0 ? "Approve" : "Deposit"}</Button>
                                                                    </Box>
                                                                </Flex>
                                                                <Flex
                                                                    p={5}
                                                                    justifyContent={"space-between"}
                                                                    alignItems="center"
                                                                    marginTop="5px"
                                                                    marginBottom="5px"
                                                                    paddingBottom="5px"
                                                                    fontSize="20px"
                                                                >
                                                                    <Box hidden={reward4 == 0}><Button
                                                                        hidden={reward4 == 0}
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { claimReward(360) }}
                                                                    >
                                                                        Claim Reward</Button>
                                                                    </Box>

                                                                    <Box hidden={(remainTime4 != 0) || (balance4 == 0)}><Button
                                                                        borderRadius={10}
                                                                        backgroundColor="#1F7039"
                                                                        color="white"
                                                                        fontWeight="bold"
                                                                        onClick={() => { Withdrawal(360) }}
                                                                    >
                                                                        Withdrawal</Button>
                                                                    </Box>
                                                                </Flex>
                                                            </Box>
                                                        </Flex>
                                                    </Box>
                                                </div>

                                                {/* <div className="item" style={{ height: "350px" }}>
                                    <div className="tag">
                                        <img src="usdt.svg" /></div>
                                    <div className="step">Winky Pool</div>
                                    <div className="des"> USDT on wallets on the Binance Smartchain network for staking
                                        on BitGoblin. </div>
                                </div> */}


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div >
                        <div className="footer" style={{ height: "5%" }} data-v-c7418f94="">
                            <div className="dividers" data-v-c7418f94=""></div>
                            <div className="copyright" data-v-c7418f94=""> All rights reserved </div>
                        </div>
                    </div>
                </div>
            </div >
        </main >
    )
}
