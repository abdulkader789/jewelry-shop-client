// components/NavIcons.tsx
import { IconType } from "react-icons/lib";

interface NavIconsProps {
  icons: { icon: IconType; title: string }[];
}

const NavIcons: React.FC<NavIconsProps> = ({ icons }) => {
  return (
    <ul className="flex flex-col md:flex-row">
      {icons.map((item, index) => (
        <li key={index} className="flex pr-4 py-2 ">
          <item.icon className="text-orange-300" />
          <span className="font-navlink text-slate-800 text-[11px]  uppercase pl-2">
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default NavIcons;
