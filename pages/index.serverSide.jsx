// import styles from "../styles/Home.module.css";
// import { gql } from "@apollo/client";
// import client from "./services/apolloService";

// export default function Home({ tasks }) {
//   return (
//     <div className={styles.container}>
//       {tasks.map((task) => (
//         <div key={task.title}>
//           <h1>{task.title}</h1>
//           <h3>{task.description}</h3>
//           <h3>{task.started}</h3>
//           <h3>{task.closed}</h3>
//           <h3>{task.status_id}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const { data } = await client.query({
//     query: gql`
//       query GetTasks {
//         tasks: t_task(order_by: { started: asc }) {
//           title
//           description
//           status_id
//           started
//           closed
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       tasks: data.tasks,
//     },
//   };
// }
