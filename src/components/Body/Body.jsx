import { Box, Button, Divider, Stack, TextField } from "@mui/material";

const Body = () => {
    return (
        <Stack
            direction="row"
            className="row-center"
            divider={
                <Divider
                    variant="middle"
                    orientation="vertical"
                    component="hr"
                    flexItem
                    sx={{
                        background: "#f0f0f0",
                    }}
                />
            }
            sx={{
                minHeight: "350px",
                width: "100%",
                gap: "20px",
                boxSizing: "border-box",
                p: "0 2%",
            }}
        >
            <Box
                className="row-center"
                sx={{ width: "100%", height: "100%" }}
            ></Box>

            <Box
                className="column-center"
                sx={{ width: "100%", height: "100%", gap: "10px" }}
            >
                <TextField
                    id="codeInput"
                    variant="outlined"
                    multiline
                    rows={10}
                    maxRows={12}
                    placeholder="Paste your code here..."
                    sx={{ width: "100%" }}
                />
                <Box className="row-center" sx={{ gap: "10px" }}>
                    <Button
                        className="gradient-button"
                        variant="contained"
                        sx={{ textTransform: "none" }}
                    >
                        Upload File
                    </Button>
                    <Button
                        className="gradient-button"
                        variant="contained"
                        sx={{ textTransform: "none" }}
                    >
                        Get It Roasted
                    </Button>
                </Box>
            </Box>
        </Stack>
    );
};

export default Body;

/* Rectangle 1161 */

// position: absolute;
// width: 806px;
// height: 318px;

// background: linear-gradient(71.21deg, #1900FB -22.76%, #0070D9 87.66%);
