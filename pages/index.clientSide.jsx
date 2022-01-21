import styles from "../styles/Home.module.css";
import ClientOnly from "../components/ClientOnly";
import Tasks from "../components/Tasks";

export default function Home() {
  return (
    <div className={styles.container}>
      <ClientOnly>
        <Tasks />
      </ClientOnly>
    </div>
  );
}
