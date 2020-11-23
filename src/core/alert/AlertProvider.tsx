import React, { createContext, useContext, useState } from "react";

import { Alert } from "@components"

import { AlertsContainer } from "./style"

type Alert = {
    msg: string,
    id: number,
    variant: boolean
}

interface Props {
    alerts: Alert[],
    addAlert: (msg: string) => void
}

const STATE: Props = {
    alerts: [],
    addAlert: () => { }
}

const Context = createContext(STATE);

export const AlertProvider = (props: any) => {
    const [alerts, setAlerts] = useState<Alert[]>([]);

    // const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const addAlert = (msg: string) => {
        const id = alerts.length > 0 ? alerts[alerts.length - 1].id + 1 : 0;
        setAlerts([...alerts, { msg: msg, id: id, variant: false }]);
    }

    const removeAlert = async (id: number) => {
        // changeVisibility(id);
        // await sleep(1000);
        setAlerts(prev => prev.filter(e => e.id !== id))
    }

    // const changeVisibility = (id: number) => {
    //     let items = alerts;
    //     items.map(e => {
    //         if (e.id === id) {
    //             e.variant = !e.variant
    //         }
    //     })
    //     setAlerts([...items]);
    // }

    const state: Props = {
        alerts: alerts,
        addAlert: addAlert
    }

    return (
        <Context.Provider value={state}>
            {alerts.length > 0 &&
                <AlertsContainer>
                    {alerts.map((e) => {
                        return <Alert key={e.id} msg={e.msg + e.id} onClick={() => removeAlert(e.id)} variant={e.variant} />
                    })}
                </AlertsContainer>}
            {props.children}
        </Context.Provider>
    )
}

export const useAlert = () => {
    return useContext(Context);
}