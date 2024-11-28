import { Box } from "@mui/material";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import RoastHeader from "./components/Header/RoastHeader";
import Tip from "./components/Tip/Tip";

function App() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                position: "relative",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: "url('/neon-background.jpg')",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transform: "scaleX(-1)", // Flip only the background
                    zIndex: -1, // Place behind the content
                },
            }}
        >
            <RoastHeader />
            <Body />
            <Box className="column-center" sx={{ width: "100%" }}>
                <Tip />
                <Footer />
            </Box>
        </Box>
    );
}

export default App;
