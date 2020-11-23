import React, { createContext, useContext, useState } from "react";

import { Alert, AlertVariant } from "@components"

import { AlertsContainer } from "./style"

type Alert = {
    msg: string,
    id: number,
    visibility: boolean,
    variant?: AlertVariant
}

interface Props {
    alerts: Alert[],
    addAlert: (msg: string, variant: AlertVariant) => void
}

const STATE: Props = {
    alerts: [],
    addAlert: () => { }
}

const Context = createContext(STATE);

export const AlertProvider = (props: any) => {
    const [alerts, setAlerts] = useState<Alert[]>([]);

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const addAlert = (msg: string, variant: AlertVariant) => {
        const id = alerts.length > 0 ? alerts[alerts.length - 1].id + 1 : 0;
        setAlerts([...alerts, { msg: msg, id: id, visibility: false, variant: variant }]);
    }

    const removeAlert = async (id: number) => {
        await sleep(1);
        changeVisibility(id);
        await sleep(1000);
        setAlerts(prev => prev.filter(e => e.id !== id))
    }

    const changeVisibility = (id: number) => {
        let items = alerts;
        items.map(e => {
            if (e.id === id) {
                e.visibility = !e.visibility
            }
        })
        setAlerts([...items]);
    }

    const state: Props = {
        alerts: alerts,
        addAlert: addAlert
    }

    return (
        <Context.Provider value={state}>
            {alerts.length > 0 &&
                <AlertsContainer>
                    {alerts.map((e) => {
                        return <Alert key={e.id} msg={e.msg + e.id} onClick={() => removeAlert(e.id)} visibility={e.visibility} variant={e.variant} />
                    })}
                </AlertsContainer>}
            {props.children}
        </Context.Provider>
    )
}

export const useAlert = () => {
    return useContext(Context);
}