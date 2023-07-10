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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import '@/style/staking.css';

function CommissionComponent() {
    const [refCount1, setRefCount1] = useState(0);
    const [refCount2, setRefCount2] = useState(0);
    const [refCount3, setRefCount3] = useState(0);
    const [refCount4, setRefCount4] = useState(0);
    const [refCount5, setRefCount5] = useState(0);
    const [commission, setCommission] = useState(0);


    return (

        <div>
            <div className="bit-main" data-v-c7418f94="" style={{ marginBottom: "100px" }}>
                <div className="bit-home" data-v-c7418f94="">
                    <div className="bit-started">
                        <div className="title"><span>High yield stablecoin staking Pool</span></div>
                        <div className="title-des"><span>Making your daily profit with</span><span style={{ color: "#85FD01" }}> BitGoblin.io</span></div>
                        <div className="content">
                            <div className="list">

                                {/* <div className="item" style={{ height: "350px" }}>
                                    <div className="tag">
                                        <img src="usdt.svg" /></div>
                                    <div className="step">Winky Pool</div>
                                    <div className="des"> USDT on wallets on the Binance Smartchain network for staking
                                        on BitGoblin. </div>
                                </div> */}
                                <div className="item" style={{ height: "400px" }}>
                                    <Box>
                                        <Box borderRadius={8} overflow="hidden">
                                            <Box>
                                                <Center bg='#46458C' h='100px' color='white'>
                                                    <Text fontSize='20px' as='b' marginLeft="5px" color="#E8A9A9">Commission</Text>
                                                    {/* <InputGroup>
                                                        <InputLeftAddon children='Affiliate link' borderRadius={0} border="0.2em solid black" />
                                                        <Input
                                                            border="0.2em solid black"
                                                            borderLeft={0}
                                                            borderRadius={10}
                                                            fontSize={20}
                                                            type='tel'
                                                        />
                                                        <InputRightAddon><FontAwesomeIcon icon="fa-brands fa-react" /></InputRightAddon>
                                                    </InputGroup> */}
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
                                                        <Center bg='#46458C' >
                                                            <InputGroup>
                                                                <InputLeftAddon borderRadius={10} border="0.2em solid white" >{'Affiliate url'}</InputLeftAddon>
                                                                <Input
                                                                    border="0.2em solid "
                                                                    borderLeft={0}
                                                                    borderRadius={10}
                                                                    fontSize={20}
                                                                    type='tel'
                                                                    width={80}
                                                                />
                                                                {/* <InputRightAddon><FontAwesomeIcon icon="fa-brands fa-react" /></InputRightAddon> */}
                                                            </InputGroup>
                                                        </Center>
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

export default CommissionComponent;