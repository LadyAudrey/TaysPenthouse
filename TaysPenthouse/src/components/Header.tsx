import { Image, Dropdown } from "react-bootstrap";

export default function Header() {
  return (
    <header>
      <Image src="/public/Miscellaneous/TS_Tribute.IM_Fell_DW_Pica.svg"></Image>
      <h1>Taylor's Penthouse</h1>
      <Dropdown.Menu>
        <Dropdown.Item>Album Info</Dropdown.Item>
        <Dropdown.Item>Song Sorter</Dropdown.Item>
        <Dropdown.Item>About This Site</Dropdown.Item>
      </Dropdown.Menu>
    </header>
  );
}
