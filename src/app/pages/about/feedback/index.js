import React from 'react'
import { useSubheader } from "../../../../_metronic/layout";
import Feedback from './../../../modules/About/feedback_insert';
import FeedBackList from  '../../../modules/About/feedback_select_list';


export default function Index() {

    const suhbeader = useSubheader();
    suhbeader.setTitle("صدای مشتری");

    return (
        <div className="bg-white rounded-lg p-10" >
            <Feedback />
            <FeedBackList />
        </div>
    )
}
