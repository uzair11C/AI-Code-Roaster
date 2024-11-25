import { Avatar, Box, Typography } from "@mui/material";
import { useState } from "react";
import Description from "./Description";
import { Transition } from "react-transition-group";

const Footer = () => {
    const [hover, setHover] = useState(false);

    return (
        <Box
            className="row-xStart-yCenter"
            sx={{
                p: "1% 3%",
                width: "100%",
                boxSizing: "border-box",
                gap: "10px",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Box
                    sx={{
                        position: "relative",
                    }}
                >
                    <Avatar
                        src="/uzair.jpg"
                        alt="Uzair"
                        sx={{
                            width: 40,
                            height: 40,
                            cursor: "pointer",
                        }}
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "101%",
                            opacity: hover ? 1 : 0,
                            transform: hover
                                ? "translateY(0)"
                                : "translateY(-10px)",
                        }}
                    >
                        <Transition
                            in={hover}
                            timeout={100} // 300ms for transition duration
                            unmountOnExit
                        >
                            {(state) => (
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: "100%",
                                        opacity: state === "entered" ? 1 : 0,
                                        transform:
                                            state === "entered"
                                                ? "translateY(0)"
                                                : "translateY(-10px)",
                                        transition:
                                            "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                                    }}
                                >
                                    {state === "entered" && <Description />}
                                </Box>
                            )}
                        </Transition>
                    </Box>
                </Box>
            </Box>
            <Typography variant="body2">Created by Uzair Abdullah</Typography>

            <Typography
                variant="body1"
                className="row-center"
                sx={{ gap: "5px" }}
            >
                Powered by{" "}
                <Typography
                    variant="body1"
                    fontWeight={700}
                    className="row-center"
                    sx={{
                        background: `linear-gradient(74deg, #4285f4 0, #9b72cb 9%, 
                        #d96570 20%, #d96570 24%, 
                        #9b72cb 35%, #4285f4 44%, #9b72cb 50%, #d96570 56%,
                        #1e1f20, 75%, #1e1f20 100%)`,
                        backgroundSize: "400% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        gap: "2px",
                    }}
                >
                    <img
                        src="/gemini_favicon.png"
                        alt="geminiFavicon"
                        width="22px"
                    />{" "}
                    Gemini 1.5 Flash
                </Typography>
            </Typography>
        </Box>
    );
};

export default Footer;
