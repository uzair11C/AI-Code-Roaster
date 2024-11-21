import {
    Avatar,
    Box,
    Button,
    Divider,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
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
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down(768));

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
                height: "300px",
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
                    minHeight: "290px",
                    border: "1px solid #D000FF",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    p: "2%",
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
                            // background: "rgba(138, 43, 226, 0.8)", // Richer purple
                            padding: "10px",
                            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                            overflowY: "auto",
                            overflowX: "hidden",
                            maxHeight: "250px",
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
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit aliquam fusce nisi, facilisi gravida iaculis
                            pulvinar interdum accumsan magnis a. Fringilla
                            viverra sociosqu sodales aenean ullamcorper tortor
                            at vel, dictum congue natoque porta fermentum nibh
                            placerat curabitur dui, potenti litora ornare
                            laoreet facilisis felis risus. Nunc rutrum aliquam
                            lobortis felis posuere suscipit laoreet, pharetra
                            semper ante lacus velit est vestibulum, varius
                            interdum mattis urna vulputate curae. Torquent
                            lobortis quis himenaeos ad at pretium mattis
                            pellentesque vitae, gravida posuere eros phasellus
                            egestas risus volutpat feugiat nibh etiam, montes
                            vivamus quam curabitur cras faucibus vehicula
                            nullam. Quam primis magnis fermentum aenean integer
                            vehicula praesent at accumsan, proin cum habitasse
                            elementum sem a quis magna. A sollicitudin ligula
                            posuere nostra litora conubia porta orci mi massa
                            rhoncus, risus hac lobortis cursus tincidunt
                            interdum nascetur faucibus nisi accumsan cubilia,
                            convallis venenatis tempor sodales nibh dictum lacus
                            aenean diam taciti. Orci tellus condimentum morbi id
                            aenean interdum mi vivamus nisi, inceptos cubilia
                            nullam nibh enim parturient placerat integer
                            posuere, bibendum mauris libero quisque senectus
                            diam magnis porta. Aliquam urna condimentum sapien
                            netus pharetra dictum id tristique leo cras
                            imperdiet, integer egestas habitasse venenatis
                            phasellus nostra sodales natoque montes turpis.
                            Euismod montes in mauris fringilla diam hac
                            venenatis habitant imperdiet, feugiat donec litora
                            inceptos curae netus quisque at erat interdum, per
                            mattis dignissim habitasse facilisi dictumst vivamus
                            eu. Lectus ultrices libero porttitor commodo eu diam
                            eget suspendisse gravida ante, et litora arcu
                            volutpat rhoncus sociis lacinia ultricies fermentum
                            primis faucibus, bibendum dapibus venenatis
                            sollicitudin urna inceptos nibh hendrerit vel.
                        </Typography>
                    </Box>
                </Stack>
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
                    placeholder="Paste your code here..."
                    sx={{
                        width: "100%",
                        background: "#1D1D21",
                        borderRadius: "5px",
                        "& .MuiInputBase-input": {
                            color: "#FFFFFF", // Typed text color
                        },
                        "& .MuiInputBase-input::placeholder": {
                            color: "rgba(255, 255, 255, 0.8)", // Prominent placeholder color
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
