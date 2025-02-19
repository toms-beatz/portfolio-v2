import React from 'react';
import { AlertCircle } from "lucide-react";

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";

interface AlertstoUsersProps {
    title: string;  
    desc: string;
    type: "error" | "success" | "warning" | "info"; 
}

const AlertstoUsers: React.FC<AlertstoUsersProps> = ({ title, desc, type }) => {
    const typeColors: Record<AlertstoUsersProps["type"], string> = {
        error: "text-red-500",
        success: "text-green-500",
        warning: "text-yellow-500",
        info: "text-blue-500",
    };
    

    return (
        <Alert className="my-2 mb-8 dark:bg-dark-1">
            <div className="flex flex-row gap-6 items-center">
                <AlertCircle className={`md:h-6 md:w-6 sm:w-8 sm:h-8 w-12 h-12 lg:w-5 lg:h-5 ${typeColors[type]}`} />
                <div className="flex flex-col gap-1">
                    <AlertTitle className={typeColors[type]}>{title}</AlertTitle>
                    <AlertDescription className={typeColors[type]}>
                        {desc}
                    </AlertDescription>
                </div>
            </div>
        </Alert>
    );
};

export default AlertstoUsers;