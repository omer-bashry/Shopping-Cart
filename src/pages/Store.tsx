import { Col, Row } from "react-bootstrap";
import storeItem from "../data/items.json";
import { StoreItem } from "../components/SroreItem";

export function Store() {
  return (
    <>
      <h1>Store Page</h1>
      <Row lg={3} md={2} xs={1} sm={1}>
        {storeItem.map((item) => (
          <Col key={item.id} className="g-3">
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
