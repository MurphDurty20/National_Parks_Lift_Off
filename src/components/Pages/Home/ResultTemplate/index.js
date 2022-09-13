import React from "react";
import Campgrounds from "../../../../campgrounds";
import Alerts from "../../../../Alerts";
import { useParams } from "react-router-dom";

const ResultTemplate = () => {
    let params = useParams();
 
    return (
    <div>
        <Campgrounds parkId={params.parkId} />
        {/* <SectionTwo parkId={params.parkId} />
        <SectionThree parkId={params.parkId} />
        <SectionFour parkId={params.parkId} /> */}

    </div>
)}
 
export default ResultTemplate;