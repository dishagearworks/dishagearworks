import type { SVGProps } from "react";

/**
 * Lightweight inline SVG icons (no icon library dependency).
 * Use <Icon name="turning" /> or IconMap[name].
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const GearIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M22 12h-3M5 12H2M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12M19.07 19.07l-2.12-2.12M7.05 7.05 4.93 4.93" />
  </svg>
);

export const TurningIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 12h18" />
    <rect x="3" y="9" width="13" height="6" rx="1" />
    <path d="M16 10l4-1v6l-4-1" />
  </svg>
);

export const MillingIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3v6" />
    <rect x="9" y="9" width="6" height="4" rx="1" />
    <path d="M12 13v4" />
    <path d="M5 21h14M8 17h8l1 4H7z" />
  </svg>
);

export const PrecisionIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
  </svg>
);

export const CustomIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.4 1.4 0 0 0 2 2l6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3Z" />
  </svg>
);

export const OemIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 21V8l9-5 9 5v13" />
    <path d="M9 21v-6h6v6" />
    <path d="M3 21h18" />
  </svg>
);

export const ContractIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M9 12h6M9 16h4" />
  </svg>
);

export const BatchIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="8" width="7" height="7" rx="1" />
    <rect x="14" y="4" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="6" rx="1" />
    <rect x="3" y="17" width="7" height="3" rx="1" />
  </svg>
);

export const TractorIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 17h2" />
    <circle cx="7" cy="17" r="3" />
    <circle cx="17" cy="17" r="4" />
    <path d="M4 14V8h6l2 5" />
    <path d="M10 8h4l1 5" />
  </svg>
);

export const ShieldIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const GlobeIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </svg>
);

export const MapPinIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PhoneIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);

export const DrillIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 5h9l3 3v3l-3 1H8l-2 4H4z" />
    <path d="M16 8h3l1 2-1 2h-3" />
    <path d="M8 16v3" />
  </svg>
);

export const BoringIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
  </svg>
);

export const TappingIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 2v6" />
    <path d="M9 8h6l-1 11a2 2 0 0 1-4 0L9 8Z" />
    <path d="M9.5 11h5M9.7 14h4.6M10 17h4" />
  </svg>
);

export const PrototypeIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.2 1 2.5h6c0-1.3.3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
  </svg>
);

export const UsersIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <path d="M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6" />
  </svg>
);

export const TruckIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 6h11v9H3z" />
    <path d="M14 9h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </svg>
);

export const TagIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 12V4h8l9 9-7 7-9-9Z" />
    <circle cx="7.5" cy="7.5" r="1.2" />
  </svg>
);

export const HandshakeIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M2 12l4-4 4 2 2-1 2 1 4-2 4 4" />
    <path d="M6 8v6M18 8v6" />
    <path d="M10 13l2 2 2-2 2 2" />
  </svg>
);

export const CubeIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
    <path d="M12 3v18M4 7.5l8 4.5 8-4.5" />
  </svg>
);

export const IconMap: Record<string, (props: IconProps) => JSX.Element> = {
  turning: TurningIcon,
  milling: MillingIcon,
  precision: PrecisionIcon,
  custom: CustomIcon,
  oem: OemIcon,
  contract: ContractIcon,
  batch: BatchIcon,
  tractor: TractorIcon,
  gear: GearIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
  globe: GlobeIcon,
  drill: DrillIcon,
  boring: BoringIcon,
  tapping: TappingIcon,
  prototype: PrototypeIcon,
  users: UsersIcon,
  truck: TruckIcon,
  tag: TagIcon,
  handshake: HandshakeIcon,
  cube: CubeIcon,
};

export function Icon({ name, ...props }: { name: string } & IconProps) {
  const Cmp = IconMap[name] ?? GearIcon;
  return <Cmp {...props} />;
}
