import { Box } from "@mui/material";
import Body from "./components/Body/Body";
// import Footer from "./components/Footer/Footer";
import RoastHeader from "./components/Header/RoastHeader";
import Tip from "./components/Tip/Tip";

function App() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "space-between",
                // alignItems: "center",
                backgroundImage: "url('/neon-background.jpg')",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <RoastHeader />
            <Body />
            <Box className="column-center">
                <Tip />
                {/* <Footer /> */}
            </Box>
        </Box>
    );
}

export default App;
