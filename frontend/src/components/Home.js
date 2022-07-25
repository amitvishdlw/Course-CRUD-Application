import React, { useEffect } from "react";
import { Jumbotron, Container, Button } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || Courses";
  }, []);
  return (
    <div>
      <Jumbotron className="text-center">
        <h1>Courses App</h1>
        <p>This manages a list of courses.</p>
        <Container>
          <Button color="primary" outline>
            Start Using
          </Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
