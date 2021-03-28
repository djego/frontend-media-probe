import useDomain from "./useDomain";
import { useEffect, useState } from "react";

const useHome = () => {
    const {
        data,
        isLoading,
        isError,
        isSuccess,
        run
    } = useDomain({
        initState: []
    });
    const [selected, setSelected] = useState<any>(null);
    const [today, setToday] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [typeList, setTypeList] = useState<string>("byDate");

    const onClickCard = (item: any) => {
        return () => {
            setSelected(item);
        }
    }

    const clearCard = () => setSelected(null);

    const changePeriod = (e: any) => {
        setToday(e.target?.value === "1")
    };

    const changeSearchText = (e: any) => {
        setSearchText(e.target?.value);
    }

    const changeTypeList = (e: any) => {
        setTypeList(e.target?.value);
    }

    useEffect(() => {
        run((domain) => domain.list_articles_use_case.execute(today, typeList));
        // eslint-disable-next-line
    }, [today, typeList]);

    return {
        filters: {
            changePeriod,
            changeSearchText,
            changeTypeList,
            searchText,
            typeList,
            today,
        },
        selection: {
            onClickCard,
            clear: clearCard,
            item: selected
        },
        isLoading,
        isError,
        isSuccess,
        data:  data?.filter((item: any) => {
            if (searchText === "") {
                return true;
            }
            const text = searchText.toLocaleLowerCase();
            return (
                item.author.toLocaleLowerCase().includes(text) 
                || item.title.toLocaleLowerCase().includes(text)
            );
        })
    }
}

export default useHome;