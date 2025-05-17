import css from "./Loader.module.css"

export const Loader = () => {
  return (
    <div class={css.waterLoader}>
      <div class={css.drop}></div>
    </div>
  );
};
