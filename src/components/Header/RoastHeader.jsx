import { Box, Typography } from "@mui/material";

const RoastHeader = () => {
    return (
        <Box className="column-center header-footer-pad">
            <Typography
                variant="h4"
                component="h2"
                fontWeight={700}
                textAlign="center"
            >
                🔥 Code Roast Central 🌟 🍠 🔥 💀
            </Typography>
            <Typography
                variant="h5"
                component="h3"
                fontWeight={500}
                textAlign="center"
            >
                &quot;Where your code gets grilled to perfection (or charred to
                ashes)!&quot;
            </Typography>
        </Box>
    );
};

export default RoastHeader;
