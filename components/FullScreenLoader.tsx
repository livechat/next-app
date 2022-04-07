import { Loader } from '@livechat/design-system'
import styles from 'styles/full-screen-loader.module.css'

function FullScreenLoader() {
  return (
    <div className={styles.container}>
      <Loader size="large" />
    </div>
  )
}

export default FullScreenLoader
