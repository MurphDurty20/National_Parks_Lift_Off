import React from "react";
import Campgrounds from "../../../../campgrounds";
import Alerts from "../../../../Alerts";
import { useParams } from "react-router-dom";
import './index.css';
import OnePark from "../../../../OnePark";

const ResultTemplate = () => {
    let params = useParams();
 
    return (
    <div>
        <OnePark parkId={params.parkId} />
        <h2 className='feeTitle'>Fees</h2>
        <h2 className='HoO'>Hours of Operation</h2>
        <Campgrounds parkId={params.parkId} />

        {/* <SectionThree parkId={params.parkId} />
        <SectionFour parkId={params.parkId} /> */}
    </div>
)}
 
export default ResultTemplate;