import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemActions } from "../store/itemSlice";

const FetchItems = () =>{
    const fetchStatus = useSelector(store => store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus.fetchDone) return;
    
        const controller = new AbortController();
        const signal = controller.signal;


        dispatch(fetchStatusActions.markFetchingStarted());

        fetch("http://localhost:8080/items", { signal })
          .then((res) => res.json())
          .then(({ items }) => {
            console.log("")
            dispatch(fetchStatusActions.markFetchDone());
            dispatch(fetchStatusActions.markFetchingFinished());
            dispatch(itemActions.addInitialItems(items[0]));
          });
    
        return () => {
          controller.abort();
        };
      }, [fetchStatus]);

    return <></>
}

export default FetchItems;