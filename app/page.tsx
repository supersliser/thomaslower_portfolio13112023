import BlockContainer from './components/container/blockContainer'
import Container from './components/container/container'
import Text from './components/text/text'
import TextContainer from './components/text/textContainer'
import Title from './components/text/title'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Text>Featured works to go here</Text>
      <BlockContainer colour={["7", "0", "26"]}>
        <Title>Thomas Lower</Title>
        <Text>Thomas Lower is a Programmer with over 7 years of experience with a host of different languages, environments and tasks</Text>
      </BlockContainer>
    </main>
  )
}
