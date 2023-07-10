import {
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Box,
    Button,
    Center,
    Divider,
    Flex,
    FormControl,
    FormErrorMessage,
    Input,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
    InputRightAddon,
    Link,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Skeleton,
    Progress,
    Text,
    useDisclosure,
    Wrap,
    background,
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';
import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import '@/style/staking.css';
import { ethers, BigNumber } from "ethers";

function StakingComponent() {
    const [allowance, setAllowance] = useState(0);

    const [reward0, setReward0] = useState(0);
    const [reward1, setReward1] = useState(0);
    const [reward2, setReward2] = useState(0);
    const [reward3, setReward3] = useState(0);
    const [reward4, setReward4] = useState(0);
    const [reward5, setReward5] = useState(0);

    const [balance0, setBalance0] = useState(0);
    const [balance1, setBalance1] = useState(0);
    const [balance2, setBalance2] = useState(0);
    const [balance3, setBalance3] = useState(0);
    const [balance4, setBalance4] = useState(0);
    const [balance5, setBalance5] = useState(0);

    const [remainTime0, setremainTime0] = useState(0);
    const [remainTime1, setremainTime1] = useState(0);
    const [remainTime2, setremainTime2] = useState(0);
    const [remainTime3, setremainTime3] = useState(0);
    const [remainTime4, setremainTime4] = useState(0);
    const [remainTime5, setremainTime5] = useState(0);

    const [commission, setCommission] = useState(0);

    async function changeNetwork() {
        window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
                chainId: "0x34",
                rpcUrls: ["https://rpc1.coinex.net/"],
                chainName: "Coinex testnet",
                nativeCurrency: {
                    name: "CET",
                    symbol: "CET",
                    decimals: 18
                },
                blockExplorerUrls: ["https://testnet.coinex.net/"]
            }]
        });
    }

    async function approve(signer: any) {
        const _provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract_instance = new ethers.Contract(USDTAdress, contract_artifacts, signer);
        // await contract_instance.increaseAllowance("0xCCbbbfA08E06136EEfCD887c7eF8381cf3c04F51", "1000000000000000000000000000");
        await contract_instance.increaseAllowance("0x6D936bd62aF1437C63dB22349Ab9bC4A4701c5D7", "1000000000000000000000000000");
    }

    async function connect() {
        if (typeof (window as any).ethereum == "undefined") {
            alert("Please install MetaMask wallet!");
        }
        //@ts-ignore
        await ethereum.request({ method: "eth_requestAccounts" })
        const _provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const chainInfo = await _provider.getNetwork();
        if (chainInfo["chainId"] != 56) {
            await changeNetwork();
        }
        const _signer = await _provider.getSigner();
        const addr = await _signer.getAddress();

        console.log(addr);
        // approve(_signer);
    }



    return (

        <div>
            <div className="bit-main" data-v-c7418f94="" style={{ marginBottom: "100px" }}>
                <div className="bit-home" data-v-c7418f94="">
                    <div className="bit-started">
                        <div className="title"><span>High yield stablecoin staking Pool</span></div>
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
                                                    <Box><Text fontSize='20px' as='b'>{remainTime0} hours</Text></Box>
                                                </Flex>
                                                <Flex
                                                    p={5}
                                                    justifyContent={"space-between"}
                                                    alignItems="center"
                                                    marginTop="5px"
                                                    fontSize="20px"
                                                >
                                                    <Box><Input
                                                        type="number"
                                                        borderRadius={10}
                                                        width={200}
                                                        fontWeight="bold"
                                                    ></Input></Box>
                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={connect}
                                                    >
                                                        Deposit</Button>
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
                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={connect}
                                                    >
                                                        Claim Reward</Button>
                                                    </Box>

                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={connect}
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
                                                    <Box><Text fontSize='20px' as='b'>{remainTime1} hours</Text></Box>
                                                </Flex>
                                                <Flex
                                                    p={5}
                                                    justifyContent={"space-between"}
                                                    alignItems="center"
                                                    marginTop="5px"
                                                    fontSize="20px"
                                                >
                                                    <Box><Input
                                                        type="number"
                                                        borderRadius={10}
                                                        width={200}
                                                        fontWeight="bold"
                                                    ></Input></Box>
                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={() => { console.log("ABC") }}
                                                    >
                                                        Deposit</Button>
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
                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={() => { console.log("ABC") }}
                                                    >
                                                        Claim Reward</Button>
                                                    </Box>

                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={() => { console.log("ABC") }}
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
                                                    <Box><Text fontSize='20px' as='b'>{remainTime2} hours</Text></Box>
                                                </Flex>
                                                <Flex
                                                    p={5}
                                                    justifyContent={"space-between"}
                                                    alignItems="center"
                                                    marginTop="5px"
                                                    fontSize="20px"
                                                >
                                                    <Box><Input
                                                        type="number"
                                                        borderRadius={10}
                                                        width={200}
                                                        fontWeight="bold"
                                                    ></Input></Box>
                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={() => { console.log("ABC") }}
                                                    >
                                                        Deposit</Button>
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
                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={() => { console.log("ABC") }}
                                                    >
                                                        Claim Reward</Button>
                                                    </Box>

                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={() => { console.log("ABC") }}
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
                                                    <Box><Text fontSize='20px' as='b'>{remainTime3} hours</Text></Box>
                                                </Flex>
                                                <Flex
                                                    p={5}
                                                    justifyContent={"space-between"}
                                                    alignItems="center"
                                                    marginTop="5px"
                                                    fontSize="20px"
                                                >
                                                    <Box><Input
                                                        type="number"
                                                        borderRadius={10}
                                                        width={200}
                                                        fontWeight="bold"
                                                    ></Input></Box>
                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={() => { console.log("ABC") }}
                                                    >
                                                        Deposit</Button>
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
                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={() => { console.log("ABC") }}
                                                    >
                                                        Claim Reward</Button>
                                                    </Box>

                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={() => { console.log("ABC") }}
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
                                                    <Box><Text fontSize='20px' as='b'>{remainTime4} hours</Text></Box>
                                                </Flex>
                                                <Flex
                                                    p={5}
                                                    justifyContent={"space-between"}
                                                    alignItems="center"
                                                    marginTop="5px"
                                                    fontSize="20px"
                                                >
                                                    <Box><Input
                                                        type="number"
                                                        borderRadius={10}
                                                        width={200}
                                                        fontWeight="bold"
                                                    ></Input></Box>
                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={() => { console.log("ABC") }}
                                                    >
                                                        Deposit</Button>
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
                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={() => { console.log("ABC") }}
                                                    >
                                                        Claim Reward</Button>
                                                    </Box>

                                                    <Box><Button
                                                        borderRadius={10}
                                                        backgroundColor="#1F7039"
                                                        color="white"
                                                        fontWeight="bold"
                                                        onClick={() => { console.log("ABC") }}
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
    )
}

export default StakingComponent;