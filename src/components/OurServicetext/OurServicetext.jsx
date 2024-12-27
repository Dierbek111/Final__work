import React from "react";
import s from "./OurServicetext.module.scss";

const OurServicetext = () => {
  return (
    <>
      <section class={s.text__section}>
        <div class="container">
          <div class={s.wrapper}>
            <div class={s.cards}>
              <div class={s.card-1}>
                <p className={s.text}>HAPPY CLIENTS</p>
                <h1 className={s.h1}>123k+</h1>
              </div>
              <div class={s.card-2}>
                <p className={s.text}>PROJECT COMPLETE</p>
                <h1 className={s.h1}>300k+</h1>
              </div>
              <div class={s.card-3}>
                <p className={s.text}>YEARS EXPERIENCE</p>
                <h1 className={s.h1}>10+</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServicetext;
