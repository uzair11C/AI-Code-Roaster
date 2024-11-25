import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { generateTip } from "../../Gemini";
import Markdown from "react-markdown";

const Tip = () => {
    const [tip, setTip] = useState(
        "Generating wisdom... your tip of the day is on its way! 🌟"
    );

    useEffect(() => {
        const fetchTip = async () => {
            const lastUpdated = localStorage.getItem("lastUpdated");
            const today = new Date().toISOString().split("T")[0]; // Only the date part

            if (lastUpdated !== today) {
                // If it's a new day, generate a new tip
                const newTip = await generateTip(
                    "generate a concise, one-line coding tip"
                );
                localStorage.setItem("tipOfDay", newTip);
                localStorage.setItem("lastUpdated", today);
                setTip(`💡 Tip of the Day: ${newTip}`); // Update the state with the new tip
            } else {
                // Use the stored tip if it's the same day
                const storedTip = localStorage.getItem("tipOfDay");
                setTip(`💡 Tip of the Day: ${storedTip}`);
            }
        };

        fetchTip(); // Fetch the tip when the component mounts
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <Box
            className="row-center"
            sx={{
                boxSizing: "border-box",
                p: "0 1%",
            }}
        >
            <Typography variant="body1">
                <Markdown>{tip}</Markdown>
            </Typography>
        </Box>
    );
};

export default Tip;
