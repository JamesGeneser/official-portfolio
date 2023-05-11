import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Project() {
  return (
    <>
      <Container className="cardStack">
        <Row className="portfolioCard">
          <h2>Discovering Denver</h2>
          <Col>
            <img
              className="portfolioImg"
              src={require("../images/DiscoveringDenver.png")}
            ></img>
          </Col>
          <Col className="d-flex align-items-end">
            Explore a variety of activities around Denver. Read and write
            reviews and ratings!
          </Col>
        </Row>
        {/* <Card className="portfolioCard">
          <Card.Title>Discovering Denver</Card.Title>
          <Card.Img
            variant="top"
            src={require("../images/DiscoveringDenver.png")}
            alt="main page of Discovering Denver, hero image of concert"
          />
          <Card.Body>
            <Card.Text>
              Explore a variety of activities around Denver. Read and write
              reviews and ratings!
            </Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Link
              target="_blank"
              href="https://pure-refuge-38397.herokuapp.com/"
            >
              Go to Project page
            </Card.Link>
          </Card.Body>
        </Card>
        <Card className="portfolioCard">
          <Card.Img
            alt="homepage of Digital Librarian"
            variant="top"
            src={require("../images/Librarian.png")}
          />
          <Card.Body>
            <Card.Title>Digital Librarian</Card.Title>
            <Card.Text>
              Search for book results from the Google Books Api in a visually
              engaging manner.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link
              target="_blank"
              href="https://jamesgeneser.github.io/book-search/bookpage.html"
            >
              Go to Project page
            </Card.Link>
          </Card.Body>
        </Card>
        <Card className="portfolioCard">
          <Card.Img variant="top" src={require("../images/birdNerd.png")} />
          <Card.Body>
            <Card.Title>Bird Nerd</Card.Title>
            <Card.Text>
              {" "}
              Query a database of Colorado birds, id by description.
            </Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Link href="https://bird-nerd2023.herokuapp.com/">
              Go to Bird Nerd
            </Card.Link>
          </Card.Body>
        </Card> */}
      </Container>
    </>
  );
}

export default Project;
