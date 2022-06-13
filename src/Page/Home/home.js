import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames/bind";

import styles from "./home.module.scss";
import {FieldList} from "../../components";
import callApi from "../../util/api";

const cx = classNames.bind(styles)

function Home() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    callApi("field", "GET", {page:"1", size:"6"}, null).then((res) =>
      setdata(res.data.list)
    );
  }, []);

  return (
    <div className={cx('home')}>
      <div className={cx('slide')}>
        <img src="../slice.png" alt="" />
      </div>

      <Container>
        <Row>
          <Col className={cx('left-container')} md="3">
            <ul>
              <li>
                <Link to="/bong-da">BÓNG ĐÁ</Link>
              </li>
              <li>
                <Link to="/bong-ro">BÓNG RỔ</Link>
              </li>
              <li>
                <Link to="/tennis">TENNIS</Link>
              </li>
            </ul>
          </Col>
          <Col className={cx('primary-container')} md='9'>
            <FieldList data={data}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
