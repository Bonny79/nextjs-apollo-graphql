import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

const getTasks = gql`
  query GetTasks {
    tasks: t_task(order_by: { started: asc }) {
      title
      description
      status_id
      started
      closed
    }
  }
`;

export default function Tasks() {
  const { data, loading, error } = useQuery(getTasks);
  const [loader, setloader] = useState("Loading.");

  if (loading) {
    return (
      <h2>
        {setTimeout(() => {
          if (loader === "Loading...") setloader("Loading");
          setloader(loader + ".");
        }, 100)}
      </h2>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  const { tasks } = data;

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.title}>
          {tasks.map((task) => (
            <div key={task.title}>
              <h1>{task.title}</h1>
              <h3>{task.description}</h3>
              <h3>{task.started}</h3>
              <h3>{task.closed}</h3>
              <h3>{task.status_id}</h3>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
