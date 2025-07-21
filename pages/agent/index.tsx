import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const Agents: NextPage = () => {
    const device = useDeviceDetect();

    if(device === "mobile") {
        return <Stack>Top Agents Mobile</Stack>
    } else {
        return ( 
            <div style={{margin: "20px 0"}}>
                <Stack className={"container"}>
                    Top Agents
                </Stack>
            </div>
        );
    }
};

export default withLayoutBasic(Agents);