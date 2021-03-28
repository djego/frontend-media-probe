import { useEffect, useState } from 'react';
import domain from '../domain';

export type StatusType = "idle" | "pending" | "success" | "error"; 
export type DomainType = typeof domain;
export type RunType = (domain: DomainType) => Promise<any>;

interface IUseDomain {
    initRun? : RunType;
    initState?: any;
}

const useDomain = ({initRun, initState = null}: IUseDomain = {}) => {
    const [data, setData] = useState(initState);
    const [status, setStatus] = useState<StatusType>("idle")
    
    const executeUseCase = async (run: RunType) => {
        let response = null;
        setStatus("pending");
        try {
            response = await run(domain);
            if (response) {
                setData(response);
                setStatus("success");
            } else {
                setData(null);
                setStatus("error");
            }
        } catch (e) {
            setData(null);
            setStatus("error");
        }
        return { data }
    }

    useEffect(() => {
        if (initRun) executeUseCase(initRun);
        // eslint-disable-next-line
    }, []);

    return {
        isIdle: status === "idle",
        isError: status === "error",
        isSuccess: status === "success",
        isLoading: status === "pending",
        data,
        run: executeUseCase
    }

}

export default useDomain;