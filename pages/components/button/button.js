import style from "./P_Button.module.scss";
import cn from "classnames";
import Link from "next/link";

const P_Button = ({
  type = null,
  disabled = false,
  text = null,
  size = null,
  icon = null,
  circle = null,
  submit = null,
  noTab = false,
  href = "",
  isLink = false,
  styleInline = null,
  ref = null,
  color = null,
  onClick = () => {},
  className = "",
  target = null,
}) => {
  if (!isLink) {
    return (
      <button
        target={target}
        ref={ref}
        style={styleInline}
        noTab={noTab ? -1 : 1}
        type={submit}
        className={cn(style.main, className, {
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
          [style.points]: type === "points",
          [style.circle]: circle,
          [style.smCircle]: circle && size === "sm",
          [style.white]: color === "white",
        })}
        onClick={onClick}
      >
        {!!icon && (
          <div className={cn(style.icon, { [style.noText]: !text })}>
            {icon}
          </div>
        )}
        <p>{text}</p>
      </button>
    );
  } else {
    return (
      <Link href={href}>
        <a
          target={target}
          style={styleInline}
          noTab={noTab ? -1 : 1}
          type={submit}
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
            [style.points]: type === "points",
            [style.circle]: circle,
            [style.smCircle]: circle && size === "sm",
          })}
          onClick={onClick}
        >
          {!!icon && (
            <div className={cn(style.icon, { [style.noText]: !text })}>
              {icon}
            </div>
          )}
          <p>{text}</p>
        </a>
      </Link>
    );
  }
};

export default P_Button;
