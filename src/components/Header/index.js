import { Button, Text, Img } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col justify-between items-center ml-[62px] mr-[68px] gap-5 md:mx-0`}
    >
      <Img
        src="images/img_header_logo.png"
        alt="Logo Image"
        className="h-[20px] w-[88px] self-start object-contain sm:self-auto"
      />
      <ul className="flex flex-wrap items-center gap-[74px] md:gap-5">
        <li>
          <a href="#">
            <Text as="p" className="font-poppins text-[20px] font-normal text-white-a700">
              About us
            </Text>
          </a>
        </li>
        <li>
          <a href="#">
            <Text as="p" className="font-poppins text-[20px] font-normal text-white-a700">
              Our Work
            </Text>
          </a>
        </li>
        <li>
          <a href="#">
            <Text as="p" className="font-poppins text-[20px] font-normal text-white-a700">
              Our Services
            </Text>
          </a>
        </li>
      </ul>
      <Button
        size="xs"
        shape="round"
        className="min-w-[132px] rounded-[12px] !border-[1.5px] px-[4.5px] font-extrabold"
      >
        Contact us
      </Button>
    </header>
  );
}

