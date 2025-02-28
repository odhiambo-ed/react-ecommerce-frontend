import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_100 flex flex-col p-[12px] relative rounded-[4px] w-[100%]">
          <div className="flex items-center justify-start mx-[auto] w-[92%]">
            <div className="flex flex-row items-start justify-between w-[100%]">
              <Button className="bg-red_600 cursor-pointer font-normal font-poppins mb-[50px] min-w-[55px] not-italic px-[12px] py-[4px] rounded-[4px] text-[12px] text-center text-gray_50 w-[auto]">
                {props?._40}
              </Button>
              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                <Button className="bg-white_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                  <Img
                    src="images/img_favorite.svg"
                    className="h-[24px]"
                    alt="favorite"
                  />
                </Button>
                <Button className="bg-white_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                  <Img
                    src="images/img_eye.svg"
                    className="h-[24px]"
                    alt="eye"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start mb-[auto] mt-[-53px] mx-[auto] p-[9px] w-[71%] z-[1]">
            <Img
              src="images/img_g922500x5001.png"
              className="h-[152px] md:h-[auto] my-[5px] object-cover w-[100%]"
              alt="g922500x5001"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.havithvg92GamepOne}
          </Text>
          <div className="flex flex-row gap-[12px] items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-medium font-poppins text-left text-red_600 w-[auto]"
              variant="body3"
            >
              {props?.price}
            </Text>
            <Text
              className="font-medium font-poppins line-through text-black_900_87 text-left w-[auto]"
              variant="body3"
            >
              {props?.oldprice}
            </Text>
          </div>
          <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
            <Img
              src="images/img_ticket.svg"
              className="h-[20px] w-[100px]"
              alt="ticket"
            />
            <Text
              className="font-poppins font-semibold text-black_900_87 text-left w-[auto]"
              variant="body5"
            >
              {props?.eightyeight}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageColumn.defaultProps = {
  _40: "-40%",
  havithvg92GamepOne: "HAVIT HV-G92 Gamepad",
  price: "$120",
  oldprice: "$160",
  eightyeight: "(88)",
};

export default ECommerceHomePageColumn;
