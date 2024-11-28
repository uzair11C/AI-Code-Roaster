import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    Divider,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useState } from "react";
import { generateRoast } from "../../Gemini";
import Markdown from "react-markdown";

const gradientButtonStyles = {
    background:
        "linear-gradient(90deg, #D000FF, #8A2BE2)" /* Change to preferred colors */,
    border: "none",
    padding: "10px 20px",
    color: "white",
    borderRadius: "5px",
    textTransform: "none",
    transition: "box-shadow 0.3s ease-in-out",
    ":hover": {
        boxShadow: "0px 0px 15px 4px rgba(208,0,255,0.64)",
    },
};

const Body = () => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down(768));

    const loadingMessages = [
        "Summoning the roast master... 🔥",
        "Brewing some scalding comebacks... ☕",
        "Sharpening the sarcasm swords... 🗡️",
        "Preparing the inferno... 🌋",
        "Judging your code silently... 🤨",
        "Consulting the Book of Roast... 📖",
        "Roasting bits and bytes to perfection... 💻🔥",
        "Downloading some spicy burns... 🌶️",
        "Your code is in the hot seat... 🪑🔥",
        "Heating up the feedback furnace... 🛠️🔥",
        "Deciphering your disasterpiece... 💀📜",
        "Adding extra spice to the roast... 🧂🔥",
        "Unleashing the burninator... 🐉🔥",
        "Cooking up some spicy feedback... 🍳🔥",
        "Your code is in the roast zone... 🚀🔥",
    ];

    const [open, setOpen] = useState(false);
    const [inputCode, setInputCode] = useState("");
    const [roast, setRoast] = useState(`Don't worry, I've seen worse. Maybe. 
            Paste your code, and let's find out! 😈`);
    const [loaderMessage, setLoaderMessage] = useState("");

    const getRandomLoaderMessage = () => {
        const randomIndex = Math.floor(Math.random() * loadingMessages.length);
        setLoaderMessage(loadingMessages[randomIndex]);
    };

    const getRoast = async () => {
        if (!inputCode) {
            console.log("Input code is null or empty.");
            return;
        }
        getRandomLoaderMessage();
        setOpen(true);

        setRoast(
            await generateRoast(inputCode).catch((error) => {
                console.log("error: ", error);
                return "❌ Oops! Something went wrong with the roast.";
            })
        );

        setOpen(false);
    };

    return (
        <Stack
            direction={isMobile ? "column" : "row"}
            className="row-center"
            spacing={2}
            divider={
                isMobile ? (
                    <Divider
                        variant="middle"
                        orientation="horizontal"
                        component="hr"
                        flexItem
                        sx={{
                            background: "#D8BFD8", // Subtle lavender divider
                        }}
                    />
                ) : (
                    <Divider
                        variant="middle"
                        orientation="vertical"
                        component="hr"
                        flexItem
                        sx={{
                            background: "#D8BFD8", // Subtle lavender divider
                        }}
                    />
                )
            }
            sx={{
                // height: "320px",
                width: "100%",
                gap: "20px",
                boxSizing: "border-box",
                p: "0 3%",
            }}
        >
            {/* Roast area */}
            <Box
                className="column-left"
                sx={{
                    width: "100%",
                    minHeight: "320px",
                    border: "1px solid #D000FF",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    p: "2%",
                    background: "rgba(138, 43, 226, 0.3)",
                    boxShadow: "0px 4px 10px rgba(75, 0, 130, 0.3)", // Subtle depth
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{ width: "100%", maxHeight: "250px" }}
                >
                    <Avatar
                        src="/avatar.png"
                        alt="AI"
                        sx={{
                            width: 50,
                            height: 50,
                            background:
                                "linear-gradient(135deg, #D000FF, #8A2BE2)",
                        }}
                    />
                    <Box
                        id="roast"
                        sx={{
                            flex: 1,
                            borderRadius: "5px",
                            // background: "rgba(138, 43, 226, 0.8)", // Richer purple
                            padding: "10px",
                            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                            overflowY: "auto",
                            overflowX: "hidden",
                            minHeight: "100px",
                            maxHeight: "270px",
                            // scrollbarWidth: "thin",
                            "&::-webkit-scrollbar": {
                                width: "5px", // For Chrome, Safari, and Opera
                            },
                            "&::-webkit-scrollbar-track": {
                                background: "transparent", // Track background
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#5040F9", // Thumb color
                                borderRadius: "10px", // Optional for rounded thumb
                            },
                            "&::-webkit-scrollbar-thumb:hover": {
                                background: "#0A00CC", // Thumb hover color
                            },
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                wordBreak: "break-word", // Handles long words
                            }}
                        >
                            <Markdown>{roast}</Markdown>
                        </Typography>
                    </Box>
                </Stack>

                {open && (
                    <Box
                        className="row-center"
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0,0,0, 0.7)",
                            gap: "10px",
                        }}
                    >
                        <CircularProgress color="secondary" size={50} />
                        <Typography variant="subtitle2">
                            {loaderMessage}
                        </Typography>
                    </Box>
                )}
            </Box>

            {/* Code input area */}
            <Box
                className="column-center"
                sx={{ width: "100%", height: "100%", gap: "15px" }}
            >
                <TextField
                    id="codeInput"
                    variant="outlined"
                    multiline
                    rows={9}
                    placeholder="Drop your disasterpiece here and let me roast it to perfection... 🔥 💀"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    sx={{
                        width: "100%",
                        background: "#1D1D21",
                        borderRadius: "5px",
                        "& .MuiInputBase-input": {
                            color: "#FFFFFF", // Typed text color
                            fontFamily: "monospace", // Code font
                            whiteSpace: "pre-wrap", // Preserve whitespace
                            overflowWrap: "break-word", // Wrap long lines
                        },
                        "& .MuiInputBase-input::placeholder": {
                            color: "rgba(255, 255, 255, 0.8)", // Prominent placeholder color
                            fontFamily: "monospace", // Code font
                        },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#8A2BE2", // Matches the theme
                            },
                            "&:hover fieldset": {
                                borderColor: "#D000FF", // Slight hover effect
                                boxShadow:
                                    "0px 0px 15px 4px rgba(208,0,255,0.64)",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#D000FF", // Focus border color
                                boxShadow:
                                    "0px 0px 15px 4px rgba(208,0,255,0.64)", // Optional glow on focus
                            },
                        },
                    }}
                />
                <Box className="row-center" sx={{ gap: "20px" }}>
                    {/* <Button variant="contained" sx={gradientButtonStyles}>
                        Upload File
                    </Button> */}
                    <Button
                        variant="contained"
                        sx={gradientButtonStyles}
                        onClick={getRoast}
                    >
                        Get It Roasted
                    </Button>
                </Box>
            </Box>
        </Stack>
    );
};

export default Body;
