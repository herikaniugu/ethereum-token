import { useState, useEffect } from 'react';
import Blockchain from './ethereum.js';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { token } = await Blockchain();
      setToken(token);
    };
    init();
  }, []);

  if (typeof token === "undefined") return "Loading...";

  return (
    <div className={styles.container}>
        <div>Connected</div>
    </div>
  )
}
