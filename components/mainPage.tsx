
import { ChakraProvider } from '@chakra-ui/react';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';

export function MainPage() {
    return (
        <div>
            <div className="bit-main" data-v-c7418f94="" style={{ marginBottom: "100px" }}>
                <div className="bit-home" data-v-c7418f94="">
                    <div className="banner">
                        <div className="left">
                            <div className="title" style={{ fontSize: "60px", textAlign: "left", lineHeight: "50px" }}>
                                Join the World of Decentralized Finance!
                            </div>
                            <div className="sub-title" style={{ lineHeight: "25px" }}>
                                <span>And Decentralised Smart Contracts And Earn </span><span style={{ color: "#85FD01" }}>0.4% ~ 1% </span><span>Passive Income Daily!</span>
                            </div>
                            <div className="btn"><a href="/staking" className="">
                                {/* <div className="bit-btn">Open the Dapp</div> */}
                                {/* <Image src="buttons/open the dapp.svg" width={239} height={68} alt="" unoptimized={true}></Image> */}
                                <Image src="buttons/openthedapp.gif" width={239} height={68} alt="" unoptimized={true}></Image>
                            </a></div>
                            <div className="contract-list"></div>
                        </div>
                        <div className="right"><img src="goblin.svg" style={{ width: "120%", height: "200%" }} /></div>
                    </div>
                    <div className="bit-started">
                        <div className="title"><span>How to Get Started?</span></div>
                        <div className="title-des"><span>A detailed process to start making your profits today
                            with</span><span style={{ color: "#85FD01" }}> BitGoblin.io</span></div>
                        <div className="content">
                            <div className="list">
                                <div className="item">
                                    <div className="tag">
                                        <img
                                            src="data:image/png;base64,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"
                                            alt="" /></div>
                                    <div className="step">STEP 01</div>
                                    <div className="des"> Create your Metamask wallet and add Binance Smart Chain
                                        network to your network list </div>
                                </div>
                                <div className="item">
                                    <div className="tag">
                                        <img
                                            src="data:image/png;base64,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"
                                            alt="" /></div>
                                    <div className="step">STEP 02</div>
                                    <div className="des"> USDT on wallets on the Binance Smartchain network for Staking
                                        on BitGoblin. </div>
                                </div>
                                <div className="item">
                                    <div className="tag">
                                        <img
                                            src="data:image/png;base64,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"
                                            alt="" /></div>
                                    <div className="step">STEP 03</div>
                                    <div className="des"> Open the App, then click "Connect wallet" button and connect
                                        your wallet with the platform </div>
                                </div>
                                <div className="item">
                                    <div className="tag">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACJCAYAAAD35nD3AAALWklEQVR4nO2dz28bxxXHv2+on3YokQlswFCBrFEgpZ2D6AQJCuQgKgp6KVDZ/QOsOFe7ceJbcrAsH6qbHQfxNY506smSgeTSxhZVoEirIDGFwjEroPAaqODCrrzr0D8oiZzXA0VbokhpSS53huR8TtRSu/vE/fK9N2/ejACDYQdItQGIORYk4iKEVyHzB0HUzyBr411rx3NbAYYLglt8TZB3IUJ3JGMRgI101FZpXvACiTmWIIyy5AQJJMCIBG5DM0FwWSIpiGbzwHzQgglGIJYTET04zeAEAYlA7tmiMCNFgr6SjGtBiKWxAok5CQKPG1E0BmbMMtElpKPJRt2jMQIxwggam0Dn8unolN8X9lcgh504Sb5ohKEGBpIMOuFn6PFHIJYTEd0YB/FHvlzPUCd0TqajE75cqe4rHHbiQvIM2mFI2lzYEjRcrzcRdZ18yDktJN+EEYeOWAJ8R8Sc8XouUrMHETHnCsDv13NzQ0AQfyZvv/JxTadWfYblREQ3z4EQr+WGBjUwI8WrNAw76lZzXnUCiTmWYJ4x4mhaqs5LvAvEciKix+QbLYAts3TEqyfxnKSKbp6DEUcrYFE3z8FyPM2BeRKI+JVz0YSV1oEIcdEjL3r53V0FImKOKYC1JPS+lyHwzjlIzEkI8JxvNhm0QyI/jPS+ipN9lQUSc6wNcZi8o7XZMWmtGGIE8udgxNEOWKJXVgw15T1IYX7lZsNMMmhHpVBT1oNsTL4Z2ghCqKwX2SaQUOx/78OElraDgEQo5oyVOb4VEXt4B0Yg7Yot0y8f3Hxgiwcx3qPtsUq9yBaBMERdvQOG5keWtHC8EEjMScB4j7aHgARiD573FIsXL/Km+ccAABAsjj5/venwkApjDDpCz/OQgkBMeDFshhAphhkBAILl0Z3PMLQbxTCzEWLIhBfDFlgUNEEbrYSOaoMM+iGzFBXoMZ1ihgr05OJCkDQCMZRFsIgLSDN6MVSAxKBgokHVdhj0hJmjgswWUIYKEGFQgIxADJUhEXvIqo0w6EuHagM2E+kj9L+kfmfORvHoMcP9ubm+j8oFMvRWB0bf68LoSCesgbq2K2kK3AxjfiGHqZlVXLu+rtqcXVEWYiJ9hPGTvfjweLeK22vBYjqPY6ce4+6yVG1KRZQIxBoQuD4VbguPsRv2ssTv//AYi7fzqk0pS+ACifQRfrjaZ8SxCTfDeOPYz1p6ksCf0vjJXiOOEiJhwpU/7lVtRlkCfVLWgGjrnGMnht7uwNDbyscM2whUIL8b6Qzydk3H+Mle1SZsI1CBHB3pCvJ2TcfgoZBqE7YRqEB0/AB0IhIm/OadToT36lMsDDToRcLV/eFuhnHt2zXYyxKRPsLoSFfLJ7jvvBnCqwMC9+5LzH+fQ+aJ2sproMPc/O2o59+9NL2K85efbStNf3i8Gxc/2eO3adpw4UoWS/aL4e6Pt3L44Za6Gol+aTOAqZlVnJl8Wva9z6dXAaClRbKZN17vwNo68M8lNSLR0l9PXM7u+P7n06uYX8gFZI16fh3vwIF9avIS7TxIciHnqaI4e32t6rqBm2FMzRTElUq/+EZaAwKjI51a5zhvvt6Br5PBT+5pJ5C7y95c6aMqp80r5TSFe0rML+RwZvIZxo514ayG1d4D+wUO7CPcexBs0qrXpwAgfsibZl/1+ADdDOPdsQzOTD711IsxNbOGkbEMbA3nRayB4MsE2glkMBby9PDHjnkr2b97PFN1vmIvSy1FcmB/8HmIdgIBdh+hnD7e7SkETFzOYjFdW/ZvL0t88OmTms5tFF2dRiAAgNGRTlz94qWynuT08W5c8DDEtZclzn/xrC475hdybTVaKod2SWqRwqiiH9euryN1O1cYabzX5bkae/5yfeIoMnH5GW68HfblWs2ItgIpUhBK9bPAqRpDSynzCzm4Ga56mqBV0DLE1IubYV9b+JL/aN8w05oC8XlpwaOMXqOZIGlJgfhNf7h9P6aW/Mv9roJG+9oz/wBaVCAAfO3v1LFXNCha9i8fHenypYYxdtR7m2RyYR3TsxsNTmHC6Ein54qvrmjbMFQvbobxy/ce1Z2w/vvbfk8h64NPn2BqZm3b8WoXiZU2DG0m84Txp2+236ORtGyIiYQJX9a51mT8ZI+nB/vx5NOy4gD0LNlXQ8sKBCgU2WpdSjB2tAtnT+1+rr0sn3e5VaKZS/YtLRAAOHuqp2qRnD7ejS8nvXmfxbS3B59c0H8lfzlaXiBAQST//rZ/14Rz6K0O3JgKe5oMLNJs+31US8uOYkqxBgS+nNyLs6d6sZjOI3W70NrY30ewBkI170/itYlHRbOPH7SNQIpYA+J5D6ofFNfU7pRjWAOiaWspbRFiGs3FT/YgskO19cIne7TrcfVKc1qtGYOxEH642oeht7Z6iWJO45e3UkFz+j0NsQYEbkyH4WYKG9VF+qimHpKnWb2S3kA9iG5NwI0gEiZYA6LmBqOHrs8G1UmgAklpug+XLqy43N4eZP775iwWBcWSrd8XKFCBTM+swc3o9Q3Ria/n9PsCBSoQN8OYqHMpQqty47scVlz9vjyBD3M/n17FpemdV++3G//5r1SyMNsLSuogZyafYcKndSvNzpItceHKqnbJaRFldZDzX2Rxd1lquZI+CJ5mGV/PrePG3/VuA1D+70DCewlnT/YgHuvALw4I7Okh9PaotKhxrLiMFVdi6U4ei2lZtddYcSWu/jnYUKS8krq6xliyJZbsYFvpmpHHChrTlPv2tXXg3v3Wr7D6gYpKtHKBAKjYpGvYyr0HbSuQvPL9QHXnx1tq9kzVQiAA8Je/rWNt3YikHJknrGyvVG0EsuIyvrup31yEajJPGN8oLKIpH+aWEt5L+G1Cr/3KVWEv5/HXhTxWFXpW7QRS5DUrhNcsgQP7tXFygbC6zlhxGD/eyitJSkvRViBFujsJL+1Vs4Fb0Dx+ytol68oLZbuxus5YdQFArw+uXWgv/22oGiMQw44IEDRrkzVoA8MVYCMQQwXICMSwAwzYAsSLqg0xaArjkQBgq7bDoCdEnBIENgIxlEUKcVPkEUqqNsSgKeu4SwAgDj10wIiotsegDwzYnH75YKFQxnxNsT0G3WAsAhuVVAKbMGPYAhPNABsCyWdDs2rNMWjIPFCci7GjLgPGixgAAAwkkY7awKbJOgE5pc4kg04w6Kvi6xddOJYTEb18x4xm2pvi6KX484vpfjvqgvmSEqsM2kCg5NafN2O8SNsjQQeL+QdQ2jBkvEibQ19tFgdQpqNMZsVnpomo/WDAlsBE6fHtLYfGi7QlBJ4q9R6F45VOiD28Q4DVWLMMOlA6ctlMxaZlRv5E40wy6ASDhiu9V7mrPb0vCfC2mGRoNXiiXGgpsutyNYo9nCMg4a9RBh1gIMnplyt6D8DDuhgGnWDTlthyMGAzaNc0wtuC15hjCeKbpoDWGjDBZaYjO4WWIt5W1qWjtqTcsKmPND9McJlo2Is4gGqWXv60PyXz8oQRSfPCBJfz8gR+iqa8nlP9ngqH78cFd8yZcNNcPPccVYgDqGXx9k/7U5LpiElcmwcG7FrEAdS6uj8dtRk0zIyqb2gIFmakGLWJA6glxJQgYivnABqv9zqGBsB8Sf7rlY/quYQ/+zrFHiQIoStm7kYPCjWO/IlCNbw+/NlAJr0vyVk6YkrzOsATnKUjfogD8MuDbCbmWALyHEBjvl/bUBEmmmXGx17rG15p3NaBRigNhwkuMc1K5Kb88hilNH5vyZhjAfkEQYybHMUfGLAJPCWz4jPY0YYWLoPdfPTw/biQoaMMGjIzxNXBQJLA8xIy2ShvUQ51u9NaTgQ9ubiASDDRICQsCFjU5hVaJriQsIk4JUmkwLlFZDtSjfYUlfg/BMEmerOVJqQAAAAASUVORK5CYII="
                                            alt="" /></div>
                                    <div className="step">STEP 04</div>
                                    <div className="des"> Enter the amount you want to stake and click "Deposit" button
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="tag">
                                        <img src="20230508-163226-7bfbfa04.png" alt="" />
                                    </div>
                                    <div className="step">STEP 05</div>
                                    <div className="des"> Use your referral link and share it with your friends in order
                                        to get your referral profit percentage </div>
                                </div>
                                <div className="item">
                                    <div className="tag">
                                        <img
                                            src="data:image/png;base64,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"
                                            alt="" /></div>
                                    <div className="step">STEP 06</div>
                                    <div className="des"> Make a profit every day, which you can withdraw at any time by
                                        clicking on the "CLAIM" button </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bit-road">
                <div className="tit"><span>Roadmap &amp; Milestones</span></div>
                <div className="tips"> When, how &amp; why we built <span style={{ color: "#A2F005" }}>BitGoblin.io?</span></div>
                <div className="bit-time-info">
                    <div className="bit-timeLine">
                        <div className="fit">
                            <div className="top">
                                <div className="t">2023 Q1</div>
                            </div>
                            <div className="bottom"> * BitGoblin project founded<br /> * Building Teams<br /> *
                                Solutions Architecture<br /> * Design protocol <br />
                            </div>
                        </div>
                        <div className="sec">
                            <div className="top">
                                <div className="t">2023 Q2</div>
                            </div>
                            <div className="bottom" style={{ fontSize: "18px" }}>
                                * Library Development and Testing <br />
                                * Private environment test.<br />
                                * Design and develop web page<br />
                                * Integrate with BSC network<br />
                                * Launch version 1.0. High yield stablecoin Staking on BSC network<br />
                            </div>
                        </div>
                    </div>
                    <div className="bit-timeLine">
                        <div className="fit">
                            <div className="top">
                                <div className="t">2023 Q3</div>
                            </div>

                            <div className="bottom">
                                * Integrated Polygon and TRON networks<br />
                                * Launch version 2.0. Supports Token Staking on Ethereum, Polygon, and TRON networks<br />
                                * BitGoblin token <span style={{ color: "#A2F005" }}>$BGB</span> launch<br />
                                * <span style={{ color: "#A2F005" }}>$BGB</span> airdrop for users<br />
                                * Reward and revenue sharing for <span style={{ color: "#A2F005" }}>$BGB</span> holders<br />
                            </div>
                        </div>
                        <div className="sec">
                            <div className="top">
                                <div className="t">2023 Q4</div>
                            </div>
                            <div className="bottom" style={{ fontSize: "18px" }}>
                                * BitGoblin DAO<br />
                                * Governance website for <span style={{ color: "#A2F005" }}>$BGB</span> holders <br />
                                * <span style={{ color: "#A2F005" }}>$BGB</span> buy back and burn proposal<br />
                                * Top exchange listing: Binance, Coinbase, ....<br />
                            </div>
                        </div>
                        <div className="thid">
                            <div className="top">
                                <div className="t">2024 Q1</div>
                            </div>
                            <div className="bottom">
                                * BitGoblin NFT launch<br />
                                * Develop and launch BitGoblin's mobile client( IOS &amp; Android)<br />
                                * Support more blockchain networks such as Solana, Avalanche, etc. to increase diversity and accessibility.<br /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bit-road">
                <div className="tit"><span>Partners &amp; Investors</span></div>
                {/* <div className="tips"> When, how &amp; why we built <span style={{ color: "#A2F005" }}>BitGoblin.io?</span></div> */}
                {/* <div className="bit-time-info">
                </div> */}
                <ChakraProvider>
                    <Box alignItems={"center"} justifyContent={"center"}>
                        <Flex gap={10} marginBottom={10} alignItems={"center"} justifyContent={"center"}>
                            <Box><Image src="exchange/binance-labs-803334ad.svg" width={200} height={100} alt="binance" /></Box>
                            <Box><Image src="exchange/Coinbase-logo-1.svg" width={200} height={100} alt="binance" /></Box>
                            <Box><Image src="exchange/paradigm-xyz-logo-vector-cropped.svg" width={200} height={100} alt="binance" /></Box>
                            <Box><Image src="exchange/a16z-crypto-seeklogo-cropped.svg" width={200} height={100} alt="binance" /></Box>


                        </Flex>
                        <Flex gap={10} alignItems={"center"} justifyContent={"center"}>
                            <Box><Image src="exchange/full-uniswap-logo.svg" width={200} height={100} alt="binance" /></Box>
                            <Box><Image src="exchange/chainlink-seeklogo.com-cropped.svg" width={200} height={100} alt="binance" /></Box>
                            <Box><Image src="exchange/okx-seeklogo.com.svg" width={200} height={100} alt="binance" /></Box>
                            <Box><Image src="exchange/bybit-logo.svg" width={200} height={100} alt="binance" /></Box>

                        </Flex>
                    </Box>
                </ChakraProvider>
            </div>
        </div>
    )
}
