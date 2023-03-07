import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Contact = () => {
  const { data, isLoading, isError, refetch } = useQuery(["data"], () => {
    return Axios.get("https://jsonplaceholder.typicode.com/posts").then(
      (res) => res.data
    );
  });

  if (isLoading) {
    return <div>...is Loading </div>;
  }

  if (isError) {
    return <div> Something is error</div>;
  }

  return (
    <div>
      <table>
        {data.map((r) => (
          <tr>
            <td> {r.title} </td>
            <td> {r.id} </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Contact;
