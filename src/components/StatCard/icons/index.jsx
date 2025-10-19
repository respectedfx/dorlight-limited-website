import React from "react";

export const TotalAreaIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 12H8C6.89543 12 6 12.8954 6 14V34C6 35.1046 6.89543 36 8 36H40C41.1046 36 42 35.1046 42 34V14C42 12.8954 41.1046 12 40 12Z"
      stroke="#E31E24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 20H33M15 28H25"
      stroke="#E31E24"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const ApartmentsIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M38 6H10C8.89543 6 8 6.89543 8 8V40C8 41.1046 8.89543 42 10 42H38C39.1046 42 40 41.1046 40 40V8C40 6.89543 39.1046 6 38 6Z"
      stroke="#E31E24"
      strokeWidth="2"
    />
    <path
      d="M16 14H20M16 22H20M16 30H20M28 14H32M28 22H32M28 30H32"
      stroke="#E31E24"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const ConstructionsIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 42H40M12 38V24M20 38V24M28 38V24M36 38V24M6 20L24 6L42 20"
      stroke="#E31E24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RoomsIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6"
      y="14"
      width="36"
      height="24"
      rx="2"
      stroke="#E31E24"
      strokeWidth="2"
    />
    <path
      d="M14 26H34M14 32H24"
      stroke="#E31E24"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 6V14M16 8L24 6L32 8"
      stroke="#E31E24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const icons = {
  totalArea: TotalAreaIcon,
  apartments: ApartmentsIcon,
  constructions: ConstructionsIcon,
  rooms: RoomsIcon,
};

export default icons;
