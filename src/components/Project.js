import Card from "react-bootstrap/Card";

function Project() {
  return (
    <>
      <h1 className="title">Portfolio</h1>
      <div className="cardStack">
        <Card className="portfolioCard">
          <Card.Img
            variant="top"
            src={require("../images/DiscoveringDenver.png")}
            alt="main page of Discovering Denver, hero image of concert"
          />
          <Card.Body>
            <Card.Title>Discovering Denver</Card.Title>
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
          <Card.Img variant="top" src={require("../images/birdNerd")} />
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
        </Card>
      </div>
    </>
  );
}

export default Project;
