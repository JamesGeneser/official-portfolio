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
          />
          <Card.Body>
            <Card.Title>Discovering Denver</Card.Title>
            <Card.Text>
              Explore a variety of activities around Denver. Read and write
              reviews and ratings!
            </Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Link href="#">Go to Project page</Card.Link>
          </Card.Body>
        </Card>
        <Card className="portfolioCard">
          <Card.Img variant="top" src={require("../images/Librarian.png")} />
          <Card.Body>
            <Card.Title>Digital Librarian</Card.Title>
            <Card.Text>
              Search for book results from the Google Books Api in a visually
              engaging manner.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Go to Project page</Card.Link>
          </Card.Body>
        </Card>
        <Card className="portfolioCard">
          <Card.Img variant="top" src={require("../images/ComeInside.gif")} />
          <Card.Body>
            <Card.Title>Come Inside Music Video</Card.Title>
            <Card.Text>Original drawn animations by James Geneser</Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Link href="#">Go to Youtube</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Project;
