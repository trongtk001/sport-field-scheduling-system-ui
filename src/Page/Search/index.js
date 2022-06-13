import { Col, Container, FormSelect, Row } from "react-bootstrap";
import classNames from "classnames/bind";

import styles from "./SearchPage.module.scss";
import { FieldList } from "../../components";

const cx = classNames.bind(styles)

function SearchPage() {
    return (<>
        <Container >
            <Row className={cx('selection')}>
                <Col md='3'>
                    <FormSelect>
                        <option selected>Loại sân</option>
                        <option value="bongda" >Bóng đá</option>
                        <option value="bongro" >Bóng rổ</option>
                        <option value="tennis" >Tennis</option>
                    </FormSelect>
                </Col>

                <Col md='3'>
                    <FormSelect>
                        <option selected>Địa điểm</option>
                        <option value="ngoaithanh" >Ngoại Thành</option>
                        <option value="noithanh" >Nội Thành</option>
                    </FormSelect>
                </Col>
            </Row>

            <Row>
                {/* <FieldList data={searchResult}/> */}
            </Row>

        </Container>
    </> );
}

export default SearchPage;