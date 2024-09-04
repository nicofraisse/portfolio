import React from "react"
import Separator from "../components/separator.js"
import "../styles/imports.scss"

export default () => (
  <div className="about pt-4 px-2 px-sm-4 px-lg-5 pb-5">
    <div id="invisibleScrollLocation"></div>
    <div className="container-lg">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 col-lg-11 col-xl-9">
          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <h2 className="my-5 text-color-shadow">Values</h2>
            <div id="sc4">
              <Separator
                marginBottom="-56px"
                transform="perspective(48px) rotateX(18deg)"
              />
            </div>
          </div>

          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <p>
              <span className="value-header">
                Big Picture Focus in Every Detail.
              </span>{" "}
              Even in the smallest tasks, I always stay connected to the broader
              goal of delivering a great product. This mindset drives motivation
              and ensures that every piece contributes meaningfully to the final
              result.
            </p>
          </div>

          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <p>
              <span className="value-header">
                UI/UX as an Engineering Challenge.
              </span>{" "}
              I see UI and UX as technical problems, not just creative
              endeavors. Organizing complex information and features in a
              simple, intuitive way for the user is more about science than art,
              requiring both precision and strategy.
            </p>
          </div>

          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <p>
              <span className="value-header">Empathy-Driven Design.</span>{" "}
              Designing with empathy for the user is essential. I strive to see
              products through the user’s eyes, understanding their behavior,
              needs, and first impressions, while creating a personalized
              experience that goes beyond the generic.
            </p>
          </div>
          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <p>
              <span className="value-header">
                Prioritize Decisions, Then Productivity.
              </span>{" "}
              The quality of a project starts with clear decision-making. It’s
              not about doing more but making sure the right things are done
              well. Effective solutions come from prioritizing impactful work,
              not just output.
            </p>
          </div>
          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <p>
              <span className="value-header">
                Balancing Creativity and Functionality.
              </span>{" "}
              While I appreciate the beauty in creative solutions, I believe
              functionality should always take precedence. My goal is to blend
              technical excellence with thoughtful design that serves the user
              and the product’s purpose.
            </p>
          </div>

          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <p>
              <span className="value-header">
                Patience in Mentorship & Teaching.
              </span>{" "}
              Teaching others not only helps them grow but challenges and
              strengthens my own understanding. I believe that by explaining
              complex concepts simply, I improve my own skills and cultivate
              continuous learning.
            </p>
          </div>

          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <p>
              <span className="value-header">
                Code as a Means, Not the Goal.
              </span>{" "}
              Code is one of many tools to build a product, which only matters
              insofar as it delivers value to people. Therefore, I'm open to
              using any tool or method - AI, open-source, or custom code - that
              best serves the product vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
