import "./button.styles.scss";

/* We have 3 different buttons;
 
default button,

inverted button,

google sign in button,
*/

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted-sign-in",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
