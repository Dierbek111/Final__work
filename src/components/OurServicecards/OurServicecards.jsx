import s from "./OurServicecards.module.scss";
import React from "react";

const OurServicecards = () => {
  return (
    <>
      <section className={s.section}>
        <div className="container">
          <div className={s.wrapper}>
            <nav className={s.nav}>
              <div className={s.text}>
                <p>OUR SERVICE</p>
                <h1 className={s.h1__our_service}>Our Service</h1>
              </div>

              <div className={s.p}>
                <p>
                  We use the latest VR hardware and software to create
                  high-quality VR experiences that are accessible and
                  affordable. Our goal is to provide exceptional customer
                  service and support, and our team is always available to
                  answer any questions and address any concerns you may have.
                </p>
              </div>
            </nav>

            <div className={s.box}>
              <div className={s.vr_block_1}>
                <div className={s.vr}>
                  <img src="/OurService_card-1.svg" alt="VR Development" />
                  <div>
                    <h1 className={s.h1__our_service}>VR Development</h1>
                    <p>
                      From concept to creation, our team of VR developers will
                      bring your vision to life.
                    </p>
                  </div>
                  <button className={s.learnMore}>LEARN MORE</button>
                </div>

                <div className={s.vr}>
                  <img src="/OurService_card-2.svg" alt="VR Games" />
                  <div>
                    <h1 className={s.h1__our_service}>VR Games</h1>
                    <p>
                      We offer a wide selection of VR games that are suitable
                      for players of all ages and skill levels.
                    </p>
                  </div>
                  <button className={s.learnMore}>LEARN MORE</button>
                </div>
              </div>

              <div className={s.vr_block_2}>
                <div className={s.vr}>
                  <img src="/OurService_card-3.svg" alt="VR Design" />
                  <div>
                    <h1 className={s.h1__our_service}>VR Design</h1>
                    <p>
                      Our talented VR designers will create immersive and
                      engaging environments that will captivate your audience.
                    </p>
                  </div>
                  <button className={s.learnMore}>LEARN MORE</button>
                </div>

                <div className={s.vr}>
                  <img src="/OurService_card-4.svg" alt="VR Events" />
                  <div>
                    <h1 className={s.h1__our_service}>VR Events</h1>
                    <p>
                      We offer a wide selection of VR games that are suitable
                      for players of all ages and skill levels.
                    </p>
                  </div>
                  <button className={s.learnMore}>LEARN MORE</button>
                </div>
              </div>

              <div className={s.vr_block_3}>
                <div className={s.vr}>
                  <img src="/OurService_card-5.svg" alt="VR Consulting" />
                  <div>
                    <h1 className={s.h1__our_service}>VR Consulting</h1>
                    <p>
                      Our VR consultants will work with you to ensure that your
                      VR experience meets your goals and exceeds your
                      expectations.
                    </p>
                  </div>
                  <button className={s.learnMore}>LEARN MORE</button>
                </div>

                <div className={s.vr}>
                  <img src="/OurService_card-6.svg" alt="VR Entertainment" />
                  <div>
                    <h1 className={s.h1__our_service}>VR Entertainment</h1>
                    <p>
                      Create a VR escape room, or offer VR experiences at a theme
                      park, we have the expertise and experience to make it
                      happen.
                    </p>
                  </div>
                  <button className={s.learnMore}>LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServicecards;
