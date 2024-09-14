import { Img, Text, Button, Heading } from "../../components";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* hero section */}
      <div>
        <div>
          <div className="relative z-[3] h-[604px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[604px] w-[56%] rounded-[406px] bg-green-600_8c blur-[348.00px] backdrop-opacity-[0.5]" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[550px] flex-1 items-center justify-center bg-[url(/public/images/img_group_1.png)] bg-cover bg-no-repeat px-14 py-[152px] md:h-auto md:p-5">
              <div className="relative h-[242px] w-full max-w-[1220px] content-end md:h-auto">
                <div className="mb-2.5 ml-auto mr-[358px] h-[26px] w-[36%] bg-green-600 md:mr-0" />
                <Heading
                  size="headingxs"
                  as="h1"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 text-center text-[70px] font-extrabold leading-[80px] tracking-[0.70px] text-white-a700 md:text-[48px]"
                >
                  The Design & Marketing Agency You Need.
                </Heading>
              </div>
            </div>
          </div>
          <div className="relative mt-[-4px] h-[780px] overflow-auto">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start justify-center md:relative md:flex-col">
              <div className="relative z-[2] mt-16 h-[3px] w-[28%] rounded-[1px] bg-white-a700_66 md:px-5" />
              <div className="relative ml-[-440px] flex w-[80%] flex-col items-start self-center md:ml-0 md:w-full md:px-5">
                <Button
                  color="white_A700"
                  size="md"
                  className="relative z-[1] min-w-[552px] self-center rounded-[64px] !border-[3px] px-[31px] font-extrabold sm:px-5"
                >
                  OUR WORK
                </Button>
                <div className="relative mt-[-56px] flex h-[708px] w-[94%] items-end justify-center bg-[url(/public/images/img_group_27.png)] bg-cover bg-no-repeat p-8 md:h-auto md:w-full sm:p-5">
                  <div className="mt-[210px] flex w-full flex-col items-center gap-[126px] md:gap-[94px] sm:gap-[63px]">
                    <Text
                      size="textmd"
                      as="p"
                      className="font-timesnewroman text-[190px] font-normal tracking-[53.20px] text-white-a700 md:text-[48px]"
                    >
                      DAULAT
                    </Text>
                    <div className="flex flex-col items-end self-stretch">
                      <Img src="images/img_vector.svg" alt="Vector Image" className="h-[72px] w-[72px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-[-80px] top-[8%] m-auto h-[3px] w-[36%] rounded-[1px] bg-white-a700_66" />
          </div>
        </div>
      </div>
    </>
  );
}

