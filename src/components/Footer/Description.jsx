import { Avatar, Box, Stack, Typography, Link } from "@mui/material";
import {
    LocationOn,
    LinkedIn,
    GitHub,
    MailOutlineRounded,
} from "@mui/icons-material";

const Description = () => {
    return (
        <Box
            className="column-xStart-yCenter"
            sx={{
                background: "#232324",
                width: "30vw",
                height: " 250px",
                boxSizing: "border-box",
                p: "5%",
                borderRadius: "5px",
                gap: "10px",
            }}
        >
            <Stack direction="row" spacing={2}>
                <Avatar
                    src="/uzair.jpg"
                    alt="Uzair"
                    sx={{
                        width: 80,
                        height: 80,
                        cursor: "pointer",
                    }}
                />
                <Stack direction="column">
                    <Typography variant="h5" fontWeight={700}>
                        Uzair Abdullah
                    </Typography>
                    <Typography variant="body1">-Frontend developer</Typography>
                </Stack>
            </Stack>

            <Stack direction="column">
                <Typography variant="subtitle2" className="row-xStart-yCenter">
                    <LocationOn sx={{ fontSize: 18, marginRight: "5px" }} />
                    Rawalpindi, Punjab, Pakistan
                </Typography>
                <Typography variant="subtitle2" className="row-xStart-yCenter">
                    <LinkedIn sx={{ fontSize: 18, marginRight: "5px" }} />
                    <Link
                        href="https://www.linkedin.com/in/uzair-abdullah07/"
                        target="_blank"
                        sx={{ color: "#9500ff" }}
                    >
                        www.linkedin.com/in/uzair-abdullah07
                    </Link>
                </Typography>
                <Typography variant="subtitle2" className="row-xStart-yCenter">
                    <GitHub sx={{ fontSize: 18, marginRight: "5px" }} />
                    <Link
                        href="https://github.com/uzair11C"
                        target="_blank"
                        sx={{ color: "#9500ff" }}
                    >
                        github.com/uzair11C
                    </Link>
                </Typography>
                <Typography variant="subtitle2" className="row-xStart-yCenter">
                    <MailOutlineRounded
                        sx={{ fontSize: 18, marginRight: "5px" }}
                    />
                    <Link
                        href="mailto:uzairabdullah973@gmail.com"
                        target="_blank"
                        sx={{ color: "#9500ff" }}
                    >
                        uzairabdullah973@gmail.com
                    </Link>
                </Typography>
                <Typography variant="subtitle2" className="row-xStart-yCenter">
                    🤝 Open to freelance and collaboration opportunities.
                </Typography>
            </Stack>
        </Box>
    );
};

export default Description;

// https://www.linkedin.com/in/uzair-abdullah07/
