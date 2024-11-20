import {
    Avatar,
    Box,
    Button,
    Divider,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

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
    return (
        <Stack
            direction="row"
            className="row-center"
            spacing={2}
            divider={
                <Divider
                    variant="middle"
                    orientation="vertical"
                    component="hr"
                    flexItem
                    sx={{
                        background: "#D8BFD8", // Subtle lavender divider
                    }}
                />
            }
            sx={{
                minHeight: "350px",
                width: "100%",
                gap: "20px",
                boxSizing: "border-box",
                p: "0 5%",
            }}
        >
            {/* Roast area */}
            <Box
                className="column-left"
                sx={{
                    width: "100%",
                    height: "300px",
                    border: "2px solid #D000FF",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    p: "2%",
                    overflowY: "auto",
                    background: "rgba(138, 43, 226, 0.3)",
                    boxShadow: "0px 4px 10px rgba(75, 0, 130, 0.3)", // Subtle depth
                }}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{ width: "100%", height: "250px" }}
                >
                    <Avatar
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
                            background: "rgba(138, 43, 226, 0.8)", // Richer purple
                            padding: "10px",
                            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)", // Subtle shadow
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                wordBreak: "break-word", // Handles long words
                            }}
                        >
                            this is a roast message
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            {/* Code input area */}
            <Box
                className="column-center"
                sx={{ width: "100%", height: "100%", gap: "20px" }}
            >
                <TextField
                    id="codeInput"
                    variant="outlined"
                    multiline
                    rows={9}
                    placeholder="Paste your code here..."
                    sx={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "5px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#8A2BE2", // Matches the theme
                            },
                            "&:hover fieldset": {
                                borderColor: "#D000FF", // Slight hover effect
                            },
                        },
                    }}
                />
                <Box className="row-center" sx={{ gap: "20px" }}>
                    <Button variant="contained" sx={gradientButtonStyles}>
                        Upload File
                    </Button>
                    <Button variant="contained" sx={gradientButtonStyles}>
                        Get It Roasted
                    </Button>
                </Box>
            </Box>
        </Stack>
    );
};

export default Body;
