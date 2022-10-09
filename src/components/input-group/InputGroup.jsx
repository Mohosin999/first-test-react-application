import classes from "./InputGroup.module.css";

const InputGroup = (props) => {
  const label = props.label;
  const type = props.type;
  const id = props.id;

  return (
    <div className={classes.signupFormDiv}>
      <label className={classes.signupFormLabel} htmlFor={id}>
        {label}
      </label>
      <input className={classes.signupFormInput} type={type} id={id} />
    </div>
  );
};

export default InputGroup;
