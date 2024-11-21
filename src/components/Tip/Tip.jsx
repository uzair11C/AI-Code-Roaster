import { Box, Typography } from "@mui/material";

const Tip = () => {
    return (
        <Box
            className="row-center"
            sx={{
                boxSizing: "border-box",
                p: "1% 0",
            }}
        >
            <Typography variant="body1" component="p">
                💡 Tip of the Day: &quot;Indentation isn&apos;t optional!&quot;
            </Typography>
        </Box>
    );
};

export default Tip;
