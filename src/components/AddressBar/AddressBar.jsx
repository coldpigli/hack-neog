import { useAddress } from "contexts";  
import styles from "./AddressBar.module.css";

const AddressBar = () => {

    const {address, setAddress} =  useAddress();

  return (
    <div className={styles.addressHeader}>
        <div className={styles.urlFeed}>
            <input type="url" value={address} onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <div className={styles.AddressBar}>
            <button className={styles.fireButton}>
                Generate
            </button>
        </div>
    </div>
  )
}

export default AddressBar