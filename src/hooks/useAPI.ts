import React,{ useState, useEffect }  from 'react'

type StatusType = "Idle" | "Pending" | "Success" | "Error";

const useAPI = <T> (asyncService: () => Promise<T>) => {

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<StatusType>("Idle");

  useEffect(() => {
    setStatus("Pending");
    setError(null);
    asyncService()
      .then((data) => {
        setData(data);
        setStatus("Success");
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, []);
  return {
    data,
    isLoading: status === "Pending",
    isSuccess: status === "Success",
    error
  }
}

export default useAPI;
