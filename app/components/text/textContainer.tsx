import Container from "../container/container";
import Text from "./text";

export default function TextContainer({children, width} : {children: string, width: number}) {
    return (
        <Container width={width}>
            <Text>{children}</Text>
        </Container>
    )
}