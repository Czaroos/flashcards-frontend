import React, { createContext, useContext, useState } from "react";

import { Alert, AlertVariant } from "@components"

import { AlertsContainer } from "./style"

type Alert = {
    msg: string,
    id: number,
    visibility: boolean,
    variant?: AlertVariant
}

interface StateProps {
    alerts: Alert[],
    addAlert: (msg: string, variant: AlertVariant) => void
}

const STATE: StateProps = {
    alerts: [],
    addAlert: () => { }
}

interface Props {
    children: React.ReactNode
}

export const AlertContext = createContext(STATE);

export class AlertProvider extends React.Component<Props, typeof STATE>{
    sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    addAlert = (msg: string, variant: AlertVariant) => {
        const id = this.state.alerts.length > 0 ? this.state.alerts[this.state.alerts.length - 1].id + 1 : 0;
        this.setState({
            alerts: [...this.state.alerts, { msg: msg, id: id, visibility: false, variant: variant }]
        }, async () => {
            await this.sleep(3000);
            this.removeAlert(id);
        })
    }

    removeAlert = async (id: number) => {
        await this.sleep(1);
        this.changeVisibility(id);
        await this.sleep(1000);
        this.setState({
            alerts: this.state.alerts.filter(e => e.id !== id)
        })
    }

    changeVisibility = (id: number) => {
        let items = this.state.alerts;
        items.map(e => {
            if (e.id === id) {
                e.visibility = !e.visibility
            }
        })
        this.setState({
            alerts: [...items]
        })
    }

    readonly state: typeof STATE = {
        alerts: [],
        addAlert: this.addAlert
    }

    render() {
        return (
            <AlertContext.Provider value={this.state}>
                {this.state.alerts.length > 0 &&
                    <AlertsContainer>
                        {this.state.alerts.map((e) => {
                            return <Alert key={e.id} msg={e.msg} visibility={e.visibility} variant={e.variant} />
                        })}
                    </AlertsContainer>}
                {this.props.children}
            </AlertContext.Provider>
        )
    }
}

export const useAlert = () => {
    return useContext(AlertContext);
}