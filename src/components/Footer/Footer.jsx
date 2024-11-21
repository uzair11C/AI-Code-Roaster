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
        </Box>
    );
};

export default Footer;
