import styles from "../styles/Home.module.css";
import ClientSideRendering from "../src/components/ClientSideRendering";
import Tasks from "../src/components/Tasks";

export default function Home() {
  return (
    <div className={styles.container}>
      <ClientSideRendering>
        <Tasks />
      </ClientSideRendering>
    </div>
  );
}
