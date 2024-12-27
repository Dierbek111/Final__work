import s from "./OurPricing.module.scss";
import React from "react";

const OurPricing = () => {
  return (
    <>
      <section className={s.OurPricing__text}>
        <div className="container">
          <div className="main__wrap">
            <div className="text__part">
              <div className="wrap__text">
                <p className={s.p}> Our Pricing </p>
                <h1 className={s.h1__OurPricing}>
                  Affordable VR Services for Everyone
                </h1>
                <p className={s.p_2}>
                  At VRNas, we believe that everyone should have access to the
                  benefits of VR. That's <br />
                  why we offer a range of pricing options to meet the needs of
                  any budget.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className={s.bgi_OurPricing}
          src="/OurServicePricingbgi.svg"
          alt=""
        />
      </section>

      {/* section about prices  */}

      <section className={s.price}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.wrapp__cards}>
              <div className={s.card__1}>
                <img src="/OuServicePricingCard.svg" alt="" />
                <div className={s.text__card}>
                  <p className={s.p__title}>Customizable Packages</p>
                  <p className={s.p__Text}>
                    We understand that each project is unique, so we offer
                    customizable packages <br />
                    to ensure that you get the services you need at a price that
                    works for you. Our <br />
                    team will work with you to create a package that meets your
                    specific goals and <br />
                    budget.
                  </p>
                </div>
              </div>
              <div className={s.card__2}>
                <img src="/OuServicePricingCard.svg" alt="" />
                <div className={s.text__card}>
                  <p className={s.p__title}>Flexible Payment Options</p>
                  <p className={s.p__Text}>
                    We understand that each project is unique, so we offer
                    customizable packages <br />
                    to ensure that you get the services you need at a price that
                    works for you. Our <br />
                    team will work with you to create a package that meets your
                    specific goals and <br />
                    budget.
                  </p>
                </div>
              </div>
              <div className={s.card__3}>
                <img src="/OuServicePricingCard.svg" alt="" />
                <div className={s.text__card}>
                  <p className={s.p__title}>Customizable Packages</p>
                  <p className={s.p__Text}>
                    We understand that each project is unique, so we offer
                    customizable packages <br />
                    to ensure that you get the services you need at a price that
                    works for you. Our <br />
                    team will work with you to create a package that meets your
                    specific goals and <br />
                    budget.
                  </p>
                </div>
              </div>
            </div>
            <div className={s.line}></div>
            <div className={s.hero__img}>
              <img
                className={s.hero_image}
                src="/OurServicePricesImg.svg"
                alt=""
              />
            </div>
          </div>

          <div className={s.price__table}>
            <p className={s.table__p}>Start From</p>
            <h1 className={s.table__h1}>$99</h1>
            <button className={s.table__btn}>GET STARTED</button>
            <p className={s.table__p_grey}>30 Days Moneyback Guarantee</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPricing;
