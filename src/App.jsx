import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <div>
              <Heading as="h1">The Wild Oasis</Heading>
              <Button variation="primary" size="medium">
                Check In
              </Button>
              <Button>Check Out</Button>
            </div>
          </Row>

          <Row type="vertical">
            <div>
              <Heading as="h2">Check In and Out</Heading>
              <Input as="number" />
              <Input as="number" />
            </div>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
