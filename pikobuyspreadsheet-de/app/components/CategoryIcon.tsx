type CategoryIconProps = {
  name: string;
};

export default function CategoryIcon({ name }: CategoryIconProps) {
  const icon = (() => {
    switch (name) {
      case "Shoes":
        return <path d="M4 18h17v-3l-6-1.5-3.5-4-2 4L4 16v2Zm4-2h8" />;
      case "Hoodies":
        return <path d="M8 5.5 12 4l4 1.5 4 4-3 3-1.5-1.5V20h-7v-9L7 12.5l-3-3 4-4ZM9.5 5.5c.5 2.5 4.5 2.5 5 0" />;
      case "T-Shirts":
        return <path d="m8 5 4-1 4 1 4 3-2.5 3L16 9.5V20H8V9.5L6.5 11 4 8l4-3Z" />;
      case "Jackets":
        return <path d="m8 5 4-1 4 1 4 4-3 2.5-1-2V20H8V9.5l-1 2L4 9l4-4Zm4-1v16m-2-9h1m3 0h1" />;
      case "Pants / Shorts":
        return <path d="M7 4h10l-1 16h-4l-1-9-1 9H6L7 4Zm0 4h10" />;
      case "Headwear":
        return <path d="M5 14c.5-5.5 3-8 7-8s6.5 2.5 7 8H5Zm0 0c2 2 5 3 9 3h6" />;
      case "Accessories":
        return <path d="M6 9h12l1 11H5L6 9Zm3 0V7a3 3 0 0 1 6 0v2" />;
      case "Jerseys":
        return <path d="m8 5 4-1 4 1 4 3-2.5 3L16 9.5V20H8V9.5L6.5 11 4 8l4-3Zm2 2h4m-3 4h2v5h-2" />;
      case "Electronics":
        return <><rect x="6" y="4" width="12" height="16" rx="2" /><path d="M10 7h4m-3 10h2" /></>;
      default:
        return <><path d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z" /><path d="m4 8 8 4.5L20 8m-8 4.5v8" /></>;
    }
  })();

  return (
    <svg className="category-icon" viewBox="0 0 24 24" aria-hidden="true">
      {icon}
    </svg>
  );
}
