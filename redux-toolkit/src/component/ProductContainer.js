import { Button } from "react-bootstrap";
import { makeOrder } from "./../Redux/Product/ProductAction";
import { connect } from "react-redux";

const ProductContainer = (props) => {
  return (
    <>
      <h2>Welocme to Redux Toolkit </h2>
      <h3>Available Product Qty: {props.noOfProduct}</h3>
      <Button onClick={props.makeOrder}>Make Order</Button>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    makeOrder: () => dispatch(makeOrder()),
  };
};
export default connect(ProductContainer, mapDispatchToProps)(ProductContainer);
