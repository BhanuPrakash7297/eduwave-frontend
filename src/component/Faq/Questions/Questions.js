import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Faques } from "../../../FakeData";
const Questions = () => {
  const [filterItem, setFilterItem] = useState("Online Education");
  const [filtedfaq, setfiltedFaq] = useState([]);
  useEffect(() => {
    const filteed = Faques.filter((item) => item.category === filterItem);
    setfiltedFaq(filteed);
  }, [filterItem]);

  return (
    <section className="edu-faq">
      <Container>
        <Accordion flush>
          <div className="row">
            <div className="col-lg-12 mb-5">
              <div className="section-title text-center " data-aos="fade-up">
                <span className="pre-title">FaQ Questions</span>
                <h3 className="title">Get Every General Answers From Here</h3>
              </div>
              <ul className="eduNavTab">
                <li className="nav-item">
                  <button
                    className="nav-button"
                    onClick={() => setFilterItem("Online Education")}
                  >
                    Online Education{" "}
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-button"
                    onClick={() => setFilterItem("Payment Method")}
                  >
                    Payment Method{" "}
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-button"
                    onClick={() => setFilterItem("Pricing Plan")}
                  >
                    Pricing Plan{" "}
                  </button>
                </li>
              </ul>
            </div>
            {filtedfaq.map((faq) => (
              <div className="col-md-6 col-sm-11 p-0" key={faq.id}>
                <Accordion.Item eventKey={faq.id}>
                  <Accordion.Header>{faq.header}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              </div>
            ))}
          </div>
        </Accordion>
      </Container>
    </section>
  );
};

export default Questions;
