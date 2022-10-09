import Layout from "../components/layout/Layout";
import classes from "./Contact.module.css";
import InputGroup from "../components/input-group/InputGroup";
import Button from "../components/button/Button";

const Contact = () => {
  return (
    <Layout>
      <div className={classes.signupBody}>
        <div className={classes.signupHeadingDiv}>
          <h3 className={classes.signupHeading}>Sign Up</h3>
          <p className={classes.signupPara}>
            If you want to sign up, please fill up this form with correct
            information
          </p>
        </div>
        <form>
          <InputGroup label="What is Your Name?" type="text" id="name" />
          <InputGroup label="What is Your Email?" type="email" id="email" />
          <InputGroup
            label="What is Your Password?"
            type="password"
            id="password"
          />
          <div className={classes.button}>
            <Button type="reset" text="Reset" variant="primary" size="medium" />
            <Button type="submit" text="Submit" variant="warning" size="medium" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
