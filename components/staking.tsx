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
import Image from 'next/image';
import '@/style/staking.css';

function StakingComponent() {
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


    return (
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
                                                    <Text fontSize='20px' as='b' marginLeft="5px" color="#E8A9A9"> 7 Days Pools</Text>
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
                                                        inputMode="decimal"
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
                                                    <Text fontSize='20px' as='b' marginLeft="5px" color="#E8A9A9"> 30 Days Pools</Text>
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
                                                        inputMode="decimal"
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
                                                    <Text fontSize='20px' as='b' marginLeft="5px" color="#E8A9A9"> 90 Days Pools</Text>
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
                                                        inputMode="decimal"
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
                                                    <Text fontSize='20px' as='b' marginLeft="5px" color="#E8A9A9"> 180 Days Pools</Text>
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
                                                        inputMode="decimal"
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
                                                    <Text fontSize='20px' as='b' marginLeft="5px" color="#E8A9A9"> 360 Days Pools</Text>
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
                                                        inputMode="decimal"
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

                                <div className="item" style={{ height: "380px" }}>
                                    <Box>
                                        <Box border="0.2em solid 090580" borderRadius={8} overflow="hidden">
                                            <Box>
                                                <Center bg='#46458C' h='100px' color='white'>
                                                    <Text fontSize='20px' as='b' marginLeft="5px" color="#E8A9A9">Commission</Text>
                                                </Center>
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
                                                    marginTop="5px"
                                                >
                                                    <Box><Text fontSize='20px' as='b'>F1 Commission</Text></Box>
                                                    <Box><Text fontSize='20px' as='b'>5%</Text></Box>
                                                </Flex>
                                                <Flex
                                                    p={5}
                                                    justifyContent={"space-between"}
                                                    alignItems="center"
                                                    marginTop="5px"
                                                >
                                                    <Box><Text fontSize='20px' as='b'>F2 Commission</Text></Box>
                                                    <Box><Text fontSize='20px' as='b'>4%</Text></Box>
                                                </Flex>
                                                <Flex
                                                    p={5}
                                                    justifyContent={"space-between"}
                                                    alignItems="center"
                                                    marginTop="5px"
                                                >
                                                    <Box><Text fontSize='20px' as='b'>F3 Commission</Text></Box>
                                                    <Box><Text fontSize='20px' as='b'>3%</Text></Box>
                                                </Flex>
                                                <Flex
                                                    p={5}
                                                    justifyContent={"space-between"}
                                                    alignItems="center"
                                                    marginTop="5px"
                                                >
                                                    <Box><Text fontSize='20px' as='b'>F4 Commission</Text></Box>
                                                    <Box><Text fontSize='20px' as='b'>2%</Text></Box>
                                                </Flex>
                                                <Flex
                                                    p={5}
                                                    justifyContent={"space-between"}
                                                    alignItems="center"
                                                    marginTop="5px"
                                                >
                                                    <Box><Text fontSize='20px' as='b'>F5 Commission</Text></Box>
                                                    <Box><Text fontSize='20px' as='b'>1%</Text></Box>
                                                </Flex>
                                                <Flex
                                                    p={5}
                                                    justifyContent={"space-between"}
                                                    alignItems="center"
                                                    marginTop="5px"
                                                >
                                                    <Box><Text fontSize='20px' as='b'>Your Commission</Text></Box>
                                                    <Box><Text fontSize='20px' as='b'>{commission} USDT</Text></Box>
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
                                                    <Box>

                                                    </Box>
                                                </Flex>
                                                <Center><Button
                                                    borderRadius={10}
                                                    backgroundColor="#1F7039"
                                                    fontSize={20}
                                                    color="white"
                                                    fontWeight="bold"
                                                    onClick={() => { console.log("ABC") }}
                                                >
                                                    Claim Reward</Button>
                                                </Center>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default StakingComponent;