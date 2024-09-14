import { Img, Text, Button } from "../../components";
import React from "react";

export default function NavigationHeader() {
  return (
    <>
      {/* navigation header section */}
      <div className="relative h-[486px] content-end overflow-auto md:h-auto">
        <Button shape="square" className="mx-auto mb-10 w-[74px]">
          <Img src="images/img_vector.svg" />
        </Button>
        <div className="absolute bottom-0 left-[-54px] top-0 my-auto flex h-max w-full max-w-[1542px] overflow-x-scroll md:relative md:flex-col md:px-5">
          <Img
            src="images/img_id_card.png"
            alt="Id Card Image"
            className="h-[486px] w-[486px] object-cover md:w-full"
          />
          <div className="flex w-[1054px] flex-1 items-center justify-end gap-[82px] md:flex-col md:self-stretch">
            <Text
              size="texts"
              as="p"
              className="mb-[164px] self-end font-antonio text-[90px] font-normal tracking-[19.80px] text-gray-200 md:mb-0 md:self-auto md:text-[48px]"
            >
              EXOGEAR
            </Text>
            <Img
              src="images/img_glow_sign.png"
              alt="Glow Sign Image"
              className="h-[486px] w-[486px] object-cover md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

