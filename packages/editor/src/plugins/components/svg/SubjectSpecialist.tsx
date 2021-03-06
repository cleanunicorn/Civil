import * as React from "react";

export interface SvgProps {
  color: string;
}

export class SubjectSpecialist extends React.Component<SvgProps> {
  public render(): JSX.Element {
    return (
      <svg width="16px" height="16px" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-380.000000, -1237.000000)" fill={this.props.color}>
            <g transform="translate(126.000000, 212.000000)">
              <g>
                <g transform="translate(245.000000, 511.000000)">
                  <g transform="translate(9.000000, 510.000000)">
                    <g transform="translate(0.000000, 4.000000)">
                      <path
                        d={`M3.9375,9.29674626 C4.122,9.32085678 4.309125,
                                    9.33310649 4.5,9.33310649 C4.690875,9.33310649 4.878,
                                    9.32085678 5.0625,9.29674626 L5.0625,12.6508314 L4.5,13.1126257 L3.9375,
                                    12.6508314 L3.9375,9.29674626 Z M6.75,8.7011774 L6.75,11.2776981 L5.8125,
                                    12.0432073 L5.8125,9.12661151 C6.1425,9.02200294 6.4569375,8.87753423 6.75,
                                    8.7011774 Z M2.25,8.7011774 C2.5430625,8.87753423 2.8575,9.02200294 3.1875,
                                    9.12661151 L3.1875,12.0432073 L2.25,11.2776981 L2.25,8.7011774 Z M4.5,
                                    2.33327662 C5.7470625,2.33327662 6.75,3.37352912 6.75,4.66674768 C6.75,
                                    5.95996625 5.7470625,6.99982987 4.5,6.99982987 C3.2529375,6.99982987 2.25,
                                    5.95996625 2.25,4.66674768 C2.25,3.37352912 3.2529375,2.33327662 4.5,
                                    2.33327662 Z M4.5,1.55551775 C2.8475625,1.55551775 1.5,2.95315044 1.5,
                                    4.66674768 C1.5,6.38015048 2.8475625,7.77778318 4.5,7.77778318 C6.1524375,
                                    7.77778318 7.5,6.38015048 7.5,4.66674768 C7.5,2.95315044 6.1524375,
                                    1.55551775 4.5,1.55551775 Z M4.5,0.777758874 C6.5754375,0.777758874 8.25,
                                    2.5143 8.25,4.66674768 C8.25,6.81900093 6.5754375,8.55534761 4.5,
                                    8.55534761 C2.4245625,8.55534761 0.75,6.81900093 0.75,4.66674768 C0.75,
                                    2.5143 2.4245625,0.777758874 4.5,0.777758874 Z M4.5,0 C2.0191875,0 0,
                                    2.09411577 0,4.66674768 C0,6.04415865 0.581625,7.28157302 1.5,8.13613558 L1.5,
                                    11.4721378 C1.5,11.5903572 1.5515625,11.7019656 1.640625,11.7758527 L4.265625,
                                    13.9146896 C4.4025,14.0284368 4.5975,14.0284368 4.734375,13.9146896 L7.359375,
                                    11.7758527 C7.4484375,11.7019656 7.5,11.5903572 7.5,11.4721378 L7.5,
                                    8.13613558 C8.418375,7.28157302 9,6.04415865 9,4.66674768 C9,2.09411577 6.9808125,
                                    0 4.5,0 Z`}
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
