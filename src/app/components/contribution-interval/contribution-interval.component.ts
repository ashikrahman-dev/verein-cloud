import { Component } from '@angular/core';

@Component({
  selector: 'app-contribution-interval',
  imports: [],
  template: `
    <div class="contribution-interval-wrapper">
      <div class="main-dashboard">
        <div class="container">
          <h1 class="text-center fs-2 fw-medium pb-5 mb-3">
            Proceeding to Contribution <br />
            Interval and Due Date Settings
          </h1>

          <div class="tab-menu mb-4">
            <ul>
              <li>
                <div class="tab-a active-a" data-id="tab1">
                  <div class="tab-link">
                    <div class="tab-title">
                      <p class="tab-title-pra">Contributions</p>
                      <div class="check"></div>
                    </div>
                    <p class="tab-pra">Overview</p>
                  </div>
                </div>
              </li>

              <li>
                <div class="tab-a" data-id="tab2">
                  <div class="tab-link">
                    <div class="tab-title">
                      <p class="tab-title-pra">Create new</p>
                      <div class="check"></div>
                    </div>
                    <p class="tab-pra mb-0">Contribution 1</p>
                    <p class="tab-pra mb-0">Basic data</p>
                  </div>
                </div>
              </li>

              <li>
                <div class="tab-a" data-id="tab3">
                  <div class="tab-link">
                    <div class="tab-title">
                      <p class="tab-title-pra">Create new</p>
                      <div class="check"></div>
                    </div>
                    <p class="tab-pra mb-0">Contribution 2</p>
                    <p class="tab-pra mb-0">Interval and Due Date</p>
                  </div>
                </div>
              </li>

              <li>
                <div class="tab-a" data-id="tab4">
                  <div class="tab-link">
                    <div class="tab-title">
                      <p class="tab-title-pra">Create new</p>
                      <div class="check"></div>
                    </div>
                    <p class="tab-pra mb-0">Contribution 3</p>
                    <p class="tab-pra mb-0">Payment Terms and Calculation</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="tab-a" data-id="tab5">
                  <div class="tab-link">
                    <div class="tab-title">
                      <p class="tab-title-pra">Create new</p>
                      <div class="check"></div>
                    </div>
                    <p class="tab-pra mb-0">Contribution 4</p>
                    <p class="tab-pra mb-0">Calculation Configuration</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="tab-a" data-id="tab6">
                  <div class="tab-link">
                    <div class="tab-title">
                      <p class="tab-title-pra">Create new</p>
                      <div class="check"></div>
                    </div>
                    <p class="tab-pra mb-0">Contribution 5</p>
                    <p class="tab-pra mb-0">Finalization step</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!--end of tab-menu-->

          <div class="tab tab-active" data-id="tab1">
            <div class="step">
              <ul class="step-menu-wrap">
                <li class="testStatus step-item">Step 1</li>
                <li class="testStatusGood step-item">Step 2</li>
                <li class="testStatusNoGood step-item">Step 3</li>
                <li class="testStatus step-item">Step 4</li>
              </ul>
              <div class="tab-contents text-center">
                <h3 class="fs-4">
                  Proceeding to Contribution Interval and Due Date Settings
                </h3>
                <p class="fs-14">
                  Define the interval, billing period, and due date for a
                  structured and automated billing cycle.
                </p>

                <div class="button-wrap">
                  <button type="button" class="step-button fill">
                    Procced
                  </button>
                  <button type="button" class="step-button">Cancel</button>
                </div>
              </div>
            </div>
          </div>

          <div class="tab " data-id="tab2">
            <h2>heading of tab two</h2>
            <p>Content of tab two</p>
          </div>
          <div class="tab " data-id="tab3">
            <h2>heading of tab three</h2>
            <p>Content of tab three</p>
          </div>
          <div class="tab " data-id="tab4">
            <h2>heading of tab four</h2>
            <p>Content of tab four</p>
          </div>
          <div class="tab " data-id="tab5">
            <h2>heading of tab foudfsdfr</h2>
            <p>Content of tab four</p>
          </div>
          <div class="tab " data-id="tab6">
            <h2>heading of tab fasdour</h2>
            <p>Content of tab four</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .contribution-interval-wrapper {
      padding: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: calc(90vh - 64px);
    }
    p {
      font-size: 40px;
      color: #333;
    }




    
.main-dashboard {
    padding: 100px;

    .tab-menu {
        .tab-a {
            height: 100%;
            .tab-link {
                padding: 12px 16px;
                border-radius: 16px;
                background: #fff;
                width: 100%;
                border-bottom: 1.5px solid #fff;
                transition: 0.2s all linear;
                cursor: pointer;
                height: 100%;

                .tab-title {
                    display: flex;
                    align-items: start;
                    justify-content: space-between;
                    margin-bottom: 20px;
                    gap: 8px;

                    .tab-title-pra {
                        color: #999;
                        font-size: 10px;
                        font-weight: 700;
                    }
                    .check {
                        width: 16px;
                        height: 16px;
                        border-radius: 100px;
                        flex-shrink: 0;
                        border: 0.67px solid #999;
                        position: relative;

                        &::after {
                            content: "";
                            position: absolute;
                            width: 9px;
                            height: 9px;
                            background-color: #bbef5c;
                            border-radius: 50%;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            opacity: 0;
                            transition: 0.1s all linear;
                        }
                    }
                }
                .tab-pra {
                    color: #5a5a5a;
                    font-size: 12px;
                    font-weight: 400;
                }
            }
            &.active-a {
                .tab-link {
                    border-bottom: 1.5px solid #ff0032;
                    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
                }
                .check {
                    border-color: #000 !important;
                    &::after {
                        opacity: 1 !important;
                    }
                }
                .tab-title-pra {
                    color: #5a5a5a !important;
                }
                .tab-pra {
                    color: #000 !important;
                }
            }
        }
    }

    .tab-menu {
        ul {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            padding: 0;
            li {
                list-style-type: none;
                width: 100%;
            }
        }
    }

    .tab {
        display: none;
    }

    .tab-active {
        display: block;
    }
}

/* banner - END*/

/* arrow-shape - start*/

.step {
    .step-menu-wrap {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 32px;
        align-items: center;
        .step-item {
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ffe28e;
            padding: 0 24px;
            position: relative;
            width: 100%;

            &::after {
                content: "";
                position: absolute;
                background-color: #ffe28e;
                clip-path: polygon(
                    25% 0%,
                    57% 0,
                    100% 50%,
                    57% 100%,
                    25% 100%,
                    25% 50%
                );
                width: 30px;
                height: 100%;
                right: -18px;
            }
            &::before {
                content: "";
                position: absolute;
                background-color: #ffe28e;
                clip-path: polygon(
                    62% 0,
                    100% 50%,
                    62% 100%,
                    0% 100%,
                    41% 49%,
                    0% 0%
                );
                width: 30px;
                height: 100%;
                left: -18px;
            }

            &:first-child {
                border-radius: 16px 0 0 0;

                &::before {
                    clip-path: polygon(
                        25% 0%,
                        100% 0,
                        100% 50%,
                        100% 100%,
                        25% 100%,
                        25% 50%
                    );
                    background-color: #ffe28e;
                    border-radius: 16px 0 0 0;
                    width: 20px;
                    left: 0;
                }
            }
            &:last-child {
                border-radius: 0 16px 0 0;

                &::after {
                    clip-path: polygon(
                        25% 0%,
                        100% 0,
                        100% 50%,
                        100% 100%,
                        25% 100%,
                        25% 50%
                    );
                    background-color: #ffe28e;
                    border-radius: 0 16px 0 0;
                    width: 20px;
                    left: 0;
                }
            }
        }
    }
    .tab-contents {
        background-color: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
        border-radius: 0px 0px 16px 16px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
        padding: 24px;
        .fs-14 {
            font-size: 14px;
        }
        .button-wrap {
            display: flex;
            align-items: center;
            gap: 12px;
            justify-content: center;
            margin-top: 24px;

            .step-button {
                height: 42px;
                padding: 12px 20px;
                display: flex;
                align-items: center;
                border-radius: 50px;
                justify-content: center;
                border: 1px solid #5a5a5a;
                background: transparent;
                font-size: 14px;
                font-weight: bold;
                transition: 0.2s all linear;

                &:hover {
                    background-color: #5a5a5a !important;
                    color: #fff;
                }

                &.fill {
                    background-color: #000 !important;
                    color: #fff;
                    transition: 0.2s all linear;

                    &:hover {
                        background-color: #5a5a5a !important;
                    }
                }
            }
        }
    }
}






    
  `,
})
export class ContributionIntervalComponent {}
