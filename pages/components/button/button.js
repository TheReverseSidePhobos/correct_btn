import style from "./button.module.scss";
import cn from "classnames";

const P_Button = ({
  disabled = false,
  type = null,
  text = null,
  size = null,
  icon = null,
  circle = null,
  onClick = () => {},
}) => {
  return (
    <button
      className={cn(style.main, {
        //disabled
        [style.disabled]: disabled,
        //sizes
        [style.lg]: size === "lg",
        [style.md]: size === "md",
        [style.sm]: size === "sm",
        //types
        [style.primary]: type === "primary",
        [style.secondary]: type === "secondary",
        [style.soft]: type === "soft",
        [style.lilPrimary]: type === "lil-primary",
        [style.ghost]: type === "ghost",
        [style.critical]: type === "critical",
        [style.lilCritical]: type === "lil-critical",
        [style.circle]: circle === "true",
        [style.smCircle]: circle === "true" && size === "sm"
      })}
      onClick={onClick}
    >
      {!!icon && (
        <div className={cn(style.icon, { [style.noText]: !text })}>{icon}</div>
      )}
      <p>{text}</p>
    </button>
  );
};

export default P_Button;
