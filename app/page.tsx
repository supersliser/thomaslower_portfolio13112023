import Container from './components/container/container'
import Text from './components/text/text'
import TextContainer from './components/text/textContainer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Text>fdjnkjkndsfnjifdsjdfsjndfsjndsfjnkjnksdjknfdsjnks</Text>
      <TextContainer width={60}>test</TextContainer>
    </main>
  )
}
