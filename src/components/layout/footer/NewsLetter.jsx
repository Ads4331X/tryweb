import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import css from "./footer.module.css";
function NewsLetter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3 className="mb-4 text-white">Newsletter</h3>
      <div className={`d-flex ${css.newsletterFormRow}`}>
        <Form.Control
          type="email"
          placeholder="Your email address"
          className={`${css.Input} flex-grow-1`}
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (isSubmitted) setIsSubmitted(false);
          }}
        />
        <Button variant="primary" type="submit" className={css.btn}>
          Sign Up
        </Button>
      </div>
      {isSubmitted && (
        <small className="text-success d-block mt-2">
          Thanks for signing up. We will keep you updated.
        </small>
      )}
    </Form>
  );
}

export default NewsLetter;
