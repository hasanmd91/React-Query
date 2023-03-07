import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(["data"], async () => {
    const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  });

  if (isError) {
    return <h1> sorry there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading.... </h1>;
  }

  return (
    <>
      <table>
        <tbody>
          {data?.map((r) => (
            <tr key={r.id}>
              <td> {r.id} </td>
              <td> {r.title} </td>
              <td> {r.body} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={refetch}> update data </button>
    </>
  );
};

export default Home;
