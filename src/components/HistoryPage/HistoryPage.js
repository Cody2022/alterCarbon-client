import React, { useEffect } from "react";
import History from "../History/History"

export default function HistoryPage() {
    useEffect(() => {
        document.title = "History";
      }, []);
    
    return <History/>
}