import { Button, Form } from "react-bootstrap";
import css from "./footer.module.css";
function NewsLetter() {
  return (
    <Form>
      <h3 className="mb-4 text-white">Newsletter</h3>
      <div className="d-flex">
        <Form.Control
          type="email"
          placeholder="Your email address"
          className={`${css.Input}  flex-grow-1`}
          required
        />
        <Button variant="primary" type="submit" className={css.btn}>
          Sign Up
        </Button>
      </div>
    </Form>
  );
}

export default NewsLetter;
