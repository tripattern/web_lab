import React from 'react';
import axios from 'axios';
import Box from "@mui/material/Box";
import {
    GetCorrectedGregorianDateAsString,
    GetDayNumberAsString
} from "../../utils/DateTimeHelpers/DateTimeHelpers";

interface IHebDate {
    hy: string,
    hm: string,
    hd: string,
}

const defaultHebDate: IHebDate = {
    hy: '',
    hm: '',
    hd: '',
};
const nowGregDate: Date = new Date();
const nowGregDay: string = GetDayNumberAsString(nowGregDate);
const nowGregDateYYYY_MM_DD: string = GetCorrectedGregorianDateAsString(nowGregDate);
const baseURL = 'https://www.hebcal.com/converter?cfg=json&date=' + nowGregDateYYYY_MM_DD + '&g2h=1&strict=1';


function HebDate() {
    const [post, setPost]: [IHebDate, (post: IHebDate) => void] = React.useState(
        defaultHebDate
    );

    React.useEffect(() => {
        axios.get<IHebDate>(baseURL,{
            headers: {
            'Content-Type': 'application/json',
            },
            timeout: 10000,})
        .then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return (
        <div>Error!</div>
    );

    console.log(post.hd);
    return (
        <div>
            <Box sx={{m: 5}}/>
            <b>Jerusalem</b>
            <Box sx={{m: 2}}/>
            <b>Day of Week: {nowGregDay}</b>
            <Box sx={{m: 2}}/>
            <b>{post.hy}-{post.hm}-{post.hd}</b>
        </div>
    );
}

export default HebDate;
